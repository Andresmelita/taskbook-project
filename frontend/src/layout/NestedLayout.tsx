import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

interface Props {
    children?: React.ReactNode;
    title: string;
    description: string;
}

const NestedLayout = ({children, title, description}: Props) => {
    return (
        <div>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <Navbar/>
            {children}
        </div>
    )
}

export default NestedLayout