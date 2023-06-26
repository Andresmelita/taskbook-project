'use client'
import React from 'react'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import logo from '../../public/img/logo.png'
import Image from 'next/legacy/image';

const Navbar = () => {
    return (
        <div className='navbar flex justify-between items-center px-[30px] fixed h-[56px] w-[100%] bg-[#1F618D]'>
            <div className='text-[#fff] shadow-text'>
                <Image src={logo} alt='' width={30} height={30}/>
            </div>
            <div className='flex gap-3 shadow-text text-[#fff] items-center'>
                <p className='text-[16px]'>Crear Cuenta</p>
                <AccountCircleTwoToneIcon className='text-[34px]' />
            </div>
        </div>
    )
}

export default Navbar