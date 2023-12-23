/* eslint-disable no-unused-vars */
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AvatarHeader from '../assets/png/avatarHeader.png';
import GR13 from '../assets/png/Group 13.png';
import GR7 from '../assets/png/Group 7.png';
import GR10 from '../assets/png/Group 10.png';
import { Link } from 'react-router-dom';

function Header() {
    const token = localStorage.getItem('token');
    const logout = () =>{
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
            window.location.replace('/');
        }
    }
    return (
        <div>
            <div className=" bg-[#49BBBD] h-[800px]  w-full rounded-b-[30%] ">
                {/* Header Menu Right */}
                <header className="w-full  text-gray-700 body-font">
                    <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
                        <a className="flex  items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                            <svg width="80" height="80" viewBox="0 0 308 427" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.176 341.568H38.792V387H33.392V341.568H21.008V336.6H51.176V341.568ZM48.2043 363.96H62.3883V368.928H48.2043V363.96ZM89.3276 372.888H75.0716L71.0396 387H65.7116L80.9036 335.808H83.8556L99.0476 387H93.4316L89.3276 372.888ZM76.5116 368.064H88.0316L83.6396 352.512L82.2716 344.952H82.1276L80.7596 352.656L76.5116 368.064ZM122.729 385.2C121.529 386.112 120.161 386.784 118.625 387.216C117.089 387.648 115.481 387.864 113.801 387.864C111.497 387.864 109.553 387.432 107.969 386.568C106.385 385.656 105.089 384.384 104.081 382.752C103.121 381.072 102.401 379.08 101.921 376.776C101.489 374.424 101.273 371.832 101.273 369C101.273 362.856 102.353 358.176 104.513 354.96C106.721 351.744 109.865 350.136 113.945 350.136C115.817 350.136 117.425 350.304 118.769 350.64C120.113 350.976 121.265 351.408 122.225 351.936L120.785 356.472C118.865 355.368 116.777 354.816 114.521 354.816C111.929 354.816 109.961 355.968 108.617 358.272C107.321 360.528 106.673 364.104 106.673 369C106.673 370.968 106.817 372.816 107.105 374.544C107.393 376.272 107.873 377.784 108.545 379.08C109.217 380.328 110.081 381.336 111.137 382.104C112.193 382.824 113.513 383.184 115.097 383.184C116.345 383.184 117.497 382.968 118.553 382.536C119.657 382.104 120.545 381.6 121.217 381.024L122.729 385.2ZM128.161 353.16C129.553 352.296 131.233 351.624 133.201 351.144C135.217 350.664 137.329 350.424 139.537 350.424C141.553 350.424 143.161 350.736 144.361 351.36C145.609 351.936 146.569 352.752 147.241 353.808C147.961 354.816 148.417 355.992 148.609 357.336C148.849 358.632 148.969 360 148.969 361.44C148.969 364.32 148.897 367.128 148.753 369.864C148.657 372.6 148.609 375.192 148.609 377.64C148.609 379.464 148.657 381.168 148.753 382.752C148.897 384.288 149.137 385.752 149.473 387.144H145.513L144.289 382.896H144.001C143.281 384.144 142.225 385.224 140.833 386.136C139.441 387.048 137.569 387.504 135.217 387.504C132.625 387.504 130.489 386.616 128.809 384.84C127.177 383.016 126.361 380.52 126.361 377.352C126.361 375.288 126.697 373.56 127.369 372.168C128.089 370.776 129.073 369.648 130.321 368.784C131.617 367.92 133.129 367.32 134.857 366.984C136.633 366.6 138.601 366.408 140.761 366.408C141.241 366.408 141.721 366.408 142.201 366.408C142.681 366.408 143.185 366.432 143.713 366.48C143.857 364.992 143.929 363.672 143.929 362.52C143.929 359.784 143.521 357.864 142.705 356.76C141.889 355.656 140.401 355.104 138.241 355.104C136.897 355.104 135.433 355.32 133.849 355.752C132.265 356.136 130.945 356.64 129.889 357.264L128.161 353.16ZM143.785 370.584C143.305 370.536 142.825 370.512 142.345 370.512C141.865 370.464 141.385 370.44 140.905 370.44C139.753 370.44 138.625 370.536 137.521 370.728C136.417 370.92 135.433 371.256 134.569 371.736C133.705 372.216 133.009 372.864 132.481 373.68C132.001 374.496 131.761 375.528 131.761 376.776C131.761 378.696 132.217 380.184 133.129 381.24C134.089 382.296 135.313 382.824 136.801 382.824C138.817 382.824 140.377 382.344 141.481 381.384C142.585 380.424 143.353 379.368 143.785 378.216V370.584ZM180.03 374.616C180.03 377.064 180.054 379.296 180.102 381.312C180.15 383.28 180.318 385.224 180.606 387.144H177.078L175.926 382.824H175.638C174.966 384.264 173.91 385.464 172.47 386.424C171.03 387.384 169.302 387.864 167.286 387.864C163.398 387.864 160.494 386.352 158.574 383.328C156.702 380.304 155.766 375.552 155.766 369.072C155.766 362.928 156.918 358.272 159.222 355.104C161.574 351.936 164.79 350.352 168.87 350.352C170.262 350.352 171.366 350.448 172.182 350.64C172.998 350.784 173.886 351.048 174.846 351.432V336.6H180.03V374.616ZM174.846 356.688C174.174 356.112 173.406 355.704 172.542 355.464C171.726 355.176 170.622 355.032 169.23 355.032C166.686 355.032 164.694 356.184 163.254 358.488C161.862 360.792 161.166 364.344 161.166 369.144C161.166 371.256 161.286 373.176 161.526 374.904C161.814 376.584 162.222 378.048 162.75 379.296C163.326 380.544 164.046 381.504 164.91 382.176C165.822 382.848 166.926 383.184 168.222 383.184C171.678 383.184 173.886 381.144 174.846 377.064V356.688ZM210.026 384.552C208.874 385.608 207.41 386.424 205.634 387C203.858 387.576 201.986 387.864 200.018 387.864C197.762 387.864 195.794 387.432 194.114 386.568C192.482 385.656 191.114 384.384 190.01 382.752C188.954 381.072 188.162 379.08 187.634 376.776C187.154 374.472 186.914 371.88 186.914 369C186.914 362.856 188.042 358.176 190.298 354.96C192.554 351.744 195.746 350.136 199.874 350.136C201.218 350.136 202.538 350.304 203.834 350.64C205.178 350.976 206.378 351.648 207.434 352.656C208.49 353.664 209.33 355.08 209.954 356.904C210.626 358.728 210.962 361.104 210.962 364.032C210.962 364.848 210.914 365.736 210.818 366.696C210.77 367.608 210.698 368.568 210.602 369.576H192.314C192.314 371.64 192.482 373.512 192.818 375.192C193.154 376.872 193.682 378.312 194.402 379.512C195.122 380.664 196.034 381.576 197.138 382.248C198.29 382.872 199.706 383.184 201.386 383.184C202.682 383.184 203.954 382.944 205.202 382.464C206.498 381.984 207.482 381.408 208.154 380.736L210.026 384.552ZM205.994 365.256C206.09 361.656 205.586 359.016 204.482 357.336C203.378 355.656 201.866 354.816 199.946 354.816C197.738 354.816 195.986 355.656 194.69 357.336C193.394 359.016 192.626 361.656 192.386 365.256H205.994ZM235.088 387V365.616C235.088 363.696 235.016 362.064 234.872 360.72C234.776 359.328 234.536 358.2 234.152 357.336C233.768 356.472 233.24 355.848 232.568 355.464C231.896 355.032 231.008 354.816 229.904 354.816C228.272 354.816 226.88 355.464 225.728 356.76C224.624 358.008 223.856 359.448 223.424 361.08V387H218.24V351H221.912L222.848 354.816H223.064C224.072 353.424 225.272 352.296 226.664 351.432C228.056 350.568 229.832 350.136 231.992 350.136C233.816 350.136 235.304 350.544 236.456 351.36C237.656 352.128 238.592 353.52 239.264 355.536C240.128 353.856 241.352 352.536 242.936 351.576C244.568 350.616 246.344 350.136 248.264 350.136C249.848 350.136 251.192 350.352 252.296 350.784C253.448 351.168 254.36 351.888 255.032 352.944C255.752 353.952 256.28 355.32 256.616 357.048C256.952 358.728 257.12 360.864 257.12 363.456V387H251.936V364.104C251.936 360.984 251.624 358.656 251 357.12C250.424 355.584 249.056 354.816 246.896 354.816C245.072 354.816 243.608 355.392 242.504 356.544C241.448 357.648 240.704 359.16 240.272 361.08V387H235.088ZM274.067 374.256L275.579 381.24H275.939L277.019 374.256L282.491 351H287.747L279.179 383.328C278.507 385.92 277.835 388.344 277.163 390.6C276.491 392.856 275.747 394.8 274.931 396.432C274.163 398.112 273.275 399.408 272.267 400.32C271.307 401.28 270.155 401.76 268.811 401.76C267.467 401.76 266.291 401.544 265.283 401.112L266.147 396.216C266.819 396.456 267.491 396.504 268.163 396.36C268.835 396.216 269.459 395.808 270.035 395.136C270.659 394.464 271.211 393.456 271.691 392.112C272.219 390.816 272.675 389.112 273.059 387L261.395 351H267.299L274.067 374.256Z" fill="#398495" />
                                <path d="M105 140V264.718C105 271.301 107.615 277.615 112.27 282.27V282.27C121.432 291.432 136.099 292.006 145.949 283.589L146.853 282.817C152.658 277.856 156 270.603 156 262.968V180.305C156 158.045 174.045 140 196.305 140H205.751C210.393 140 214.844 138.156 218.126 134.874V134.874C224.96 128.04 224.96 116.96 218.126 110.126V110.126C214.844 106.844 210.393 105 205.751 105H111C77.3106 105 50 77.6894 50 44V44M50 44H63.5L50 21L37 44H50Z" stroke="#398596" strokeWidth="20" />
                                <path d="M105 140V264.718C105 271.301 107.615 277.615 112.27 282.27V282.27C121.432 291.432 136.099 292.006 145.949 283.589L146.853 282.817C152.658 277.856 156 270.603 156 262.968V180.305C156 158.045 174.045 140 196.305 140H205.751C210.393 140 214.844 138.156 218.126 134.874V134.874C224.96 128.04 224.96 116.96 218.126 110.126V110.126C214.844 106.844 210.393 105 205.751 105H111C77.3106 105 50 77.6894 50 44V44M50 44H63.5L50 21L37 44H50Z" stroke="url(#paint0_linear_5_37)" strokeOpacity="0.5" strokeWidth="20" />
                                <defs>
                                    <linearGradient id="paint0_linear_5_37" x1="66" y1="60" x2="133.75" y2="298.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3DE04D" />
                                        <stop offset="1" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <nav className="flex items-center justify-center mt-2 text-base md:ml-auto">
                            <a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>
                            <a href="#_" className="mr-5 font-medium hover:text-gray-900">About</a>
                            <a href="#_" className="font-medium hover:text-gray-900">Contact</a>
                        </nav>
                        <div className="items-center flex h-full pl-6 ml-6 border-l border-gray-200">
                            {token ? (
                                <Link to=''>
                                    <div className='w-28 h-11 mr-8 rounded-2xl flex items-center justify-center bg-white '>
                                        <a onClick={logout} href="#_" className="font-medium hover:text-gray-900">Log Out</a>
                                    </div>
                                </Link>
                            ) : (
                                <div className=' flex'>
                                    <Link to="/login">
                                    <div className='w-28 h-11 mr-8 rounded-2xl flex items-center justify-center bg-white '>
                                        <a href="#_" className="font-medium hover:text-gray-900">Login</a>
                                    </div>
                                    </Link>
                                    <div className='w-28 h-11  rounded-2xl flex items-center justify-center bg-slate-300  '>
                                        <a href="#_" className="font-medium hover:text-gray-900">Sign Up</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>
                <div className='w-full  grid grid-cols-2'>
                    <div className="ml-[20%] mt-[10%]">
                        <p className='text-3xl font-bold text-5xl text-[#FFFFFF]'> <span className='text-[#F48C06] '>Studying </span>Online is now much easier</p>
                        <p className='text-[#FFFFFF] text-2xl mt-4 mb-6'>TOTC is an interesting platform that will teach you in more an interactive way</p>
                        <div className='w-full flex '>
                            <div className='text-white text-xl w-52 mr-8 flex items-center justify-center rounded-2xl font-semibold h-14 bg-slate-300'>
                                <button>Join for free</button>
                            </div>
                            <div className='text-black text-xl w-60 flex items-center justify-center rounded-2xl font-semibold h-14 '>
                                <PlayCircleIcon />
                                <button className=' ml-3'>Watch how it works</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img className='w-2/3 h-2/3 ml-[15%] mt-6' src={AvatarHeader} alt="" />
                        <div className='relative'>
                            <div className='absolute top-[-400px] left-[600px]'>
                                <img src={GR10} alt="" />
                            </div>
                            <div className='absolute top-[-500px] left-[10px]'>
                                <img src={GR7} alt="" />
                                <p className='absolute top-[16px] left-[150px] font-semibold text-2xl'>250K</p>
                            </div>
                            <div className='absolute top-[-100px] left-[10px]'>
                                <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" className="absolute top-2 left-4 rounded-full w-16 h-16 object-cover" />
                                <img src={GR13} alt="" />
                                <div className='absolute w-40 h-14 rounded-3xl flex items-center justify-center font-semibold text-xl top-[110px] left-[120px] bg-[#D8587E]'>
                                    Join Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header