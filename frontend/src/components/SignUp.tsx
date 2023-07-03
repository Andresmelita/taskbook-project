'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {

    const [registrationOk, setRegistrationOk] = useState(false)

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

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/v1/users', {
                name: form?.fields.name,
                last_name: form?.fields.last_name,
                email: form?.fields.email,
                password: form?.fields.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setRegistrationOk(true)
        } catch (error) {
            console.error(error);
            setRegistrationOk(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col px-[20px] gap-2'>
            {registrationOk ?
                <div className='text-[18px] font-semibold flex justify-center items-center'>
                    <div>Successful registration, Welcome!</div>
                </div>
                :
                <div className='flex flex-col px-[20px] gap-2'>
                    <input required type='email' {...form.getInput('email')} placeholder={placeholder.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
                    <div className="flex w-[100%] gap-2">
                        <input required type='text' {...form.getInput('name')} placeholder={placeholder.name} className='w-[50%] border-[2px] border-[#1F618D] rounded-md p-2'></input>
                        <input required type='text' {...form.getInput('last_name')} placeholder={placeholder.lastname} className='w-[50%] border-[2px] border-[#1F618D] rounded-md p-2'></input>
                    </div>
                    <input required type='password' {...form.getInput('password')} placeholder={placeholder.password} alt="strongPass" className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
                    <Button type='submit' variant="contained" className='bg-[#1F618D]'>Sign Up</Button>
                </div>}

        </form>
    )
}

export default SignUp