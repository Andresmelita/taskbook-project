'use client'
import React, { useEffect, useState } from 'react'
import TaskBoard from './TaskBoard'
import BookBoard from './BookBoard'

interface User {
    title: string;
    // Other properties of the User object
}

const UserBoard = ({ data }: any) => {

    const API = 'http://localhost:5000/users'
    const [dataUser, setDataUser] = useState<Array<User>>([]);

    const users = async () => {
        const res = await fetch(API)
        const data = await res.json();
        setDataUser(data.users)
    }
    // window.addEventListener("load", function () {
    //     users();
    // })

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("load", users);
            return () => {
                window.removeEventListener("load", users);
            };
        }
    }, []);

    return (
        <div className='xl:w-[88%] lg:w-[84%] md:w-[78%] w-[100%] h-[100%] bg-[#1c5285] p-[12px] pt-[70px]'>
            <div className='w-[100%] flex lg:flex-row flex-col h-[100%] rounded-[20px]'>
                <div className='relative lg:w-[70%] w-full h-[64%] lg:h-full rounded-tl-[20px] lg:rounded-tr-[0px] lg:rounded-bl-[20px] rounded-bl-[0px] rounded-tr-[20px] bg-[#fff] flex justify-center items-center'>
                    {/* <BookBoard/> */}
                    <div className='bg-[#aeae] w-[90%] h-[90%] rounded-[20px] p-[50PX] flex items-center gap-4 flex-col'>
                        <h1 className='font-semibold'>Verificando información de Backend</h1>
                        <div className='bg-[#eaea] p-[20px] w-[100%] h-[400px] rounded-[20px] text-[15px] text-[#000]'>
                            {/* {
                                dataUser?.[0]?.title
                            } */}
                            {
                                dataUser?.map((user: any) => {
                                    return <div key={user.id}>{user.title}</div>;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='lg:w-[30%] w-full h-[36%] lg:h-full lg:rounded-tr-[20px] rounded-tl-[0px] rounded-br-[20px] lg:rounded-bl-[0px] rounded-bl-[20px] bg-[#eeeeee] flex justify-center items-center'>
                    <TaskBoard />
                </div>
            </div>
        </div>
    )
}

export default UserBoard

// export const getStaticProps = async () => {
//     try {
//         const res = await fetch('http://localhost:5000/users')
//         const data = await res.json()
//         return {
//             props: {
//                 data
//             }
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }