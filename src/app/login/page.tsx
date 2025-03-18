"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


interface User{
  email:string,
  password:string,
  id:string,
  fullname:string,
  dob:string,
  gender:string
}
const Page = () => {
  const [msg, setmsg] = useState('')
  const router=useRouter()
  const [allusers, setallusers] = useState<User[] >([])

const [user, setuser] = useState({
  email:'',
  password:''

})
useEffect(() => {
      
    const storedUsers = localStorage.getItem("honeymusic_allusers");
    if(storedUsers){

      setallusers(storedUsers ? JSON.parse(storedUsers) : []);
    }
  
}, []);

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
    const currentuser=allusers.find((current:User)=>current.email ===user.email && current.password===user.password)
    console.log(currentuser);
    if(!currentuser){
      // msg.classList()
      setmsg('Incorrect Email or Password')
      // console.log('no user');
      setTimeout(() => {
        setmsg('')
      }, 2000);
    }
    else{
      console.log('user found');
      localStorage.setItem('honeymusic_currentuser',JSON.stringify(currentuser))
      router.push('/playlist')
    }
      
   }
  return (
    <>
      <div className="flex justify-center items-center  bg-black p-6 h-screen">
      <div className="bg-black p-6 w-full max-w-[900px] mx-auto rounded-lg shadow-lg flex flex-col items-center gap-10">
        
        <Image
          src="/images/honeylogo.png"
          alt="Logo"
          height={60}
          width={60}
          className="mx-auto rounded-full"
        />

        <h1 className="text-center text-[25px] text-white text-lg font-bold">Sign up to start listening</h1>

        <div className="space-y-5">
        <Link href="#" className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-3">
          <Image src="/images/google.jpeg" alt="Google" width={30} height={30} />
          <span className="text-white font-bold">Continue with Google</span>
        </Link>
        <Link href="#" className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-3">
          <Image src="/images/facebook.jpeg" alt="Google" width={30} height={30} />
          <span className="font-bold text-white">Continue with Facebook</span>
        </Link>
        <Link href="#" className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-3">
          <Image src="/images/google.jpeg" alt="Google" width={30} height={30} />
          <span className="font-bold text-white">Continue With Apple</span>
        </Link>
        <Link href="#" className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-3">
          <span className="text-white font-bold">Continue with phone number</span>
        </Link>
        <form onSubmit={handleSubmit}>
        <div className="text-left mb-3">
          <label htmlFor="" className="text-white ">Email or Username</label> 
        </div>
        <div className="mb-4">
        <input type="text" required name="email" className=" bg-white rounded-3xl w-[100%] border border-white h-10" onChange={handleChange} />
        </div>
        <div className="text-left mb-3">
          <label htmlFor="" className="text-white">Password</label> 
        </div>
        <div>
        <input type="text" name="password" required onChange={handleChange} className=" border border-white w-[100%] h-10 bg-white rounded-3xl"/>
        </div>
        
        <div className="text-center">
            <button type="submit" className=" p-3 rounded-3xl font-bold bg-green-500 w-[100%] mt-5  " >Log in</button>
    
        </div>
        
        </form>
        {
          msg?(
            <div className="bg-white font-bold  p-3 text-center text-red-600 rounded-2xl" >{msg}</div>
          ):(
            <p></p>
          )
        }
        </div>
        <hr />
        
      </div>
      
    </div>
    
    </>
  );
};
<button type="submit" className="hover: p-3 font-bold rounded-3xl bg-green-500 bg w-[100%] mt-5" >Next</button>

export default Page;
