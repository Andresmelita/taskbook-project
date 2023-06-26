'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import React from 'react';

const SignUp = () => {

    const initialValues: any = {
        email: 'example@email.com',
        name: 'John',
        lastname: 'Doe',
        password: '************',
    }

    const form = useForm({ initialValues });
    const handleSubmit = () => {

    }

    console.log(form)

    return (
        <form className='flex flex-col px-[20px] gap-2'>
            <input type='email' {...form.getInput('email')} placeholder={initialValues.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
            <div className="flex w-[100%] gap-2">
                <input type='text' {...form.getInput('name')} placeholder={initialValues.name} className='w-[50%] border-[2px] border-[#1F618D] rounded-md p-2'></input>
                <input type='text' {...form.getInput('lastname')} placeholder={initialValues.lastname} className='w-[50%] border-[2px] border-[#1F618D] rounded-md p-2'></input>
            </div>
            <input type='password' {...form.getInput('password')} placeholder={initialValues.password} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
            <Button variant="contained" className='bg-[#1F618D]'>Sign Up In</Button>
        </form>
    )
}

export default SignUp