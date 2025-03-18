'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
const a={
  textDecoration:'none',
  color:'white'
}
const col={
  color:'black',
  textDecoration:'none'
}
  return (
    <>
<nav className='lg:p-[10px] lg:w-[100%] z-2 shadow fixed top-0 bg-[#000000] text-white text-[16px] font-bold'>
    <ul className='flex decoration-0 list-none justify-around w-[100%]'>
        <li><Image
                                src="/images/honeylogo.png"
                                alt="Log"
                                height={60}
                                width={60}
                                className=""
                              /></li>
        <li><Link href="/" style={a}>Home</Link></li>
        <li className='shadow'><input type="text" className='bg-[#2A2A2A] text-center rounded-3xl border border-amber-950 sm:none lg:w-[700px] lg:h-[50px]' placeholder='What do you want to play?' /></li>
        <li><Link href="#" style={a}>Install App</Link></li>
        <li><Link href="/login">Log In</Link></li>
        <li ><Link href="/signup" style={a}>Sign Up</Link></li>
        <li className='bg-white text-[15px] text-black p-3 rounded-3xl'><Link href="#" style={col}>Explore Premium</Link></li>
    </ul>
</nav>
    </>
  )
}

export default Navbar