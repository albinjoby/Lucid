import React from 'react'
import Logo from "@/../../public/logo.svg"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute inset-x-0 top-0 h-16 flex justify-between items-center px-20'>
        <Logo className='w-40 md:w-50 lg:w-60' />
        <div className='flex gap-6'>
            <Link href="#">Air</Link>
            <Link href="#">Gravity</Link>
            <Link href="#">Experience</Link>
            <Link href="#">Shop</Link>
        </div>
    </nav>
  )
}

export default Navbar