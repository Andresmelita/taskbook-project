'use client'
import SideBar from '@/components/SideBar'
import UserBoard from '@/components/UserBoard'
import NestedLayout from '@/layout/NestedLayout'
import React from 'react'

const page = () => {
    return (
        <NestedLayout title='Board | TaskBook' description="Board">
            <div className='bg-[#eaea] h-[100vh] w-[100vw] flex'>
                <SideBar />
                <UserBoard/>
            </div>
        </NestedLayout>
    )
}

export default page