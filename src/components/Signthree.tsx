"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Signuptwo from "./Signuptwo";

interface User{
  email:string,
  password:string,
  id:string,
  name:string,
  dob:string,
  gender:string
}

const Signthree = () => {
  const [previouscon, setpreviouscon] = useState(false)

  const [Signupone,setsignupone]=useState<User>(
        {
          email:"",
          password:'',
          id:crypto.randomUUID(),
          name:'',
          dob:'',
          gender:""
              }  
      )
      

  

     useEffect(() => {
       const storeduser=localStorage.getItem('honeymusic_users')
       if (storeduser){
        setsignupone(JSON.parse(storeduser))
       }
       
     }, [])
     
     


    const submit=()=>{
  const users:User[]= JSON.parse(localStorage.getItem('honeymusic_allusers')!)||[]
      const updateduser=[...users,Signupone]
     
      
      localStorage.setItem('honeymusic_allusers',JSON.stringify(updateduser))



    } 
    const prev=()=>{
        setpreviouscon(!previouscon)
        console.log(previouscon);
        
          }
      if(previouscon){
      
      return <Signuptwo/>
        }
  return (
    <>
      <div className="flex justify-center items-center p-6 bg-black h-screen">
        <div className="bg-black p-4 w-full max-w-[500px] mx-auto">
          <Image
            src="/images/honeylogo.png"
            alt="Log"
            height={60}
            width={60}
            className="mx-auto rounded-full"
          />
 <div className="mb-8">
              <Image
                src="/images/previous.jpeg"
                alt="Previous"
                width={50}
                height={50}
                style={{ cursor: "pointer" }}
                onClick={prev}
              />
            </div>
          <div>
            <div className="mb-15 mt-5">
              <p className="text-white font-bold">Terms & Conditions</p>
            </div>
            <div className="space-y-5 mb-4">
              <div className="bg-[#2A2A2A] p-7 rounded-3xl">
                <input type="checkbox" />
                <span className="text-white lg:ml-2 font-bold">
                  I would prefer not to be receiving marketing messages from
                  Honey-Music
                </span>
              </div>
              <div className="bg-[#2A2A2A] p-7 rounded-3xl">
                <input type="checkbox" />
                <span className="text-white lg:ml-2 font-bold">
                  Share my registration data with Honey-Music&apos;s providers for
                  marketing purposes
                </span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-white">By clicking on sign-up, you agree to Honey-Music&apos;s <Link href="" className="text-green-700">Terms and Conditions of Use</Link></p>
            </div>
            <div>
            <p className="text-white">By clicking on sign-up, you agree to on the <Link href="" className="text-green-700">Honey-Music&apos;s Privacy Policy</Link></p>
            </div>
          </div>
          <Link href='/login'>
          {/* <button className="hover:bg-green-500 p-5" onClick={submit}>Sign up</button> */}
          <div>
          <button type="submit" className="hover: p-3 font-bold rounded-3xl bg-green-500 bg w-[100%] mt-5" onClick={submit}>Next</button>
              </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signthree;
