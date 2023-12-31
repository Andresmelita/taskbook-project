'use client'
import Image from 'next/legacy/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/img/logo.png';
import Login from './Login';
import SignUp from './SignUp';

const UserSession = () => {

    const [registered, setRegistered] = useState<Boolean>(true)

    const onHandleClick = () => {
        setRegistered(!registered)
    }

    useEffect(()=>{
        if (localStorage.getItem('notRegistered')==='alert') {
            setRegistered(false)
            localStorage.removeItem('notRegistered')
        }
    }, [registered])

    return (
        <div className='z-[100] w-[500px] max-w-[600px] h-[500px] bg-white rounded-2xl justify-center items-center flex shadow-card'>
            <div className='w-[96%] h-[96%] rounded-2xl flex justify-center items-center flex-col'>
                <div className='pb-8 w-full flex gap-2 items-center justify-center'>
                    <div className="pt-[6px]">
                        <Image src={logo} width={50} height={50} alt='' />
                    </div>
                    <p className='text-[46px] font-medium family-pacifico'>taskbook</p>
                </div>
                <div className='w-[96%] h-max pb-[10px] pt-[20px]'>
                    {registered ?
                        <Login /> :
                        <SignUp />
                    }
                </div>
                {registered ? <div className='flex gap-2 justify-center text-[14px]'>
                    Not registered?
                    <p onClick={onHandleClick} className='cursor-pointer font-semibold text-[#1F618D]'>
                        Create an account
                    </p>
                </div> : <div className='flex gap-2 justify-center text-[14px]'>
                    Already registered?
                    <p onClick={onHandleClick} className='cursor-pointer font-semibold text-[#1F618D]'>
                        Log in
                    </p>
                </div>}

            </div>
        </div>
    )
}

export default UserSession