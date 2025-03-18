'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface apiinterface{
    id:string,
    songImage:string,
    artistName:string,
    songTitle:string,
    songUrl:string,
    albumName:string,
    releaseDate:string
    }

const Page = () => {
    
    // useEffect(() => {
    //  console.log(id);
      
    // }, [id])
    
    const [api, setapi] = useState<apiinterface[]>([])
    
        const fetchapi= async ()=>{
         const apifetch=await fetch('https://musicapi-19wk.onrender.com/music/myAPI',{
            cache:"no-cache"
         })
         const convertjs=await apifetch.json()
         setapi(convertjs)
        }
        useEffect(() => {
         fetchapi()
        }, [])

        const param=useParams()
        const{id}=param
        const artiste=api.find((artist)=>String(artist.id)===id)
        console.log(artiste);
        


  return (
    <>
    <div className='bg-black h-screen w-[100%] p-4'>
      <div className='mx-auto lg:w-[50%] rounded-3xl bg-[#2A2A2A] p-10 lg:mt-[10%] lg:flex justify-between sm:space-y-10 lg:space-x-5'>
        <div className='bg-black lg:w-[50%] sm:w-[100%]'>
          {
            artiste?.songImage?(<Image src={artiste?.songImage} alt='' unoptimized={true} className='w-[100%] rounded-3xl' width={200} height={200}/>):(
              <p>loading.....</p>
            )
          }
        </div>
        <div className=' lg:w-[50%] sm:w-[50%] p-10'>
          <div className='text-center space-y-5'>
    <h1 className='text-white lg:text-[30px]'>Start listening with a</h1>
    <h1 className='text-white lg:text-[22px]'>free Honey Music Account</h1>
    <div className='text-center mb-10'>
      <Link className='text-white p-[10px] bg-green-700  rounded-3xl' href="/signup" style={{textDecoration:'none'}}>Sign Up Free</Link>
    </div>
    <div className='text-center mt-10'>
      <Link className='text-white mt-10 p-[10px] w-[100%] bg-green-700  rounded-3xl' href="#" style={{textDecoration:'none'}}>Install App</Link>
    </div>
    <p className='text-white mt-10'>Already have an account? <Link href='/login' style={{textDecoration:'none'}}>log in</Link></p>
         
          </div>
           
        </div>
        
         </div>
    </div>
    </>
  )
}

export default Page