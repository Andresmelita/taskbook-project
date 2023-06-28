'use client'
import React, { useState } from 'react'
import TaskBoard from './TaskBoard'
import BookBoard from './BookBoard'


const UserBoard = () => {

    return (
        <div className='xl:w-[88%] lg:w-[84%] md:w-[78%] w-[100%] h-[100%] bg-[#1c5285] p-[12px] pt-[70px]'>
            <div className='w-[100%] flex lg:flex-row flex-col h-[100%] rounded-[20px]'>
                <div className='relative lg:w-[70%] w-full h-[64%] lg:h-full rounded-tl-[20px] lg:rounded-tr-[0px] lg:rounded-bl-[20px] rounded-bl-[0px] rounded-tr-[20px] bg-[#fff] flex justify-center items-center'>
                    <BookBoard/>
                </div>
                <div className='lg:w-[30%] w-full h-[36%] lg:h-full lg:rounded-tr-[20px] rounded-tl-[0px] rounded-br-[20px] lg:rounded-bl-[0px] rounded-bl-[20px] bg-[#eeeeee] flex justify-center items-center'>
                    <TaskBoard/>
                </div>
            </div>
        </div>
    )
}

export default UserBoard