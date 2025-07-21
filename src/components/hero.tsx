import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
  <>
    <div>
      <img src="LOGO.png" className="absolute"alt="" />
        <nav className='flex justify-center mt-5 font-sans font-medium'>
            <ul>
                <Link href="/home" className='mr-13 hover:underline underline-offset-8'>HOME</Link>
                <Link href="/home" className='mr-13 hover:underline underline-offset-8'>NEW ARRIVALS</Link>
                <Link href="/home"className='mr-13 hover:underline underline-offset-8'>SHOP</Link>
                <Link href="/home"className='hover:underline underline-offset-8'>SUPPORT</Link>
            </ul>
        </nav>
        <div className='mt-30'>
            <h1 className='font-inter text-7xl font-extrabold mt-25 ml-15'>PHONKY</h1>
            <h1 className='font-Londrina text-7xl ml-70 font-extrabold text-orange-300'>HOOD</h1>
        </div>

        <div className='font-inter text-3xl ml-17 mt-10 font-thin text-zinc-700'>
          <h1>Unleash your phonky style.</h1>
          <h1>Stand out Be <span className="text-orange-400 font-bold">bold.</span></h1>
        </div>
        <div className="absolute top-40 left-230">
          <img src="man.png"className="h-100 w-70" alt=""/>
        </div>

        <div className="bg-orange-400 w-33 ml-15 mt-20 text-white p-4 rounded-3xl">
          <button className="text-3xl">Explore</button>
        </div>
    </div>
  
    <div className='p-30 mt-10 bg-gray-300'>
        <div><img src="man3.png" className='w-190 h-43 absolute left-70 top-160' alt="" /></div>
    </div>


    <div className='p-30 border-2 border-black'>
      <div><img src="photo.png w-40 h-40" alt="" /></div>
    </div>
  </>
  )
}

export default Navbar