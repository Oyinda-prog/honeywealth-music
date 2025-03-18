'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface apiinterface{
id:string,
songImage:string,
artistName:string,
songTitle:string,
songUrl:string,
albumName:string,
releaseDate:string
}
const Artistecomponent = () => {
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
    
  return (
   
     <>
    {/* <div>
            <h1 className='text-white m-10 text-[25px]'>Recommended for you</h1>

        </div>  */}
        <div>
                    <h1 className='text-white text-[30px] m-10 font-bold'>Recommended for you</h1>
        
                </div> 
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   p-4 sm:space-y-5 md:space-y-0  lg:space-y-5  space-x-15 shadow  bg-white  rounded-3xl'>
                
             {
                api.map(music=>(
                
                
                  <div key={music.id} className='ms-10 text-[20px] w-[80%]  md:bg-amber-50  md:w-[80%] my-15 b shadow rounded-3xl p-4'>
                    {
                      !music.id?(
                        <div>
                                <Image src='/images/loading.png' alt='Loading.....' width={60} height={60}/>
                              </div>
                      ):(
                        <div>
                          
                  <Link href={`/${music.id}`} className='' >
                 <div className=' mx-auto p-10 space-y-8 rounded-3xl shadow relative w-35 h-35'>
                    
                 <Image alt='Artiste Image' src={music.songImage}  unoptimized={true} fill className='rounded-full object-cover'/>
                
                </div>
                <p className='text-black font-bold text-[20px] mt-5 mb-3'>{music.songTitle}</p>
                 {/* <p className='text-white mb-5'>{music.albumName}</p> */}
                 
                 <Image src='/images/playicon.jpg' alt='play ' width={30} height={30} className='rounded-full ' />
                 </Link>
                        </div>
                      )
                    }
                 
                  </div> 
                 
                ))
            }
            </div>
      
        
         </>
  )
}

export default Artistecomponent
