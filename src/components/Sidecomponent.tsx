'use client'
import Image from 'next/image'
import Link from 'next/link'
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
const Sidecomponent = () => {
  const [api, setapi] = useState<apiinterface[]>([])
  const [randomapi, setrandomapi] = useState<string>('')
  const [songimage, setsongimage] = useState('')
  const [artistname, setartistname] = useState('')
  const [releasedate, setreleasedate] = useState('')
  
  
  
      const fetchapi= async ()=>{
       const apifetch=await fetch('https://musicapi-19wk.onrender.com/music/myAPI',{
          cache:"no-cache"
       })
       const convertjs=await apifetch.json()
       setapi(convertjs)
       
      }
      useEffect(() => {
       fetchapi()

       setInterval(() => {
        fetchapi()
       }, 5000);
      }, [])

      useEffect(() => {
      if(api.length>0){
        const randomapi=api[Math.floor(Math.random()*api.length)]
        const {albumName,songImage,artistName,releaseDate}=randomapi
       setrandomapi(albumName)
       setsongimage(songImage)
       setartistname(artistName)
       setreleasedate(releaseDate)
      }
      }, [api])
      
  return (
  
    <>
    <div className='w-[100%] bg-[#000000] opacity-95 text-white space-y-10 p-5 lg:sticky lg:top-0 lg:left-0 h-screen'>
<div>
<div className=' lg:w-[100%] sm:w-[100%] lg:text-[15px] p-6 sm:text-[5px] shadow space-y-6 rounded-3xl bg-[#2A2A2A]'>
<h1>Create your first playlist</h1>
<p>It&apos;s easy, we&apos;ll help you</p>
<Link href="#" style={{textDecoration:'none'}} className='bg-white text-[15px] text-black p-3 rounded-3xl'>Create Playlist</Link>
</div>
</div>
<div className=''>
<div className='lg:w-[100%] sm:w-[100%] lg:text-[15px] p-6 sm:text-[5px] shadow space-y-6 rounded-3xl bg-[#2A2A2A]'>
<h1 >Let&apos;s find some podcast to follow</h1>
<p>We&apos;ll keep you updated on new episodes</p>
<Link href="#" style={{textDecoration:'none'}} className='bg-white text-[15px] text-black p-3 rounded-3xl'>Create Playlist</Link>
</div>

</div>

<div className=''>
<div className='p-6 lg:w-[100%] sm:w-[100%] lg:text-[15px]  sm:text-[5px] shadow space-y-6 rounded-3xl bg-[#2A2A2A]'>
  {
    songimage?(
<Image src={songimage} unoptimized={true} alt='' width={300} height={300} className='rounded-full'/>
    ):(
      <div>
        <Image src='/images/loading.png' alt='Loading.....' width={60} height={60}/>
      </div>
    )
  }
  
<h1 >{artistname}</h1> 
<p>{randomapi}</p>
<p>{releasedate}</p>
<Link href="#" style={{textDecoration:'none'}} className='bg-white text-[15px] text-black p-3 rounded-3xl'>Create Playlist</Link>
</div>

</div>
    </div>
    </>
  )
}

export default Sidecomponent