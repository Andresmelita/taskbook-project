import Footer from '@/components/Footer'
import Login from '@/components/Login'
import NestedLayout from '@/layout/NestedLayout'

export default function App() {
  return (
    <NestedLayout title='Home | TaskBook' description='Home'>
      <div className='home min-h-screen min-w-screen bg-cover bg-center flex justify-center items-center'>
        <Login/>
      </div>
      <Footer/>
    </NestedLayout>
  )
}
