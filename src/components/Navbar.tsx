import React from 'react'
import Logo from "@/../../public/logo.svg"
import Hamburger from "@/../../public/bars.svg";
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute inset-x-0 top-0 h-16 flex justify-between items-center px-10 lg:px-20'>
        <Logo className='w-40 md:w-50 lg:w-60' />
        <div className='hidden md:flex gap-6'>
            <Link href="#">Air</Link>
            <Link href="#">Gravity</Link>
            <Link href="#">Experience</Link>
            <Link href="#">Shop</Link>
        </div>
        <Hamburger className='md:hidden w-6 h-6' />
    </nav>
  )
}

export default Navbar