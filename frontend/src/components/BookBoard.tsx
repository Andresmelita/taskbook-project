'use client'
import React, { useRef, useState } from 'react'
import DrawIcon from '@mui/icons-material/Draw';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Slider from './Slider';
import useForm from '@/hooks/useForm';
// import Swiper and modules styles

interface Task {
    title: string;
    description: string;
}

const BookBoard = () => {
    const [dataUser, setDataUser] = useState<Array<Task>>([]);
    const initialValues: any = {
        title: "",
        description: ""
    }
    const form = useForm({ initialValues });

    const handleSubmit = () => {

    }

    // function saveTask(event: any) {
    //     event.preventDefault()
    //     const titleElement = document.getElementById('title') as HTMLInputElement;
    //     const descriptionElement = document.getElementById('description') as HTMLInputElement;
    //     const title = titleElement?.value;
    //     const description = descriptionElement?.value;
    //     const task = {
    //         title,
    //         description
    //     }
    //     console.log(task)

    //     if (localStorage.getItem('tasks') === null) {
    //         setDataTasks(task)
    //     }

    // }
    //     tasks.push(task);
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // } else {
    //     let tasks = JSON.parse(localStorage.getItem('tasks'))
    //     tasks.push(task);
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }
    return (
        <div className="h-[96%] w-[98%] flex flex-col rounded-[20px]">
            <div className='w-[100%] lg:h-[30%] h-[40%] px-[10px] pt-[10px] flex justify-center'>
                <div className='flex flex-col w-[60%] justify-center bg-slate-300 rounded-[20px] shadow-card'>
                    {/* <div className='flex font-bold text-[28px] items-center'><p>Cuaderno Azul</p>
                        <div className="flex md:hidden">
                        </div>
                    </div> */}
                    <form action='http://127.0.0.1:5000/addrec' method="POST" className='flex flex-col gap-4 p-4 justify-center'>
                        <h3>Please Add the New Student Information:</h3>
                        <input type="text" name="nm" placeholder='Name' />
                        <textarea name="add" placeholder='Address'></textarea>
                        <input type="text" name="city" placeholder='City' />
                        <input type="text" name="zip" placeholder='Zip code' />
                        <button type="submit" value="Submit" className='bg-[#777] border-[2px] text-[#fff] border-[#fff]'>Submit</button>
                    </form>
                    {/* <form className="w-[100%] h-[100%]" id='formTask' onSubmit={handleSubmit}>
                        <div className='font-bold text-[#1c5285] flex justify-center text-[16px] w-[100%] pl-[10px] hover:scale-110 ease-in-out duration-300'>
                            <button type="submit" className='cursor-pointer py-[10px]'>
                                Agregar Tarea
                                <span><AddBoxIcon /></span>
                            </button>
                        </div>
                        <div className="form-group h-[20%]w-[100%] flex items-center justify-center">
                            <input {...form.getInput('title')} className='form-control h-[90%] w-[80%] rounded-[10px] p-[6px]' type="text" id="title" placeholder="Add a to do" />
                        </div>
                        <div className="form-group h-[50%] w-[100%] flex items-center justify-center">
                            <textarea {...form.getInput('description')} id="description" placeholder="Add a description" className="h-[90%] w-[80%] p-[6px] rounded-[10px] form-control"></textarea>
                        </div>
                    </form> */}

                </div>
                {/* <div className="hover:scale-110 ease-in-out duration-300 ">
                    <DrawIcon className="text-[30px] text-[#1c5285] cursor pointer" />
                </div> */}
            </div>
            <div className='lg:h-[35%] h-[50%] inline w-[100%] py-[10px]'>
                <h4 className="h-[10%] text-[#777] text-[14px] pl-[20px]">En curso</h4>
                <div className='h-[90%]'><Slider /></div>

            </div>
            {/* <div className='lg:h-[30%] h-[42%] inline w-[100%] py-[10px]'>
                <h4 className='h-[10%] text-[#777] text-[14px] pl-[20px]'>Pausados</h4>
                <div className='h-[90%]'><Slider /></div>
            </div> */}
            <div className='lg:h-[35%] lg:inline hidden w-[100%] py-[10px]'>
                <h4 className='h-[10%] text-[#777] text-[14px] pl-[20px]'>Finalizados</h4>
                <div className='h-[90%]'><Slider /></div>
            </div>
        </div>
    )
}

export default BookBoard