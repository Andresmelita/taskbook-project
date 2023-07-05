'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import axios from 'axios';
// import bcrypt from 'bcryptjs'
import { ok } from 'assert';
import { useEffect, useState } from 'react';
import { successAlert } from '../../services/alertServicies';
import Swal from 'sweetalert2';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log(token)
  

  const initialValues: any = {
    email: "",
    password: "",
  }

  const placeholder: any = {
    email: "example@email.com",
    password: "*************"
  }

  const form = useForm({ initialValues });
  const APIurl = 'http://127.0.0.1:5000/api/v1/login'

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const response = await axios.post(APIurl, {
        email: form?.fields.email,
        password: form?.fields.password
      }, { 
        withCredentials: true,
        headers: {
          'Set-Cookie': 'cookieName=cookieValue; SameSite=None; Secure'
        }
      })
      const data = await response.data
      //? Respuesta del backend
      console.log(response.data)
      if (response.data.message == 'Authenticated User'){
        setIsAuthenticated(true)
      } else {setIsAuthenticated(false)}
      const { token } = data;
      successAlert()
    } catch (error) {
      setIsAuthenticated(false)
      console.error(error);
    }
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