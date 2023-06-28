'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import React from 'react';

const SignUp = () => {

    const initialValues: any = {
        email: "",
        name: "",
        lastname: "",
        password: "",
    }

    const placeholder: any = {
        email: 'example@email.com',
        name: 'John',
        lastname: 'Doe',
        password: 'Password',
    }

    const form = useForm({ initialValues });
    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(form.fields)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col px-[20px] gap-2'>
            <input required type='email' {...form.getInput('email')} placeholder={placeholder.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
            <div className="flex w-[100%] gap-2">
                <input required type='text' {...form.getInput('name')} placeholder={placeholder.name} className='w-[50%] border-[2px] border-[#1F618D] rounded-md p-2'></input>
                <input required type='text' {...form.getInput('lastname')} placeholder={placeholder.lastname} className='w-[50%] border-[2px] border-[#1F618D] rounded-md p-2'></input>
            </div>
            <input required type='password' {...form.getInput('password')} placeholder={placeholder.password} alt="strongPass" className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
            <Button type='submit' variant="contained" className='bg-[#1F618D]'>Sign Up</Button>
        </form>
    )
}

export default SignUp