import db from "../models/index";
require('dotenv').config();
import emailService from './emailService';
import { v4 as uuidv4 } from 'uuid';

let buildUrlEmail = (doctorId, token) => {
    let result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`
    return result;
}

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.date || !data.timeType
                || !data.fullName || !data.selectedGender || !data.address
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required param!'
                })
            } else {
                let token = uuidv4();
                await emailService.sendSimpleEmail({
                    recieverEmail: data.email,
                    patientName: data.fullName,
                    time: data.timeString,
                    doctorName: data.doctorName,
                    language: data.language,
                    redirectLink: buildUrlEmail(data.doctorId, token)
                })

                //upsert patient
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                        gender: data.selectedGender,
                        address: data.address,
                        firstName: data.fullName
                    },
                });

                // update patient and check history
                if (!user[1]) {
                    user[0].gender = data.selectedGender;
                    user[0].address = data.address;
                    user[0].firstName = data.fullName

                    let appointment = await db.Booking.findAll({
                        where: {
                            patientId: user[0].id,
                            statusId: 'S1' || 'S2'
                        },
                        raw: false
                    })
                    if (appointment && appointment.length > 0) {
                        resolve({
                            data: user,
                            errCode: 0,
                            errMessage: 'Save Infor user succeed!'
                        })
                    } else {
                        await db.Booking.create({
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            token: token
                        })
                        resolve({
                            data: user,
                            errCode: 0,
                            errMessage: 'Save Infor user succeed!'
                        })
                    }
                }

                //create a booking record
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            token: token
                        }

                    })
                }

                resolve({
                    data: user,
                    errCode: 0,
                    errMessage: 'Save Infor user succeed!  '
                })
            }
        } catch (error) {
            reject(error);
        }
    })
}

let postVerifyBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.token || !data.doctorId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required param!'
                })
            } else {
                let appointment = await db.Booking.findOne({
                    where: {
                        doctorId: data.doctorId,
                        token: data.token,
                        statusId: 'S1'
                    },
                    raw: false
                })

                if (appointment) {
                    appointment.statusId = 'S2';
                    await appointment.save();
                    resolve({
                        errCode: 0,
                        errMessage: "Update the appointment succeed!"
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: "Appointment has been activated or doesn't exist"
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    postBookAppointment: postBookAppointment,
    buildUrlEmail: buildUrlEmail,
    postVerifyBookAppointment: postVerifyBookAppointment
}