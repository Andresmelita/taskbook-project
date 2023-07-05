'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import Cookie from 'js-cookie';
import axios from 'axios';
// import bcrypt from 'bcryptjs'
import { ok } from 'assert';
import { useEffect, useState } from 'react';
import { successAlert } from '../../services/alertServicies';
import Swal from 'sweetalert2';
import { login } from '../../services/auth.services';
import Cookies from 'js-cookie';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const initialValues: User = {
    email: "",
    password: "",
  }

  const placeholder: any = {
    email: "example@email.com",
    password: "*************"
  }

  const form = useForm({ initialValues });

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log(form.fields)
    login({
      email: form?.fields.email,
      password: form?.fields.password
    })
      .then((response) => {
        Cookie.set('userCookie', response.data.token)
        console.log(response.data)
        successAlert()
        if (response.data.message == 'Authenticated User'){
          setIsAuthenticated(true)
          setToken(response.data.token)
        } else {setIsAuthenticated(false)}
      })
      .catch((error) => {
        console.log(error);
        setIsAuthenticated(false)
      })
      setTimeout(function () {
          window.location.href = '/user';
        }, 2200);

  }

  return (
    <div className='flex justify-center flex-col items-center w-[100%] h-[100%]'>
      <form className='flex flex-col px-[20px] gap-2 w-[100%]' onSubmit={handleSubmit}>
        <input required type='email' {...form.getInput('email')} placeholder={placeholder.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
        <input required type='password' {...form.getInput('password')} placeholder={placeholder.password} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
        <Button type='submit' variant="contained" className='bg-[#1F618D]'>Log In</Button>
      </form>
      {isAuthenticated ? <div></div> : <div className='pt-[10px] text-[#922828]'>Wrong email or password</div>}
    </div>

  )
}

export default Login