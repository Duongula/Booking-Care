import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';

class HomeFooter extends Component {

    render() {

        return (
            <div className="container container-new">
                <div className='col-con col1'>
                    <svg class="block w-auto h-[39px] mx-auto sm:mx-0" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
                        <g clip-path="url(#ciaxufuzki-clip0_3122_4634)">
                            <path d="M24.9999 35.311C24.0217 35.311 23.0836 35.6919 22.3918 36.3697C21.7001 37.0476 21.3115 37.967 21.3115 38.9257V46.0104C21.3115 46.969 21.7001 47.8884 22.3918 48.5663C23.0836 49.2442 24.0217 49.625 24.9999 49.625C25.9782 49.625 26.9163 49.2442 27.608 48.5663C28.2997 47.8884 28.6883 46.969 28.6883 46.0104V38.9257C28.6883 37.967 28.2997 37.0476 27.608 36.3697C26.9163 35.6919 25.9782 35.311 24.9999 35.311Z" fill="#54AB9A"></path>
                            <path d="M17.645 32.3262C16.9536 31.6507 16.0172 31.2715 15.041 31.2715C14.0647 31.2715 13.1283 31.6507 12.4369 32.3262L7.32483 37.3361C6.71009 38.0268 6.38602 38.9205 6.4182 39.8365C6.45039 40.7524 6.83641 41.6222 7.49817 42.2698C8.15993 42.9174 9.04802 43.2945 9.98272 43.3247C10.9174 43.355 11.8289 43.0361 12.5329 42.4327L17.645 37.4228C18.3319 36.7456 18.7175 35.8294 18.7175 34.8745C18.7175 33.9196 18.3319 33.0034 17.645 32.3262Z" fill="#54AB9A"></path>
                            <path d="M10.9172 21.5039H3.68059C2.70237 21.5039 1.7642 21.8847 1.07249 22.5626C0.380783 23.2405 -0.0078125 24.1599 -0.0078125 25.1185C-0.0078125 26.0772 0.380783 26.9966 1.07249 27.6745C1.7642 28.3524 2.70237 28.7332 3.68059 28.7332H10.9172C11.8955 28.7332 12.8336 28.3524 13.5253 27.6745C14.217 26.9966 14.6056 26.0772 14.6056 25.1185C14.6056 24.1599 14.217 23.2405 13.5253 22.5626C12.8336 21.8847 11.8955 21.5039 10.9172 21.5039Z" fill="#54AB9A"></path>
                            <path d="M17.6454 12.7992L12.5333 7.78205C11.8306 7.16647 10.9141 6.83788 9.97194 6.86372C9.0298 6.88956 8.13349 7.26788 7.46703 7.92101C6.80057 8.57414 6.41453 9.45251 6.38816 10.3758C6.3618 11.2991 6.69711 12.1973 7.32525 12.8859L12.4374 17.8958C12.7695 18.269 13.1764 18.5713 13.6327 18.784C14.089 18.9967 14.585 19.1153 15.09 19.1323C15.595 19.1493 16.0982 19.0645 16.5684 18.8831C17.0386 18.7016 17.4657 18.4275 17.8232 18.0776C18.1808 17.7276 18.4612 17.3095 18.647 16.849C18.8328 16.3885 18.92 15.8955 18.9034 15.4005C18.8867 14.9056 18.7664 14.4193 18.55 13.9718C18.3336 13.5243 18.0257 13.1252 17.6454 12.7992Z" fill="#54AB9A"></path>
                            <path d="M24.9999 0.61084C24.0217 0.61084 23.0836 0.991664 22.3918 1.66954C21.7001 2.34742 21.3115 3.26682 21.3115 4.22548V25.1181C21.3115 26.0767 21.7001 26.9961 22.3918 27.674C23.0836 28.3519 24.0217 28.7327 24.9999 28.7327C25.9782 28.7327 26.9163 28.3519 27.608 27.674C28.2997 26.9961 28.6883 26.0767 28.6883 25.1181V4.22548C28.6883 3.26682 28.2997 2.34742 27.608 1.66954C26.9163 0.991664 25.9782 0.61084 24.9999 0.61084Z" fill="#54AB9A"></path>
                            <path d="M42.6821 7.78176C41.9907 7.10633 41.0543 6.72705 40.0781 6.72705C39.1019 6.72705 38.1654 7.10633 37.4741 7.78176L32.3619 12.7989C31.7472 13.4896 31.4231 14.3833 31.4553 15.2993C31.4875 16.2152 31.8735 17.085 32.5353 17.7326C33.1971 18.3802 34.0851 18.7573 35.0198 18.7875C35.9545 18.8178 36.8661 18.4989 37.57 17.8955L42.6821 12.8856C43.3713 12.2081 43.7583 11.2904 43.7583 10.3337C43.7583 9.37699 43.3713 8.45931 42.6821 7.78176Z" fill="#AADEE2"></path>
                            <path d="M46.3264 21.5039H39.0898C38.1115 21.5039 37.1734 21.8847 36.4817 22.5626C35.79 23.2405 35.4014 24.1599 35.4014 25.1185C35.4014 26.0772 35.79 26.9966 36.4817 27.6745C37.1734 28.3524 38.1115 28.7332 39.0898 28.7332H46.3264C47.3046 28.7332 48.2428 28.3524 48.9345 27.6745C49.6262 26.9966 50.0148 26.0772 50.0148 25.1185C50.0148 24.1599 49.6262 23.2405 48.9345 22.5626C48.2428 21.8847 47.3046 21.5039 46.3264 21.5039Z" fill="#AADEE2"></path>
                            <path d="M42.6822 37.3352L27.7516 22.7031C27.0468 22.1007 26.1348 21.7831 25.2001 21.8146C24.2655 21.8462 23.378 22.2245 22.7171 22.873C22.0563 23.5215 21.6715 24.3919 21.6407 25.3079C21.6098 26.2239 21.9352 27.1172 22.5509 27.807L37.4742 42.4318C38.1781 43.0352 39.0896 43.3541 40.0243 43.3239C40.959 43.2936 41.8471 42.9165 42.5089 42.2689C43.1706 41.6213 43.5567 40.7515 43.5888 39.8356C43.621 38.9196 43.297 38.0259 42.6822 37.3352Z" fill="#AADEE2"></path>
                            <ellipse cx="25.0039" cy="25.1221" rx="3.68452" ry="3.61083" fill="#190D30"></ellipse>
                        </g>
                        <defs>
                            <clipPath id="ciaxufuzki-clip0_3122_4634">
                                <rect width="50" height="49" fill="white" transform="translate(0 0.61084)"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='col-con col2'>
                    <div className='col-detail'>
                        <p>Links</p>
                        <a className="text-link" href="#">About DaySmart</a><br />
                        <a className="text-link" href="#">Partners</a><br />
                        <a className="text-link" href="#">Support</a><br />
                        <a className="text-link" href="#">Privacy Policy</a><br />
                        <a className="text-link" href="#">License and Support</a><br />
                        <a className="text-link" href="#">Schedule</a><br />
                        <a className="text-link" href="#">Terms & Conditions</a><br />
                        <a className="text-link" href="#">GDPR Guidelines</a>
                    </div>
                    <div className='col-detail'>
                        <p>Resources</p>
                        <a className="text-link" href="#">Blogs</a><br />
                        <a className="text-link" href="#">News & Media</a><br />
                        <a className="text-link" href="#">Training</a><br />
                        <a className="text-link" href="#">Reseller Login</a><br />
                        <a className="text-link" href="#">Developers Guide</a><br />
                        <a className="text-link" href="#">Refer a Friend</a>
                    </div>
                    <div className='col-detail'>
                        <p>Contact Us</p>
                        <a className="text-link duration-[0.3s] hover:text-primary" href="tel:800-988-0061">800-988-0061</a>
                    </div>
                    <div className='col-detail'>
                        <p>Follow us</p>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
