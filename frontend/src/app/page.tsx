import Footer from '@/components/Footer'
import NestedLayout from '@/layout/NestedLayout'
import Image from 'next/legacy/image'
import journal01 from '../../public/img/journal01.svg'
import journal02 from '../../public/img/journal02.svg'
import UserSession from '@/components/UserSession'

export default function App() {
  return (
    <NestedLayout title='Home | TaskBook' description='Home'>
      <div className='relative min-h-screen min-w-screen bg-cover bg-center flex justify-center items-center'>
        <UserSession/>
        <div className='absolute w-[100%] top-[90px] justify-start px-[60px] z-[0] flex'>
          <Image src={journal02} alt='' width={400} height={400} className=''/>
        </div>
        <div className='absolute w-[100%] bottom-[30px] justify-end flex px-[60px] z-[0]'>
          <Image src={journal01} alt='' width={400} height={400} className=''/>
        </div>
      </div>
      <Footer/>
    </NestedLayout>
  )
}
