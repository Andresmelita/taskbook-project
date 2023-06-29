'use client'
import React, { useRef, useState } from 'react'
import DrawIcon from '@mui/icons-material/Draw';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Slider from './Slider';
// import Swiper and modules styles

const BookBoard = () => {

    return (
        <div className="h-[96%] w-[98%] flex flex-col rounded-[20px]">
            <div className='w-[100%] h-[16%] px-[10px] pt-[10px] flex justify-between'>
                <div className='flex flex-col justify-start'>
                    <div className='flex font-bold text-[28px] items-center'><p>Cuaderno Azul</p>
                        <div className="flex md:hidden"><DrawIcon className="ml-[10px] text-[30px] text-[#1c5285] cursor-pointer" /></div></div>
                    <div className='font-bold text-[#1c5285] text-[16px] w-max pl-[10px] hover:scale-110 ease-in-out duration-300'>
                        <p className='cursor-pointer'>
                            Nueva Tarea
                            <span><AddBoxIcon /></span>
                        </p>
                    </div>
                </div>
                <div className="hover:scale-110 ease-in-out duration-300 ">
                    <DrawIcon className="text-[30px] text-[#1c5285] cursor pointer" />
                </div>
            </div>
            <div className='lg:h-[30%] h-[42%] inline w-[100%] py-[10px]'>
                <h4 className="h-[10%] text-[#777] text-[14px] pl-[20px]">En curso</h4>
                <div className='h-[90%]'><Slider /></div>

            </div>
            <div className='lg:h-[30%] h-[42%] inline w-[100%] py-[10px]'>
                <h4 className='h-[10%] text-[#777] text-[14px] pl-[20px]'>Pausados</h4>
                <div className='h-[90%]'><Slider /></div>
            </div>
            <div className='lg:h-[30%] lg:inline hidden w-[100%] py-[10px]'>
                <h4 className='h-[10%] text-[#777] text-[14px] pl-[20px]'>Finalizados</h4>
                <div className='h-[90%]'><Slider /></div>
            </div>
        </div>
    )
}

export default BookBoard