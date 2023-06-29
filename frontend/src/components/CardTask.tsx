'use client'
import React from 'react'

interface Props {
    title: any,
    index: any
}

const CardTask = ({ title, index }: Props) => {
    return (
        <div className="flex justify-center w-max  items-center flex-col hover:scale-[1.05] ease-in-out duration-300 h-[100%]">
            <div className='bg-[#ffffff] py-[10px] shadow-card flex justify-center items-center w-[190px] h-[100%] rounded-[10px]'>
                <div className='w-[94%] h-[94%] flex justify-between items-center flex-col'>
                    <h1 className="px-[5px] text-[14px] flex justify-start items-start h-[14%] w-[100%] font-semibold text-justify truncate ...">{index}. {title}</h1>
                    <h4 className='px-[5px] text-[12px] h-[20.5%] text-[#777] w-[100%] flex justify-start text-center truncate ... items-start'>Cuaderno Azul</h4>
                    <div className='h-[63.5%] text-ellipsis overflow-hidden ... w-[100%] flex justify-center  text-justify items-start'>
                        <h4 className='px-[5px] pt-[4px] text-[12px] text-[#777]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique tempora reprehenderit praesentium quasi eius at minus ipsum nihil, natus cum quaerat dolorum vel nesciunt ut sapiente earum totam maiores. Delectus!</h4>
                    </div>
                </div>
            </div>
            <div className={`shadow-card w-[174px] text-[13px] font-bold flex justify-center items-center h-[26px] bg-[#ffc851] rounded-b-[10px]`}>
                En curso
            </div>
        </div>

    )
}

export default CardTask