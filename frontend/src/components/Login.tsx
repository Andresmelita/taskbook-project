'use client'
import useForm from '@/hooks/useForm';
import Button from '@mui/material/Button';

const Login = () => {

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
    console.log(form.fields)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col px-[20px] gap-2'>
      <input required type='email' {...form.getInput('email')} placeholder={placeholder.email} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <input required type='password' {...form.getInput('password')} placeholder={placeholder.password} className='border-[2px] border-[#1F618D] rounded-md p-2'></input>
      <Button type='submit' variant="contained" className='bg-[#1F618D]'>Log In</Button>
    </form>
  )
}

export default Login