"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Signuptwo from "./Signuptwo";
import Signup from "./Signup";

interface user {
  email: string;
  password: string;
  id: string;
  name: string;
  dob: string;
  gender: string;
}

const Signupone = () => {
  // const router=useRouter()
  const [secondcomponent, setsecondcomponent] = useState(false);
  const [previouscond, setpreviouscond] = useState(false)
  const [Signupone, setsignupone] = useState<user>({
    email: "",
    password: "",
    id: crypto.randomUUID(),
    name: "",
    dob: "",
    gender: "",
  });
  useEffect(() => {
    const storeduser = localStorage.getItem("honeymusic_users");
    if (storeduser) {
      setsignupone(JSON.parse(storeduser));
    }
    // console.log(Signupone);
  }, []);

  // useEffect(() => {
  //   console.log(Signupone);
  // }, [Signupone]);

  const changenext = () => {
    setsecondcomponent(!secondcomponent);
  };
  if (secondcomponent) {
    return <Signuptwo />;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setsignupone((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("honeymusic_users", JSON.stringify(Signupone));
    
    changenext();
  };
const prev=()=>{
  setpreviouscond(!previouscond)
};
if(previouscond){
  return <Signup/>
  
}
  return (
    <>
      <div className="flex justify-center items-center p-6 bg-black h-screen">
        <div className=" p-4 w-full max-w-[500px] mx-auto">
          <Image
            src="/images/honeylogo.png"
            alt="Log"
            height={60}
            width={60}
            className="mx-auto mb-12 rounded-full"
          />
           <div className="mb-8" >
           <Image src='/images/previous.jpeg' alt="Previous" width={50} height={50} style={{cursor:'pointer'}} onClick={prev} />
           </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <p className="font-bold text-[18px] text-white mb-8">
                  {" "}
                  Create a Password
                </p>
              </div>
              <div className="mb-3">
                <label
                  htmlFor=""
                  className="text-white mb-8 font-bold text-[15px]"
                >
                  Password
                </label>
              </div>
            </div>
            <input
              type="text"
              required
              placeholder="honey2024_"
              className="border border-amber-300 w-[100%] h-13 mb-10 bg-white opacity-80 "
              name="password"
              onChange={handleChange}
            />
            <p className="mb-6 text-white font-bold">
              Your password must contain at least
            </p>
            <div className="space-y-5">
              <div className="flex ">
                <input type="radio" value="" />{" "}
                <span className="text-red-800 text-[15px] font-bold ml-3">
                  1 letter
                </span>
              </div>
              <div className="flex ">
                <input type="radio" value="" />{" "}
                <span className="text-red-700 text-1xl ml-3 text-[15px] font-bold">
                  1 number or special character(example:#%$_)
                </span>
              </div>
              <div className="flex ">
                <input type="radio" value="" />{" "}
                <span className="text-red-800 text-1xl ml-3 text-[15px] font-bold">
                  10 characters
                </span>
              </div>
            </div>
            <div className="mt-6">
              {/* <button className="hover:bg-blue-500"  >Next</button> */}
              <button
                type="submit"
                className="hover: p-3 font-bold rounded-3xl bg-green-500 bg w-[100%]"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signupone;
