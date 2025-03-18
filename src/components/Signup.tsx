'use client'

import Signupone from "@/components/Signupone";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// import login from '/about.tsx'
interface User{
  email:string,
  password:string,
  id:string,
  fullname:string,
  dob:string,
  gender:string
}

const Signup = () => {
    const [nextcomponent, setnextcomponent] = useState(false)
    const [user, setuser] = useState<User>({
email:"",
password:'',
id:crypto.randomUUID(),
fullname:'',
dob:'',
gender:""
    })
    const nextpage=()=>{
        setnextcomponent(!nextcomponent)
    }
    if(nextcomponent){
        return <Signupone/>
    }
   
 const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target
setuser((prevData)=>({
  ...prevData,
  [name]:value
}))
   }
   const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('form submitted',user);
    localStorage.setItem('honeymusic_users',JSON.stringify(user))
    nextpage() 
   }
  return (
    <>
      <div className="flex justify-center  p-6 bg-black h-screen">
        <div className="bg-black  p-4 w-full max-w-[400px] mx-auto ">
          <Image
            src="/images/honeylogo.png"
            alt="Log"
            height={60}
            width={60}
            className="mx-auto  mb-12 rounded-full"
          />

          <h1 className="text-center mb-12 text-white mt-5 font-bold lg:text-[45px]">Sign up to start listening</h1>
          <div className="mb-3">
            <label  htmlFor="" className="email text-white font-bold mb-1">Email Address</label>
          </div>
          <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="name@domain.com"
            className="border border-white w-[100%] h-12 bg-white opacity-80"
            name="email"
            onChange={handleChange}
          />
          
          <div className="mt-10 mb-20">
            <button type="submit" className="hover: p-3 font-bold rounded-3xl bg-green-500 bg w-[100%]" >Next</button>
          </div>
          </form>
          <div className="flex items-center space-x-3 mb-10">
            <hr className="w-[250px] text-white" />
            <span className="text-white">or</span> <hr className="w-[250px] text-white" />
          </div>
          <div className="space-y-10">
            <div className=" border border-white rounded-3xl">
              <Link href="" className="flex items-center  rounded-3xl h-10 border space-x-18">
                <Image
                  src="/images/google.jpeg"
                  alt="google"
                  width={30}
                  height={30}
                  className="h-auto w-auto lg:ml-2"
                />{" "}
                <span className="text-white font-bold">Sign up with Google</span>
              </Link>
            </div>
            <div className="border border-white rounded-3xl">
              <Link href="" className="flex items-center rounded-3xl h-10 border space-x-18">
                <Image
                  src="/images/facebook.jpeg"
                  alt="google"
                  width={30}
                  height={30}
                  className="w-auto h-auto lg:ml-2"
                />{" "}
                <span className="text-white font-bold">Sign up with Facebook</span>
              </Link>
            </div>
            <div className="border border-white rounded-3xl">
              <Link href="" className="flex items-center rounded-3xl h-10 border space-x-18">
                <Image
                  src="/images/google.jpeg"
                  alt="google"
                  width={30}
                  height={30}
                  className="w-auto h-auto lg:ml-2"
                />{" "}
                <span className="text-white font-bold">Sign up with Apple</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Signup;
