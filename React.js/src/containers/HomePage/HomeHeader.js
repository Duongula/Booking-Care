import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
// import logo from '../../assets/logo.svg';
import logo from '../../assets/logo2.png';
import banner from '../../assets/home_intro1_2022-04-13-100108_szxi.f1690468945.svg';
import { changeLanguageApp } from '../../store/actions';
import { withRouter } from 'react-router';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        //fire redux event: actions
        this.props.changeLanguageAppRedux(language)

    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            {/* <i className="fas fa-bars"></i> */}
                            {/* <img className='header-logo' src={logo} onClick={() => this.returnToHome()} /> */}
                            <svg class="block w-auto h-[25px] xs:h-[34px] mdw:h-[39px]" width="169" height="41" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 41" fill="none">
                                <path d="M49.1416 6.47852H54.8163C60.0832 6.47852 63.5007 9.24695 63.5007 15.9498C63.5007 22.6526 60.0832 25.4268 54.8163 25.4268H49.1416V6.47852ZM54.8163 23.1695C58.7162 23.1695 60.9735 21.4234 60.9735 15.9555C60.9735 10.4818 58.6818 8.74151 54.8163 8.74151H51.6745V23.1753H54.8163V23.1695Z" fill="#190D30"></path>
                                <path d="M70.2436 17.4261L75.2348 17.2194V16.467C75.2348 14.5199 74.2412 13.3884 71.8174 13.3884C69.3878 13.3884 68.4344 14.5141 68.3655 15.9558H65.9014C66.0048 13.3539 67.8485 11.3379 71.7829 11.3379C75.7173 11.3379 77.5265 13.3539 77.5265 16.6048V25.427H75.2004V23.9567C75.2004 23.8533 75.1315 23.7843 75.0281 23.7843C74.9247 23.7843 74.8558 23.8188 74.7524 23.9567C73.7587 25.2547 72.3917 25.8061 70.548 25.8061C67.165 25.8061 65.1777 24.0256 65.1777 21.395C65.2122 19.0286 66.8204 17.5582 70.2436 17.4261ZM70.8926 23.7843C73.5232 23.7843 75.2348 22.2795 75.2348 19.3732V19.2009L70.2436 19.4422C68.3942 19.5111 67.613 20.229 67.613 21.4237C67.6073 22.8596 68.7732 23.7843 70.8926 23.7843Z" fill="#190D30"></path>
                                <path d="M78.8251 11.7458H81.2202L85.1546 23.3078C85.2235 23.4801 85.2579 23.5146 85.4303 23.5146C85.6026 23.5146 85.637 23.4456 85.7059 23.3078L89.6346 11.7458H92.0297V12.257L86.9006 26.9952C86.0104 29.5626 84.6778 30.4127 81.806 30.4127H79.2731V28.3277H81.1857C82.4838 28.3277 83.2362 28.3277 83.5119 28.3277C83.7876 28.3277 83.9541 28.2588 84.0231 28.052L84.7755 26.0015C84.8444 25.7948 84.8789 25.6569 84.8099 25.5593C84.741 25.4559 84.6721 25.4214 84.4653 25.4214H83.4028L78.8193 12.257V11.7458H78.8251Z" fill="#190D30"></path>
                                <path d="M107.755 11.8841H105.188C105.05 9.42007 103.31 8.32878 100.708 8.32878C98.1406 8.32878 96.4692 9.39135 96.4692 11.4074C96.4692 13.4234 98.1464 14.1069 100.059 14.4515L102.454 14.8593C105.223 15.336 107.928 16.6054 107.928 20.1951C107.928 23.7849 104.918 25.8009 101.018 25.8009C97.0838 25.8009 93.5285 23.7849 93.3906 19.2359H95.958C96.1303 22.3145 98.2497 23.5781 101.053 23.5781C103.856 23.5781 105.464 22.3145 105.464 20.2296C105.464 18.1447 103.614 17.4612 101.633 17.0821L99.2376 16.6743C96.7047 16.232 94.0052 14.9627 94.0052 11.4418C94.0052 7.91524 97.0838 6.07153 100.777 6.07153C104.47 6.07153 107.618 7.91524 107.755 11.8841Z" fill="#190D30"></path>
                                <path d="M110.42 11.7455H112.781V13.2848C112.781 13.4226 112.85 13.4571 112.953 13.4571C113.057 13.4571 113.126 13.3882 113.229 13.2159C113.981 12.0556 115.245 11.3377 117.129 11.3377C119.248 11.3377 120.684 12.2624 121.437 13.7328C121.506 13.8706 121.54 13.9396 121.712 13.9396C121.85 13.9396 121.885 13.8706 121.988 13.6639C122.706 12.159 124.108 11.3032 126.434 11.3032C129.616 11.3032 131.425 13.4226 131.425 16.708V25.3924H129.064V17.0124C129.064 14.6518 127.904 13.4571 125.647 13.4571C123.797 13.4571 122.091 14.6518 122.091 17.6614V25.4268H119.731V17.0124C119.731 14.6518 118.571 13.4571 116.313 13.4571C114.464 13.4571 112.758 14.6518 112.758 17.6614V25.4268H110.397V11.7455H110.42Z" fill="#190D30"></path>
                                <path d="M138.599 17.4261L143.59 17.2194V16.467C143.59 14.5199 142.597 13.3884 140.173 13.3884C137.743 13.3884 136.79 14.5141 136.721 15.9558H134.257C134.36 13.3539 136.204 11.3379 140.138 11.3379C144.073 11.3379 145.882 13.3539 145.882 16.6048V25.427H143.556V23.9567C143.556 23.8533 143.487 23.7843 143.384 23.7843C143.28 23.7843 143.211 23.8188 143.108 23.9567C142.114 25.2547 140.747 25.8061 138.904 25.8061C135.521 25.8061 133.533 24.0256 133.533 21.395C133.573 19.0286 135.147 17.5582 138.599 17.4261ZM139.248 23.7843C141.879 23.7843 143.59 22.2795 143.59 19.3732V19.2009L138.599 19.4422C136.755 19.5111 135.968 20.229 135.968 21.4237C135.968 22.8596 137.129 23.7843 139.248 23.7843Z" fill="#190D30"></path>
                                <path d="M148.346 11.7456H150.706V13.595C150.706 13.7329 150.775 13.7673 150.879 13.7673C151.051 13.7673 151.085 13.6984 151.154 13.5605C151.769 12.228 152.694 11.6824 154.572 11.6824H156.111V14.0085H154.227C151.935 14.0085 150.741 15.0367 150.741 17.6672V25.4269H148.38V11.7456H148.346Z" fill="#190D30"></path>
                                <path d="M157.202 11.7461H160.35V8.05298H162.71V11.7461H166.645V13.8655H162.71V20.3271C162.71 22.1766 162.71 22.6878 162.71 22.9577C162.71 23.0956 162.745 23.1989 162.814 23.2334C162.883 23.3023 162.952 23.3368 163.089 23.3368H165.72H166.645V25.4562H164.319C161.653 25.4562 160.384 24.1926 160.384 21.5218V13.8655H157.237V11.7461H157.202Z" fill="#190D30"></path>
                                <path d="M165.37 7.19645C165.37 6.95522 165.405 6.71973 165.508 6.4785C165.611 6.23726 165.749 6.0707 165.887 5.89839C166.059 5.72608 166.232 5.58823 166.467 5.52505C166.708 5.42167 166.909 5.38721 167.185 5.38721C167.426 5.38721 167.662 5.42167 167.903 5.52505C168.144 5.62844 168.311 5.76629 168.483 5.89839C168.655 6.0707 168.793 6.24301 168.862 6.4785C168.966 6.71973 169 6.92076 169 7.19645C169 7.43768 168.966 7.67317 168.862 7.91441C168.759 8.15564 168.621 8.3222 168.483 8.49451C168.311 8.66682 168.139 8.80467 167.903 8.86785C167.662 8.97123 167.461 9.0057 167.185 9.0057C166.944 9.0057 166.708 8.97123 166.467 8.86785C166.226 8.76446 166.059 8.62662 165.887 8.49451C165.715 8.3222 165.577 8.14989 165.508 7.91441C165.405 7.67317 165.37 7.43194 165.37 7.19645ZM165.709 7.19645C165.709 7.40322 165.743 7.60425 165.812 7.77656C165.881 7.94887 165.985 8.12118 166.123 8.25328C166.26 8.39113 166.398 8.49451 166.599 8.56344C166.772 8.63236 166.978 8.66682 167.179 8.66682C167.386 8.66682 167.587 8.63236 167.759 8.56344C167.932 8.49451 168.104 8.39113 168.236 8.25328C168.374 8.11543 168.477 7.97759 168.546 7.77656C168.615 7.60425 168.65 7.40322 168.65 7.19645C168.65 6.98968 168.615 6.78865 168.546 6.61634C168.477 6.44404 168.374 6.27173 168.236 6.13962C168.098 6.00178 167.96 5.89839 167.759 5.82947C167.587 5.76054 167.38 5.72608 167.179 5.72608C166.973 5.72608 166.772 5.76054 166.599 5.82947C166.427 5.89839 166.255 6.00178 166.123 6.13962C165.985 6.27747 165.881 6.41532 165.812 6.61634C165.743 6.78291 165.709 6.98968 165.709 7.19645ZM167.185 7.94887C167.288 7.94887 167.392 7.91441 167.461 7.84548C167.53 7.77656 167.564 7.67317 167.564 7.56979V7.43194H167.972V7.53533C167.972 7.77656 167.903 7.94312 167.765 8.08097C167.627 8.21882 167.455 8.28774 167.185 8.28774C166.944 8.28774 166.743 8.21882 166.605 8.08097C166.467 7.94312 166.398 7.73635 166.398 7.53533V6.85183C166.398 6.6106 166.467 6.44404 166.605 6.30619C166.743 6.16834 166.95 6.09942 167.185 6.09942C167.426 6.09942 167.627 6.16834 167.765 6.30619C167.903 6.44404 167.972 6.65081 167.972 6.85183V6.95522H167.564V6.81737C167.564 6.71399 167.53 6.6106 167.461 6.54168C167.392 6.47275 167.323 6.43829 167.185 6.43829C167.082 6.43829 166.978 6.47275 166.909 6.54168C166.84 6.6106 166.806 6.71399 166.806 6.81737V7.56979C166.806 7.67317 166.84 7.77656 166.909 7.84548C166.978 7.91441 167.082 7.94887 167.185 7.94887Z" fill="#190D30"></path>
                                <path d="M89.8184 37.9711L92.8855 29.6428H94.2639L97.3081 37.9711H95.9755L95.2633 35.9378H91.8631L91.1509 37.9711H89.8184ZM92.2192 34.9385H94.9072L93.5632 31.1419L92.2192 34.9385Z" fill="#190D30"></path>
                                <path d="M98.1289 40.5899V32.0721H99.2604L99.3925 32.9853C99.582 32.7096 99.8462 32.4626 100.179 32.2501C100.513 32.0376 100.943 31.9285 101.466 31.9285C102.035 31.9285 102.54 32.0606 102.977 32.3305C103.413 32.6005 103.758 32.9681 104.005 33.439C104.257 33.9043 104.378 34.4384 104.378 35.0358C104.378 35.6331 104.252 36.1615 104.005 36.621C103.758 37.0862 103.413 37.4481 102.977 37.718C102.54 37.9823 102.035 38.1144 101.454 38.1144C100.995 38.1144 100.587 38.0225 100.237 37.8387C99.8865 37.6549 99.605 37.3964 99.3982 37.0633V40.5899H98.1289ZM101.236 37.0173C101.776 37.0173 102.218 36.8335 102.569 36.4659C102.919 36.0983 103.091 35.6159 103.091 35.0185C103.091 34.628 103.011 34.2834 102.856 33.9847C102.695 33.686 102.477 33.4448 102.201 33.2782C101.925 33.1059 101.604 33.0198 101.236 33.0198C100.696 33.0198 100.254 33.2036 99.9094 33.5769C99.5648 33.9502 99.3925 34.4269 99.3925 35.0185C99.3925 35.6159 99.5648 36.0926 99.9094 36.4659C100.254 36.8335 100.696 37.0173 101.236 37.0173Z" fill="#190D30"></path>
                                <path d="M105.464 40.5899V32.0721H106.595L106.727 32.9853C106.917 32.7096 107.181 32.4626 107.514 32.2501C107.847 32.0376 108.278 31.9285 108.801 31.9285C109.37 31.9285 109.875 32.0606 110.311 32.3305C110.748 32.6005 111.093 32.9681 111.34 33.439C111.592 33.9043 111.713 34.4384 111.713 35.0358C111.713 35.6331 111.587 36.1615 111.34 36.621C111.093 37.0862 110.748 37.4481 110.311 37.718C109.875 37.9823 109.37 38.1144 108.789 38.1144C108.33 38.1144 107.922 38.0225 107.572 37.8387C107.221 37.6549 106.94 37.3964 106.733 37.0633V40.5899H105.464ZM108.571 37.0173C109.111 37.0173 109.553 36.8335 109.904 36.4659C110.254 36.0983 110.426 35.6159 110.426 35.0185C110.426 34.628 110.346 34.2834 110.191 33.9847C110.03 33.686 109.812 33.4448 109.536 33.2782C109.26 33.1059 108.939 33.0198 108.571 33.0198C108.031 33.0198 107.589 33.2036 107.244 33.5769C106.9 33.9502 106.727 34.4269 106.727 35.0185C106.727 35.6159 106.9 36.0926 107.244 36.4659C107.589 36.8335 108.031 37.0173 108.571 37.0173Z" fill="#190D30"></path>
                                <path d="M115.533 38.1147C114.97 38.1147 114.465 37.9884 114.017 37.7299C113.569 37.4714 113.213 37.1096 112.954 36.6501C112.69 36.1849 112.563 35.645 112.563 35.0246C112.563 34.4043 112.696 33.8644 112.96 33.3992C113.224 32.934 113.586 32.5721 114.034 32.3194C114.488 32.0609 114.987 31.9346 115.544 31.9346C116.107 31.9346 116.613 32.0609 117.061 32.3194C117.509 32.5779 117.865 32.9397 118.129 33.3992C118.393 33.8644 118.525 34.4043 118.525 35.0246C118.525 35.645 118.393 36.1849 118.129 36.6501C117.865 37.1153 117.503 37.4772 117.055 37.7299C116.607 37.9884 116.096 38.1147 115.533 38.1147ZM115.533 37.0349C115.832 37.0349 116.113 36.9603 116.372 36.8109C116.63 36.6616 116.837 36.4376 116.998 36.1389C117.158 35.8402 117.233 35.4726 117.233 35.0246C117.233 34.5824 117.158 34.2091 117.003 33.9104C116.848 33.6117 116.641 33.3877 116.383 33.2384C116.125 33.089 115.843 33.0144 115.544 33.0144C115.24 33.0144 114.964 33.089 114.706 33.2384C114.447 33.3877 114.241 33.6117 114.08 33.9104C113.919 34.2091 113.844 34.5766 113.844 35.0246C113.844 35.4669 113.925 35.8402 114.08 36.1389C114.241 36.4376 114.442 36.6616 114.7 36.8109C114.953 36.9545 115.234 37.0349 115.533 37.0349Z" fill="#190D30"></path>
                                <path d="M120.277 30.9521C120.041 30.9521 119.84 30.8775 119.691 30.7339C119.536 30.5845 119.461 30.4007 119.461 30.1825C119.461 29.9642 119.536 29.7747 119.691 29.6311C119.846 29.4875 120.041 29.4128 120.277 29.4128C120.512 29.4128 120.713 29.4875 120.868 29.6311C121.023 29.7804 121.098 29.9642 121.098 30.1825C121.098 30.4007 121.023 30.5903 120.868 30.7339C120.713 30.8775 120.518 30.9521 120.277 30.9521ZM119.65 37.9709V32.0721H120.914V37.9709H119.65Z" fill="#190D30"></path>
                                <path d="M122.305 37.9708V32.0721H123.425L123.522 33.1059C123.706 32.7441 123.97 32.4511 124.326 32.2444C124.677 32.0319 125.085 31.9285 125.544 31.9285C126.256 31.9285 126.819 32.1525 127.227 32.5947C127.635 33.037 127.842 33.7032 127.842 34.582V37.9708H126.595V34.7141C126.595 33.5711 126.124 33.0025 125.194 33.0025C124.728 33.0025 124.338 33.1691 124.034 33.5022C123.729 33.8354 123.574 34.3121 123.574 34.9324V37.9765H122.305V37.9708Z" fill="#190D30"></path>
                                <path d="M131.448 37.9708C130.868 37.9708 130.409 37.8329 130.07 37.5458C129.731 37.2643 129.559 36.7646 129.559 36.0409V33.1289H128.548V32.0721H129.559L129.714 30.573H130.822V32.0721H132.488V33.1289H130.822V36.0409C130.822 36.3683 130.891 36.5923 131.029 36.7129C131.167 36.8336 131.408 36.8967 131.747 36.8967H132.425V37.9651H131.448V37.9708Z" fill="#190D30"></path>
                                <path d="M133.407 37.9708V32.0721H134.527L134.636 32.9049C134.826 32.6062 135.079 32.365 135.395 32.1927C135.71 32.0204 136.072 31.9285 136.486 31.9285C137.422 31.9285 138.071 32.2961 138.439 33.037C138.651 32.6981 138.938 32.4282 139.3 32.2271C139.662 32.0319 140.053 31.9285 140.472 31.9285C141.207 31.9285 141.787 32.1525 142.206 32.5947C142.626 33.037 142.838 33.7032 142.838 34.582V37.9708H141.575V34.7141C141.575 33.5711 141.138 33.0025 140.265 33.0025C139.823 33.0025 139.455 33.1691 139.174 33.5022C138.892 33.8354 138.749 34.3121 138.749 34.9324V37.9765H137.485V34.7199C137.485 33.5769 137.043 33.0083 136.164 33.0083C135.728 33.0083 135.372 33.1748 135.09 33.508C134.809 33.8411 134.671 34.3178 134.671 34.9381V37.9823H133.407V37.9708Z" fill="#190D30"></path>
                                <path d="M146.824 38.1144C146.244 38.1144 145.733 37.988 145.285 37.7295C144.837 37.4711 144.486 37.115 144.234 36.6555C143.981 36.196 143.854 35.6618 143.854 35.0473C143.854 34.4269 143.981 33.887 144.228 33.4161C144.481 32.9508 144.825 32.5832 145.273 32.319C145.721 32.0548 146.244 31.9285 146.835 31.9285C147.416 31.9285 147.915 32.0548 148.346 32.3133C148.777 32.5718 149.104 32.9164 149.345 33.3414C149.581 33.7722 149.702 34.2431 149.702 34.7543C149.702 34.8347 149.702 34.9209 149.696 35.0128C149.69 35.1047 149.684 35.2023 149.679 35.3172H145.089C145.13 35.8858 145.319 36.3223 145.652 36.621C145.991 36.9197 146.382 37.069 146.824 37.069C147.18 37.069 147.479 36.9886 147.72 36.8278C147.961 36.667 148.139 36.443 148.26 36.1673H149.523C149.363 36.7244 149.047 37.1839 148.576 37.5572C148.105 37.9306 147.519 38.1144 146.824 38.1144ZM146.824 32.9623C146.405 32.9623 146.031 33.0887 145.704 33.3357C145.377 33.5826 145.181 33.9617 145.107 34.4614H148.438C148.415 34.0019 148.254 33.6343 147.95 33.3644C147.651 33.1002 147.272 32.9623 146.824 32.9623Z" fill="#190D30"></path>
                                <path d="M150.764 37.9708V32.0721H151.884L151.981 33.1059C152.165 32.7441 152.429 32.4511 152.785 32.2444C153.136 32.0319 153.544 31.9285 154.003 31.9285C154.715 31.9285 155.278 32.1525 155.686 32.5947C156.094 33.037 156.301 33.7032 156.301 34.582V37.9708H155.054V34.7141C155.054 33.5711 154.583 33.0025 153.653 33.0025C153.187 33.0025 152.797 33.1691 152.493 33.5022C152.188 33.8354 152.033 34.3121 152.033 34.9324V37.9765H150.764V37.9708Z" fill="#190D30"></path>
                                <path d="M159.908 37.9708C159.328 37.9708 158.869 37.8329 158.53 37.5458C158.191 37.2643 158.019 36.7646 158.019 36.0409V33.1289H157.008V32.0721H158.019L158.174 30.573H159.282V32.0721H160.948V33.1289H159.282V36.0409C159.282 36.3683 159.351 36.5923 159.489 36.7129C159.627 36.8336 159.868 36.8967 160.207 36.8967H160.885V37.9651H159.908V37.9708Z" fill="#190D30"></path>
                                <path d="M164.291 38.1144C163.544 38.1144 162.93 37.9306 162.447 37.5687C161.965 37.2069 161.683 36.7187 161.614 36.1156H162.889C162.953 36.3855 163.102 36.6153 163.343 36.8106C163.579 37.0058 163.894 37.1035 164.285 37.1035C164.664 37.1035 164.946 37.0231 165.118 36.868C165.29 36.7072 165.382 36.5291 165.382 36.3223C165.382 36.0237 165.261 35.8169 165.02 35.7078C164.779 35.5986 164.446 35.501 164.015 35.4149C163.682 35.3459 163.349 35.2483 163.021 35.1277C162.694 35.0071 162.418 34.8405 162.2 34.6222C161.982 34.404 161.873 34.111 161.873 33.7377C161.873 33.2208 162.068 32.79 162.47 32.4454C162.866 32.1008 163.424 31.9285 164.136 31.9285C164.796 31.9285 165.325 32.0893 165.738 32.4052C166.146 32.7211 166.387 33.1691 166.456 33.7492H165.244C165.204 33.4965 165.089 33.2955 164.894 33.1519C164.699 33.0083 164.44 32.9393 164.113 32.9393C163.797 32.9393 163.55 33.0025 163.378 33.1346C163.205 33.2667 163.113 33.4333 163.113 33.6401C163.113 33.8468 163.234 34.0077 163.475 34.1283C163.716 34.2489 164.038 34.3523 164.434 34.4499C164.831 34.5361 165.198 34.6395 165.537 34.7543C165.876 34.8692 166.146 35.0358 166.353 35.2598C166.56 35.4838 166.663 35.8054 166.663 36.2362C166.669 36.7761 166.462 37.2241 166.037 37.5802C165.595 37.9363 165.02 38.1144 164.291 38.1144Z" fill="#190D30"></path>
                                <g clip-path="url(#opybdopvtb-clip0_3122_4309)">
                                    <path d="M18.4683 26.0532C17.7652 26.0532 17.091 26.3325 16.5938 26.8297C16.0967 27.3268 15.8174 28.0011 15.8174 28.7041V33.9C15.8174 34.603 16.0967 35.2773 16.5938 35.7745C17.091 36.2716 17.7652 36.5509 18.4683 36.5509C19.1714 36.5509 19.8456 36.2716 20.3428 35.7745C20.8399 35.2773 21.1192 34.603 21.1192 33.9V28.7041C21.1192 28.0011 20.8399 27.3268 20.3428 26.8297C19.8456 26.3325 19.1714 26.0532 18.4683 26.0532Z" fill="#54AB9A"></path>
                                    <path d="M13.1818 23.8641C12.6849 23.3687 12.0119 23.0906 11.3102 23.0906C10.6086 23.0906 9.93559 23.3687 9.43868 23.8641L5.76451 27.5383C5.32268 28.0448 5.08977 28.7003 5.1129 29.372C5.13603 30.0438 5.41347 30.6816 5.88909 31.1566C6.36471 31.6315 7.003 31.9081 7.67479 31.9303C8.34657 31.9525 9.0017 31.7186 9.50761 31.2761L13.1818 27.6019C13.6755 27.1052 13.9527 26.4333 13.9527 25.733C13.9527 25.0326 13.6755 24.3608 13.1818 23.8641Z" fill="#54AB9A"></path>
                                    <path d="M8.34716 15.927H3.14604C2.44297 15.927 1.7687 16.2063 1.27155 16.7034C0.774408 17.2006 0.495117 17.8749 0.495117 18.5779C0.495117 19.281 0.774408 19.9553 1.27155 20.4524C1.7687 20.9496 2.44297 21.2288 3.14604 21.2288H8.34716C9.05022 21.2288 9.7245 20.9496 10.2216 20.4524C10.7188 19.9553 10.9981 19.281 10.9981 18.5779C10.9981 17.8749 10.7188 17.2006 10.2216 16.7034C9.7245 16.2063 9.05022 15.927 8.34716 15.927Z" fill="#54AB9A"></path>
                                    <path d="M13.1817 9.54322L9.50749 5.86374C9.00245 5.41228 8.34375 5.1713 7.66661 5.19025C6.98947 5.2092 6.34528 5.48665 5.86628 5.96565C5.38729 6.44464 5.10983 7.08883 5.09088 7.76597C5.07193 8.44311 5.31292 9.10182 5.76438 9.60685L9.43856 13.281C9.67728 13.5547 9.96969 13.7764 10.2977 13.9324C10.6256 14.0884 10.9821 14.1754 11.3451 14.1879C11.708 14.2004 12.0697 14.1381 12.4076 14.0051C12.7455 13.872 13.0525 13.6709 13.3095 13.4143C13.5665 13.1577 13.768 12.851 13.9015 12.5133C14.0351 12.1756 14.0978 11.814 14.0858 11.451C14.0738 11.0881 13.9874 10.7314 13.8318 10.4032C13.6763 10.0751 13.455 9.78233 13.1817 9.54322Z" fill="#54AB9A"></path>
                                    <path d="M18.4683 0.604492C17.7652 0.604492 17.091 0.883783 16.5938 1.38093C16.0967 1.87807 15.8174 2.55235 15.8174 3.25542V18.5778C15.8174 19.2808 16.0967 19.9551 16.5938 20.4523C17.091 20.9494 17.7652 21.2287 18.4683 21.2287C19.1714 21.2287 19.8456 20.9494 20.3428 20.4523C20.8399 19.9551 21.1192 19.2808 21.1192 18.5778V3.25542C21.1192 2.55235 20.8399 1.87807 20.3428 1.38093C19.8456 0.883783 19.1714 0.604492 18.4683 0.604492Z" fill="#54AB9A"></path>
                                    <path d="M31.1769 5.8636C30.68 5.36824 30.007 5.09009 29.3054 5.09009C28.6037 5.09009 27.9307 5.36824 27.4338 5.8636L23.7596 9.54308C23.3178 10.0496 23.0849 10.7051 23.108 11.3768C23.1311 12.0486 23.4086 12.6865 23.8842 13.1614C24.3598 13.6364 24.9981 13.9129 25.6699 13.9351C26.3417 13.9573 26.9968 13.7234 27.5027 13.2809L31.1769 9.60671C31.6723 9.1098 31.9504 8.43678 31.9504 7.73515C31.9504 7.03352 31.6723 6.3605 31.1769 5.8636Z" fill="#AADEE2"></path>
                                    <path d="M33.7954 15.927H28.5943C27.8912 15.927 27.2169 16.2063 26.7198 16.7034C26.2226 17.2006 25.9434 17.8749 25.9434 18.5779C25.9434 19.281 26.2226 19.9553 26.7198 20.4524C27.2169 20.9496 27.8912 21.2288 28.5943 21.2288H33.7954C34.4985 21.2288 35.1727 20.9496 35.6699 20.4524C36.167 19.9553 36.4463 19.281 36.4463 18.5779C36.4463 17.8749 36.167 17.2006 35.6699 16.7034C35.1727 16.2063 34.4985 15.927 33.7954 15.927Z" fill="#AADEE2"></path>
                                    <path d="M31.1762 27.5377L20.4452 16.8067C19.9387 16.3649 19.2832 16.132 18.6115 16.1551C17.9397 16.1783 17.3018 16.4557 16.8269 16.9313C16.3519 17.407 16.0754 18.0452 16.0532 18.717C16.031 19.3888 16.2649 20.0439 16.7074 20.5498L27.433 31.2755C27.939 31.718 28.5941 31.9519 29.2659 31.9297C29.9377 31.9075 30.5759 31.631 31.0516 31.156C31.5272 30.6811 31.8046 30.0432 31.8278 29.3714C31.8509 28.6997 31.618 28.0442 31.1762 27.5377Z" fill="#AADEE2"></path>
                                    <circle cx="18.4704" cy="18.5805" r="2.64813" fill="#190D30"></circle>
                                </g>
                                <defs>
                                    <clipPath id="opybdopvtb-clip0_3122_4309">
                                        <rect width="35.9359" height="35.9359" fill="white" transform="translate(0.5 0.604492)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /> </b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='all-title'>
                                <div className='title1'><FormattedMessage id="banner.title1" /></div>
                                <div className='title2'><FormattedMessage id="banner.title2" /></div>
                                <div className='search'>
                                    <i className="fas fa-search"></i>
                                    <input type='text' placeholder='Search' />
                                </div>
                                {/* <div className='title3'><FormattedMessage id="banner.title3" /></div> */}
                            </div>
                            <img className='header-img' src={banner} />
                        </div>
                        <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-hospital-alt"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-procedures"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
