"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Signupthree from "./Signupthree";
import Link from "next/link";

import Signone from "./Signone";

interface User {
  email: string;
  password: string;
  id: string;
  name: string;
  dob: string;
  gender: string;
}

const Signuptwo = () => {
  const [componentthree, setcomponentthree] = useState(false);
  const [previouscon, setpreviouscon] = useState(false)
  // const [secondcomponent, setsecondcomponent] = useState(false);

  const [Signupone, setsignupone] = useState<User>({
    email: "",
    password: "",
    id: crypto.randomUUID(),
    name: "",
    dob: "",
    gender: "",
  });

  // const pagethree=()=>{
  //     setcomponentthree(!componentthree)
  // }
  // if(componentthree){
  //     return <Signupthree/>
  // }
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

    setcomponentthree(true);
    //  pagethree()
  };

  const prev=()=>{
setpreviouscon(!previouscon)
  }
  if(previouscon){
    return <Signone/>
  }

  return (
    <>
      {componentthree ? (
        <Signupthree />
      ) : (
        <div className="flex justify-center items-center p-6 bg-black  h-screen">
          <div className=" mb-4 p-4 w-full max-w-[500px] mx-auto">
            <Image
              src="/images/honeylogo.png"
              alt="Log"
              height={60}
              width={60}
              className="mx-auto rounded-full mb-13"
            />
            {/* <hr className='border border-amber-950' /> */}
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
            <form action="" onSubmit={handleSubmit}>
              <div>
                <div>
                  <p className="text-[18px] font-bold text-white mb-4">
                    Tell us about yourself
                  </p>
                </div>
                <div className="mb-4">
                  <label htmlFor="" className=" text-[18px] text-white">
                    Name
                  </label>
                </div>
                <p className=" text-white opacity-60 mb-2">
                  This name will appear on your profile
                </p>
              </div>
              <input
                name="fullname"
                onChange={handleChange}
                type="text"
                placeholder="honey2024_"
                className="border border-white w-[100%] bg-white h-13 mb-10 "
              />
              <div className="mb-4">
                <label htmlFor="" className=" text-[18px] text-white">
                  Date of Birth
                </label>
              </div>
              <p className="text-white opacity-60 mb-2">
                Why do we need your date of birth?{" "}
                <Link href="#">Learn more</Link>
              </p>
              <div className="">
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  className="w-[100%] border border-amber-500 bg-white h-13 mb-13"
                  placeholder="dd"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className=" text-[18px] text-white">
                  Gender
                </label>
              </div>
              <p className=" text-white opacity-60 mb-2">
                We use gender to help personalize our content recommendations
                and ads for you
              </p>
              <div className="flex space-x-20">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="Man"
                    className="border border-amber-500"
                    onChange={handleChange}
                  />
                  <span className="text-white ml-2">Man</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="Woman"
                    className="border border-amber-500"
                    onChange={handleChange}
                  />{" "}
                  <span className="text-white ml-2">Woman</span>
                </div>
              </div>
              <p>
                <input
                  type="radio"
                  value="Rather Not Say"
                  name="gender"
                  onChange={handleChange}
                />
                <span className="text-white ml-2">rather not say</span>
              </p>
              <div>
                <button
                  type="submit"
                  className="hover: p-3 font-bold rounded-3xl bg-green-500 bg w-[100%] mt-5"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Signuptwo;
