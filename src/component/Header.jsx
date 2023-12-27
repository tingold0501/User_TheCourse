/* eslint-disable no-unused-vars */
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AvatarHeader from '../assets/png/avatarHeader.png';
import GR13 from '../assets/png/Group 13.png';
import GR7 from '../assets/png/Group 7.png';
import GR10 from '../assets/png/Group 10.png';
import { Link } from 'react-router-dom';
import HeaderChild from './HeaderChild';

function Header() {
   
    return (
        <div>
            <div className=" bg-[#49BBBD] h-[800px]  w-full rounded-b-[30%] ">
                {/* Header Menu Right */}
               <HeaderChild/>
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