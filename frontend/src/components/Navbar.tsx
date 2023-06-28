'use client'
import React, { useState } from 'react'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import logo from '../../public/img/logo.png'
import Image from 'next/legacy/image';

const Navbar = () => {

    const [isLogin, setIsLogin] = useState<Boolean>(false)

    return (
        <div className='navbar px-[30px] fixed h-[56px] w-[100%] bg-[#1c5285] z-[110]'>
            {isLogin ? < div className='flex justify-between items-center h-[100%] w-[100%]'>
                <div className='text-[#fff] shadow-text'>
                    <Image src={logo} alt='' width={30} height={30} />
                    <p className='family-pacifico'>taskbook</p>
                </div>
                <div className='flex gap-3 shadow-text text-[#fff] items-center'>
                    <p className='text-[16px] cursor-pointer' onClick={() => setIsLogin(false)}>example@email.com</p>
                    <AccountCircleTwoToneIcon className='text-[34px]' />
                </div>
            </div> : <div className='flex justify-between items-center h-[100%] w-[100%]'>
                <div className='text-[#fff] shadow-text flex gap-2 items-center font-normal'>
                    <Image src={logo} alt='' width={30} height={30} />
                    <p className='family-pacifico text-[24px]'>taskbook</p>
                </div>
                <div className='flex gap-3 shadow-text text-[#fff] items-center'>
                    <p className='text-[16px] cursor-pointer' onClick={() => setIsLogin(true)}>Create an Account</p>
                    <AccountCircleTwoToneIcon className='text-[34px]' />
                </div>
            </div>}
        </div >
    )
}

export default Navbar