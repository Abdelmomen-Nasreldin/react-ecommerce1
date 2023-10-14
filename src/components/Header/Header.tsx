import { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Page } from '@/types/Page';
import { AuthContext } from '@/contexts/AuthContext/auth';
import { CartContext } from '@/contexts/AuthContext/cart';


const Header = () => {
    const { isLoggedIn,  logout : onLogout } = useContext(AuthContext)
    const {cartItems } = useContext(CartContext)
    const [menuHandler, setMenuHandler] = useState(true)
    const [mdOptions, setMdOptions] = useState(true)

    const pages : Page[] = [
        { title: 'home', path: '/' },
        { title: 'cart', path: '/cart' },
        { title: 'products', path: '/products' },
        { title: 'categories', path: '/categories' },
        { title: 'brands', path: '/brands' },
    ]
    
    const menuHandlerBtn = () => {
        setMenuHandler(!menuHandler)
    }
    const mdOptionsToggle = () => {
        setMdOptions(!mdOptions)
    }
    const logout = () => {
        onLogout()
        // navigate('/')
        // setCartItems(0)
    }

    return (
        <>
            <div className="bg-[#f8f9fa] dark:bg-gray-900">
                <div>
                    <div className="relative">
                        {/* For md screen size  */}
                        <div className={`${mdOptions ? 'hidden' : 'bg-[#f8f9fa]'} dark:bg-gray-900 flex lg:hidden py-5 px-6 items-center justify-between`} >

                            <div className="hidden md:flex items-center space-x-4 xl:space-x-8">

                                {/* links icons */}
                                <ul className="flex gap-3 items-center">
                                    <li>
                                        <a href="#"><BsInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><BsFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><BsTiktok />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><BsTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><BsLinkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><BsYoutube />
                                        </a>
                                    </li>
                                </ul>
                                {!isLoggedIn && <NavLink to="login" >login</NavLink>}
                                {!isLoggedIn && <NavLink to="register" >register</NavLink>}
                                {isLoggedIn && <button onClick={logout} >sign out</button>}

                            </div>
                            <div className="space-x-6">
                                <button aria-label="view favourites" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button aria-label="go to cart" className="relative text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="absolute top-[-10px] right-[-5] rounded-[50%] inline-flex items-center bg-[#08ac0a] px-1 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">{cartItems}</span>

                                </button>
                            </div>
                        </div>

                        {/* For large screens  */}
                        <div className="dark:bg-gray-900 bg-[#f8f9fa] px-6 py-9 ">
                            <div className="container mx-auto flex items-center justify-between gap-6">
                                <Link to='/'>
                                
                                <h1 className=" cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="31" viewBox="0 0 160 31" fill="none">
                                        <path d="M8.12346 24.8618C9.5969 24.8618 10.7914 23.6674 10.7914 22.194C10.7914 20.7205 9.5969 19.526 8.12346 19.526C6.65002 19.526 5.45557 20.7205 5.45557 22.194C5.45557 23.6674 6.65002 24.8618 8.12346 24.8618Z" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M6.97607 9.18945H23.1146" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M8.38892 12.4171H22.4092" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M7.66113 19.525H18.1138C19.2586 19.525 20.2784 18.7977 20.6505 17.7144L24.9585 5.1809C25.3307 4.09761 26.3495 3.37036 27.4953 3.37036H30.6292" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M8.12359 22.5791C8.33639 22.5791 8.5089 22.4066 8.5089 22.1939C8.5089 21.981 8.33639 21.8086 8.12359 21.8086C7.91079 21.8086 7.73828 21.981 7.73828 22.1939C7.73828 22.4066 7.91079 22.5791 8.12359 22.5791Z" stroke="#0AAD0A" strokeWidth="1.06897" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M17.8222 24.8618C19.2956 24.8618 20.49 23.6674 20.49 22.194C20.49 20.7205 19.2956 19.526 17.8222 19.526C16.3487 19.526 15.1543 20.7205 15.1543 22.194C15.1543 23.6674 16.3487 24.8618 17.8222 24.8618Z" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M17.8223 22.5791C18.035 22.5791 18.2076 22.4066 18.2076 22.1938C18.2076 21.981 18.035 21.8085 17.8223 21.8085C17.6095 21.8085 17.437 21.981 17.437 22.1938C17.437 22.4066 17.6095 22.5791 17.8223 22.5791Z" stroke="#0AAD0A" strokeWidth="1.06897" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M21.1874 16.152H7.14791C6.67788 16.152 6.26535 15.8261 6.13624 15.3519L3.75481 6.62879C3.63578 6.19381 3.94745 5.75989 4.37916 5.75989H22.3776" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M1 26.527C1 26.527 11.26 23.0552 25.1058 26.527" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M36.5269 25V6.34164H48.8807V9.59409H40.4717V14.04H48.0608V17.2925H40.4717V25H36.5269Z" fill="#21313C" />
                                        <path d="M50.4661 25V11.0062H54.2287V13.4478H54.3745C54.6296 12.5793 55.0578 11.9233 55.6591 11.48C56.2604 11.0305 56.9528 10.8058 57.7363 10.8058C57.9306 10.8058 58.1402 10.8179 58.3649 10.8422C58.5896 10.8665 58.787 10.8999 58.9571 10.9424V14.3862C58.7749 14.3316 58.5228 14.283 58.2009 14.2404C57.879 14.1979 57.5844 14.1767 57.3172 14.1767C56.7463 14.1767 56.2361 14.3012 55.7866 14.5502C55.3433 14.7932 54.991 15.1333 54.7298 15.5706C54.4747 16.0079 54.3472 16.512 54.3472 17.0829V25H50.4661Z" fill="#21313C" />
                                        <path d="M65.92 25.2733C64.4805 25.2733 63.2415 24.9817 62.2029 24.3987C61.1704 23.8095 60.3747 22.9774 59.8159 21.9024C59.2572 20.8213 58.9778 19.5428 58.9778 18.0669C58.9778 16.6274 59.2572 15.3641 59.8159 14.2769C60.3747 13.1897 61.1613 12.3424 62.1756 11.7351C63.1959 11.1277 64.3924 10.824 65.7651 10.824C66.6883 10.824 67.5477 10.9728 68.3434 11.2704C69.1451 11.562 69.8436 12.0023 70.4388 12.5914C71.0401 13.1806 71.5078 13.9216 71.8418 14.8144C72.1759 15.7012 72.3429 16.7398 72.3429 17.9302V18.9961H60.5266V16.591H68.6896C68.6896 16.0322 68.5681 15.5372 68.3251 15.1059C68.0822 14.6747 67.7451 14.3376 67.3139 14.0947C66.8887 13.8457 66.3937 13.7211 65.8289 13.7211C65.2397 13.7211 64.7174 13.8578 64.2619 14.1311C63.8124 14.3984 63.4601 14.7597 63.205 15.2153C62.95 15.6647 62.8194 16.1658 62.8133 16.7185V19.0052C62.8133 19.6976 62.9408 20.2959 63.1959 20.8C63.4571 21.3041 63.8246 21.6928 64.2983 21.9662C64.7721 22.2395 65.3339 22.3761 65.9837 22.3761C66.415 22.3761 66.8098 22.3154 67.1681 22.1939C67.5265 22.0724 67.8332 21.8902 68.0883 21.6473C68.3434 21.4043 68.5377 21.1067 68.6713 20.7545L72.2609 20.9913C72.0787 21.8538 71.7051 22.6069 71.1403 23.2507C70.5815 23.8885 69.8588 24.3865 68.972 24.7449C68.0913 25.0971 67.074 25.2733 65.92 25.2733Z" fill="#21313C" />
                                        <path d="M85.7492 14.9966L82.1961 15.2153C82.1353 14.9116 82.0048 14.6383 81.8043 14.3953C81.6039 14.1463 81.3397 13.9489 81.0117 13.8031C80.6898 13.6513 80.3041 13.5754 79.8547 13.5754C79.2534 13.5754 78.7462 13.7029 78.3332 13.958C77.9202 14.207 77.7137 14.5411 77.7137 14.9602C77.7137 15.2942 77.8473 15.5767 78.1146 15.8075C78.3818 16.0383 78.8404 16.2235 79.4903 16.3632L82.023 16.8734C83.3835 17.1528 84.3978 17.6022 85.0659 18.2217C85.734 18.8413 86.068 19.6551 86.068 20.6634C86.068 21.5805 85.7978 22.3852 85.2572 23.0776C84.7227 23.77 83.9878 24.3106 83.0525 24.6993C82.1232 25.0819 81.0512 25.2733 79.8365 25.2733C77.984 25.2733 76.5081 24.8876 75.4087 24.1162C74.3155 23.3388 73.6747 22.282 73.4864 20.9458L77.3037 20.7453C77.4191 21.3102 77.6985 21.7414 78.1419 22.039C78.5853 22.3306 79.1532 22.4763 79.8456 22.4763C80.5258 22.4763 81.0724 22.3458 81.4855 22.0846C81.9045 21.8173 82.1171 21.4742 82.1232 21.0551C82.1171 20.7028 81.9683 20.4143 81.6768 20.1896C81.3852 19.9588 80.9358 19.7827 80.3284 19.6612L77.905 19.1783C76.5385 18.905 75.5211 18.4313 74.853 17.7571C74.191 17.0829 73.86 16.2235 73.86 15.1788C73.86 14.2799 74.1029 13.5055 74.5888 12.8557C75.0808 12.2058 75.7701 11.7047 76.6569 11.3524C77.5497 11.0001 78.5944 10.824 79.7909 10.824C81.5583 10.824 82.9492 11.1975 83.9635 11.9446C84.9839 12.6917 85.5791 13.709 85.7492 14.9966Z" fill="#21313C" />
                                        <path d="M91.6233 16.9098V25H87.7423V6.34164H91.514V13.4752H91.678C91.9938 12.6491 92.504 12.0023 93.2086 11.5346C93.9131 11.0609 94.7968 10.824 95.8597 10.824C96.8315 10.824 97.6788 11.0366 98.4016 11.4617C99.1304 11.8808 99.6952 12.4852 100.096 13.2747C100.503 14.0582 100.703 14.9966 100.697 16.0899V25H96.8163V16.7823C96.8224 15.9198 96.6038 15.2487 96.1604 14.7689C95.7231 14.289 95.1096 14.0491 94.3201 14.0491C93.7916 14.0491 93.324 14.1615 92.917 14.3862C92.5162 14.6109 92.2003 14.9389 91.9695 15.3701C91.7448 15.7953 91.6294 16.3085 91.6233 16.9098Z" fill="#21313C" />
                                        <path d="M119.518 12.8739H115.527C115.454 12.3576 115.306 11.899 115.081 11.4982C114.856 11.0913 114.568 10.7451 114.215 10.4596C113.863 10.1741 113.456 9.95547 112.994 9.80363C112.539 9.65179 112.044 9.57587 111.509 9.57587C110.544 9.57587 109.703 9.81578 108.986 10.2956C108.269 10.7693 107.713 11.4617 107.319 12.3728C106.924 13.2778 106.726 14.3771 106.726 15.6708C106.726 17.0009 106.924 18.1185 107.319 19.0235C107.72 19.9284 108.278 20.6117 108.995 21.0733C109.712 21.5349 110.541 21.7657 111.482 21.7657C112.011 21.7657 112.499 21.6959 112.949 21.5562C113.404 21.4165 113.808 21.213 114.161 20.9458C114.513 20.6725 114.804 20.3414 115.035 19.9527C115.272 19.564 115.436 19.1206 115.527 18.6226L119.518 18.6408C119.414 19.4972 119.156 20.3232 118.743 21.1189C118.336 21.9085 117.787 22.616 117.094 23.2416C116.408 23.8611 115.588 24.3531 114.634 24.7175C113.687 25.0759 112.615 25.255 111.418 25.255C109.754 25.255 108.266 24.8785 106.954 24.1253C105.648 23.3722 104.616 22.282 103.857 20.8547C103.104 19.4274 102.727 17.6994 102.727 15.6708C102.727 13.6361 103.11 11.9051 103.875 10.4778C104.64 9.0505 105.679 7.96331 106.991 7.21625C108.303 6.46312 109.778 6.08655 111.418 6.08655C112.499 6.08655 113.502 6.23839 114.425 6.54207C115.354 6.84576 116.177 7.28913 116.894 7.87221C117.61 8.4492 118.194 9.15679 118.643 9.99495C119.099 10.8331 119.39 11.7928 119.518 12.8739Z" fill="#21313C" />
                                        <path d="M125.494 25.2642C124.601 25.2642 123.806 25.1093 123.107 24.7995C122.409 24.4837 121.856 24.0191 121.449 23.4056C121.048 22.7861 120.848 22.0147 120.848 21.0915C120.848 20.3141 120.991 19.6612 121.276 19.1328C121.562 18.6044 121.95 18.1792 122.442 17.8573C122.934 17.5354 123.493 17.2925 124.119 17.1285C124.75 16.9645 125.412 16.8491 126.105 16.7823C126.919 16.6972 127.575 16.6183 128.073 16.5454C128.571 16.4664 128.932 16.351 129.157 16.1992C129.381 16.0474 129.494 15.8226 129.494 15.525V15.4704C129.494 14.8934 129.312 14.447 128.947 14.1311C128.589 13.8153 128.079 13.6574 127.417 13.6574C126.718 13.6574 126.162 13.8123 125.749 14.122C125.336 14.4257 125.063 14.8083 124.929 15.2699L121.34 14.9784C121.522 14.1281 121.88 13.3932 122.415 12.7737C122.949 12.1481 123.639 11.6682 124.483 11.3342C125.333 10.9941 126.317 10.824 127.435 10.824C128.212 10.824 128.956 10.9151 129.667 11.0973C130.384 11.2795 131.018 11.562 131.571 11.9446C132.13 12.3272 132.57 12.8192 132.892 13.4205C133.214 14.0157 133.375 14.7294 133.375 15.5615V25H129.694V23.0594H129.585C129.36 23.4967 129.06 23.8824 128.683 24.2164C128.306 24.5444 127.854 24.8026 127.325 24.9908C126.797 25.1731 126.187 25.2642 125.494 25.2642ZM126.606 22.5857C127.177 22.5857 127.681 22.4733 128.118 22.2486C128.555 22.0178 128.899 21.708 129.148 21.3193C129.397 20.9306 129.521 20.4903 129.521 19.9983V18.5133C129.4 18.5922 129.233 18.6651 129.02 18.7319C128.814 18.7927 128.58 18.8504 128.319 18.905C128.057 18.9536 127.796 18.9992 127.535 19.0417C127.274 19.0781 127.037 19.1115 126.824 19.1419C126.369 19.2087 125.971 19.315 125.631 19.4608C125.291 19.6065 125.027 19.8039 124.838 20.0529C124.65 20.2959 124.556 20.5996 124.556 20.964C124.556 21.4924 124.747 21.8963 125.13 22.1757C125.519 22.449 126.011 22.5857 126.606 22.5857Z" fill="#21313C" />
                                        <path d="M135.616 25V11.0062H139.379V13.4478H139.525C139.78 12.5793 140.208 11.9233 140.809 11.48C141.411 11.0305 142.103 10.8058 142.886 10.8058C143.081 10.8058 143.29 10.8179 143.515 10.8422C143.74 10.8665 143.937 10.8999 144.107 10.9424V14.3862C143.925 14.3316 143.673 14.283 143.351 14.2404C143.029 14.1979 142.735 14.1767 142.467 14.1767C141.896 14.1767 141.386 14.3012 140.937 14.5502C140.493 14.7932 140.141 15.1333 139.88 15.5706C139.625 16.0079 139.497 16.512 139.497 17.0829V25H135.616Z" fill="#21313C" />
                                        <path d="M153.489 11.0062V13.9216H145.062V11.0062H153.489ZM146.975 7.65355H150.856V20.6998C150.856 21.0581 150.911 21.3375 151.02 21.538C151.129 21.7323 151.281 21.869 151.476 21.9479C151.676 22.0269 151.907 22.0664 152.168 22.0664C152.35 22.0664 152.532 22.0512 152.715 22.0208C152.897 21.9844 153.036 21.957 153.134 21.9388L153.744 24.8269C153.55 24.8876 153.276 24.9574 152.924 25.0364C152.572 25.1214 152.144 25.173 151.64 25.1913C150.704 25.2277 149.884 25.1032 149.18 24.8177C148.481 24.5323 147.938 24.0889 147.549 23.4876C147.16 22.8863 146.969 22.1271 146.975 21.21V7.65355Z" fill="#21313C" />
                                    </svg>
                                </h1>
                                </Link>
                                <ul className="hidden md:flex gap-4 md:flex-1 items-center ">
                                    {isLoggedIn &&
                                        pages.map(page => {
                                            return (
                                                <li key={page.path}>
                                                    <NavLink to={page.path} className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">{page.title}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <div className=" justify-end flex items-center">

                                    <div className="hidden lg:flex items-center gap-3">

                                        {/* links icons  */}
                                        <ul className="flex gap-3 items-center">
                                            <li>
                                                <a href="#"><BsInstagram />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><BsFacebook />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><BsTiktok />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><BsTwitter />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><BsLinkedin />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><BsYoutube />
                                                </a>
                                            </li>
                                        </ul>
                                        {!isLoggedIn && <NavLink to="login" >login</NavLink>}
                                        {!isLoggedIn && <NavLink to="register" >register</NavLink>}
                                        {isLoggedIn && <button onClick={logout} >sign out</button>}
                                        <NavLink aria-label="go to cart" to="cart" className="relative text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            <svg className="fill-stroke" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 5.7998H25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="absolute top-[-10px] right-[-5] rounded-[50%] inline-flex items-center bg-[#08ac0a] px-1 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">{cartItems}</span>
                                        </NavLink>
                                    </div>

                                    <div className="flex lg:hidden">
                                        <button aria-label="show options" onClick={mdOptionsToggle} className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                            <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>

                                        <button aria-label="open menu" onClick={menuHandlerBtn} className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                            <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* For small screen  */}
                        <div className={`${menuHandler ? 'hidden absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white  flex-col h-screen w-full' : 'absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex flex-col h-screen w-full'}`}>
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <svg className="fill-stroke text-gray-800 dark:text-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Search for products" className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                                </div>

                                <button onClick={menuHandlerBtn} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 p-4">
                                <ul className="flex flex-col space-y-6">
                                    {
                                        pages.map(page => {
                                            return (
                                                <li key={page.path}>
                                                    <NavLink to={page.path} className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">{page.title}</NavLink>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                            <div className="h-full flex flex-col p-3">
                                {!isLoggedIn && <NavLink to="login" >login</NavLink>}
                                {!isLoggedIn && <NavLink to="register" >register</NavLink>}
                                {isLoggedIn && <button onClick={logout} >sign out</button>}
                                <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 dark:bg-gray-800">
                                    <li>
                                        <a href="javascript:void(0)" className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            <div>
                                                <svg className="fill-stroke" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1 5H21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                               
                                                </svg>
                                                <span className="absolute top-[-10px] right-[-5] rounded-[50%] inline-flex items-center bg-[#08ac0a] px-1 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">{cartItems}</span>
                                            </div>
                                            <p className="text-base">Cart</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            <div>
                                                <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-base">Wishlist</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header