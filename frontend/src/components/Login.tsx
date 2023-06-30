'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';
import { ok } from 'assert';
import { useEffect, useState } from 'react';
import { successAlert } from '../../services/alertServicies';
import Swal from 'sweetalert2';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const API = 'http://localhost:5000/api/v1/users';
  const [dataUser, setDataUser] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setDataUser(data.users);
      console.log(dataUser)
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  const initialValues: any = {
    email: "",
    password: ""
  }

  const placeholder: any = {
    email: "example@email.com",
    password: "*************"
  }

  const form = useForm({ initialValues });

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(form.fields.email)
    dataUser?.map((user: any) => {
      if (form.fields.email === user.email) {
        if (user.password === form.fields.password) {
          successAlert();
          localStorage.setItem('login', 'active')
          setTimeout(function () {
            window.location.href = '/user';
          }, 2200);
        } else {
          Swal.fire({
            position: 'top',
            toast: true,
            icon: 'error',
            title: 'Datos Incorrectos',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        Swal.fire({
          position: 'top',
          toast: true,
          icon: 'error',
          title: 'Datos Incorrectos',
          showConfirmButton: false,
          timer: 2000,
        });
      }

    })
  }

  return (
    <form onSubmit={handleSubmit} action={'http://localhost:5000/login'} method='POST' className='flex flex-col px-[20px] gap-2'>
      <input required type='email' {...form.getInput('email')} placeholder={placeholder.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <input required type='password' {...form.getInput('password')} placeholder={placeholder.password} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <Button type='submit' variant="contained" className='bg-[#1F618D]'>Log In</Button>
    </form>
  )
}

export default Login