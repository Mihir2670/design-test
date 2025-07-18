import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-center mt-5 font-sans font-medium'>
            <ul>
                <img src="LOGO.png" alt="" />
                <Link href="/home" className='mr-13 hover:underline underline-offset-8'>HOME</Link>
                <Link href="/home" className='mr-13 hover:underline underline-offset-8'>NEW ARRIVALS</Link>
                <Link href="/home"className='mr-13 hover:underline underline-offset-8'>SHOP</Link>
                <Link href="/home"className='hover:underline underline-offset-8'>SUPPORT</Link>
            </ul>
        </nav>
        <div>
            <h1 className='font-inter text-7xl font-extrabold mt-25 ml-15'>PHONKY</h1>
            <h1 className='font-Londrina text-7xl ml-70 font-extrabold text-orange-300'>HOOD</h1>
        </div>
    </div>
  )
}

export default Navbar