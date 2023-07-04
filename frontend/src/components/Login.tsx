'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import axios from 'axios';
import bcrypt from 'bcryptjs'
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
  console.log(token)

  const initialValues: any = {
    email: "",
    password: ""
  }

  const [credentials, setCredentials] = useState([{
    email: '',
    password: ''
  }])

  const placeholder: any = {
    email: "example@email.com",
    password: "*************"
  }

  const form = useForm({ initialValues });
  const APIurl = 'http://127.0.0.1:5000/api/v1/login'

  // const handleChange = (e: any) => {
  //   setCredentials({
  //     ...credentials,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    
    try {
      const hashedPassword = await bcrypt.hash(form.fields.password, 10);
      console.log(hashedPassword)
      const response = await axios.post(APIurl, {
        email: form?.fields.email,
        password: form?.fields.password
      })
      const data = await response.data
      const { token } = data;
      setToken(token)
    } catch (error) {
      console.error(error);
    }
    console.log(form.fields)
  }

  // const handleSubmit = (event: any) => {
  //   event.preventDefault()
  //   dataUser?.map((user: any) => {
  //     if (user.email === form.fields.email) {
  //       if (user.password === form.fields.password) {
  //         successAlert();
  //         localStorage.setItem('login', 'active')
  //         localStorage.setItem('email', user.email)
  //         setTimeout(function () {
  //           window.location.href = '/user';
  //         }, 2200);
  //       } else {
  //         Swal.fire({
  //           position: 'top',
  //           toast: true,
  //           icon: 'error',
  //           title: 'Datos Incorrectos',
  //           showConfirmButton: false,
  //           timer: 2000,
  //         });
  //       }
  //     } 
  //   })
  // }



  return (
    <form className='flex flex-col px-[20px] gap-2' onSubmit={handleSubmit}>
      <input required type='email' {...form.getInput('email')} placeholder={placeholder.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <input required type='password' {...form.getInput('password')} placeholder={placeholder.password} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <Button type='submit' variant="contained" className='bg-[#1F618D]'>Log In</Button>
    </form>
  )
}

export default Login