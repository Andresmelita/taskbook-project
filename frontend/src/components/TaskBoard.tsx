import React, { useState } from 'react'
import DrawIcon from '@mui/icons-material/Draw';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro';
import Datepicker from "react-tailwindcss-datepicker";

const TaskBoard = () => {

    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-06-17'));

    return (
        <div className='relative w-[90%] h-[96%] rounded-[20px]'>
            <div className='px-[10px] pt-[10px] flex justify-between'>
                <h1 className='font-bold text-[28px]'>Título de Proyecto</h1>
                <DrawIcon className="text-[30px] text-[#1c5285] cursor pointer" />
            </div>
            <h4 className="px-[10px] text-[14px]">En tablero <span className='font-bold underline decoration-solid'>Proyecto Laboral</span></h4>
            <div className='p-[10px] flex flex-col justify-between'>
                <div className={`bg-[#ffc851] w-max py-[2px] px-[6px] text-[16px] rounded-[6px] shadow-home`}>En curso</div>
                <h2 className='pt-[20px] pb-[10px] text-[16px] font-bold'>Descripción</h2>
                <p className='text-[14px] text-justify overflow-hidden text-ellipsis ...'> Palabras para comer pan Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente ex laboriosam voluptatum nisi maxime illo nam provident ipsam est quam, eum, mollitia perspiciatis explicabo possimus rem debitis ullam velit.</p>
                <div className='pt-[10px] text-[12px] flex flex-row gap-2 text-[#a5a5a5] justify-end'><p>Creation:</p><p>28/06/2023</p></div>
            </div>
            <div>
                <div className="bg-[#eeeeee] flex-col absolute bottom-0 p-[0px] lg:inline hidden w-[100%] justify-center items-center rounded-[20px]">
                        <div className="left-[10px] text-[#a5a5a5] text-[14px] -top-[10px] absolute">
                            Final Date:</div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                    <DemoItem>
                                        <DateCalendar defaultValue={value} readOnly views={['day']} onChange={(newValue) => setValue(newValue)} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default TaskBoard