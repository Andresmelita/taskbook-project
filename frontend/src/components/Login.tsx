'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';

const Login = () => {

  const initialValues: any = {
    email: 'example@email.com',
    password: 'Password'
  }

  const form = useForm({ initialValues });
  const handleSubmit = () => {

  }

  console.log(form)
  return (
    <form className='flex flex-col px-[20px] gap-2' onSubmit={handleSubmit}>
      <input type='email' {...form.getInput('email')} placeholder={initialValues.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <input type='password' {...form.getInput('password')} placeholder={initialValues.password} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <Button variant="contained" className='bg-[#1F618D]'>Log In</Button>
    </form>
  )
}

export default Login