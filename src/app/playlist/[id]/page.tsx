"use client";
import Sidecomponent from "@/components/Sidecomponent";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
interface apiinterface {
  id: string;
  songImage: string;
  artistName: string;
  songTitle: string;
  songUrl: string;
  albumName: string;
  releaseDate: string;
}
interface User{
  email:string,
  password:string,
  id:string,
  fullname:string,
  dob:string,
  gender:string
}
const Page = () => {
  const router = useRouter();
  const [currentuser, setcurrentuser] = useState<User>({
    email:'',
    password:"",
    id:'',
    fullname:"",
    dob:'',
    gender:""
  });
  const a = {
    textDecoration: "none",
    color: "white",
  };

  const col = {
    color: "black",
    textDecoration: "none",
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = localStorage.getItem("honeymusic_allusers");
      setcurrentuser(storedUsers ? JSON.parse(storedUsers) : []);
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem("honeymusic_currentuser");
    router.push("/");
  };
  const [api, setapi] = useState<apiinterface[]>([]);

  const fetchapi = async () => {
    const apifetch = await fetch(
      "https://musicapi-19wk.onrender.com/music/myAPI",
      {
        cache: "no-cache",
      }
    );
    const convertjs = await apifetch.json();
    setapi(convertjs);
  };
  useEffect(() => {
    fetchapi();
  }, []);

  const useparams = useParams();
  const { id } = useparams;
  const artiste = api.find((artist) => String(artist.id) === id);
  const audioref = useRef<HTMLAudioElement | null>(null);
  const play = () => {
    if (audioref.current) {
      audioref.current.play();
    }
  };
  const pause = () => {
    if (audioref.current) {
      audioref.current.pause();
    }
  };
  const stop = () => {
    if (audioref.current) {
      audioref.current.pause();
      audioref.current.currentTime = 0;
    }
  };

  return (
    <>
      <nav className="lg:p-[10px] lg:w-[100%] z-2 shadow fixed top-0 bg-[#000000] text-white text-[16px] font-bold">
        <ul className="flex decoration-0 list-none justify-around w-[100%]">
          <li>
            <Image
              src="/images/honeylogo.png"
              alt="Log"
              height={60}
              width={60}
              className="rounded-full"
            />
          </li>
          <li>
            <Link href="/playlist" style={a}>
              Dashboard
            </Link>
          </li>
          <li className="shadow">
            <input
              type="text"
              className="bg-[#2A2A2A] text-center rounded-3xl border border-amber-950 sm:none lg:w-[700px] lg:h-[50px]"
              placeholder="What do you want to play?"
            />
          </li>
          <li>
            <Link href="#" style={a}>
              Install App
            </Link>
          </li>
          {/* <li className="bg-pink-900 flex justify-center items-center text-white text-center font-bold rounded-full w-[50px] h-[50px]">
            <Link href="/login">
              {currentuser.fullname.slice(0, 1).toUpperCase()}
            </Link>
          </li> */}
          <li className='bg-pink-900 flex justify-center items-center text-white text-center font-bold rounded-full w-[50px] h-[50px]'>
  <Link href="/login">
    {currentuser?.fullname ? currentuser.fullname.slice(0, 1).toUpperCase() : "?"}
  </Link>
</li>

          <li>
            <Link href="/" style={a} onClick={logOut}>
              Log Out
            </Link>
          </li>
          <li className="bg-white text-[15px] text-black p-3 rounded-3xl">
            <Link href="#" style={col}>
              Explore Premium
            </Link>
          </li>
        </ul>
      </nav>
      <div className="grid w-full  shadow lg:grid-cols-12 bg-white lg:mt-25 lg:space-x-5">
        <div className="lg:col-span-3">
          <Sidecomponent />
        </div>
        <div className="lg:col-span-6">
          <div className="w-full">
            {
              <div className="flex space-x-0 h-[600px] ">
                <div className="sm:w-2/4 space-y-5 p-10">
                  {artiste?.songImage ? (
                    <Image
                      src={artiste.songImage}
                      alt=""
                      className="rounded-full"
                      width={350}
                      height={350}
                      unoptimized={true}
                    />
                  ) : (
                    <div>
                      <Image
                        src="/images/loading.png"
                        alt="Loading....."
                        width={60}
                        height={60}
                      />
                    </div>
                  )}
                  <p>
                    {artiste?.albumName ? <p>{artiste.albumName}</p> : <p></p>}
                  </p>
                  <p>
                    {artiste?.releaseDate ? (
                      <p>{artiste.releaseDate}</p>
                    ) : (
                      <p></p>
                    )}
                  </p>
                  <p>
                    {artiste?.songTitle ? <p>{artiste.songTitle}</p> : <p></p>}
                  </p>
                </div>
                <div className="w-2/4 shadow p-5 bg-amber-50 rounded-tr-[150px] rounded-bl-[150px]">
                  <h1 className="lg:mt-[140px] mt-[35px] lg:text-[60px] text-[20px]">
                    {artiste?.artistName}
                  </h1>
                  <audio src={artiste?.songUrl} ref={audioref}></audio>
                  <div className="flex lg:space-x-20 mt-20 ml-4">
                    <Image
                      src="/images/playicon.jpg"
                      alt=""
                      width={30}
                      height={30}
                      className="border border-green-600"
                      onClick={play}
                    />
                    <Image
                      src="/images/pauseicon.jpg"
                      alt=""
                      width={30}
                      height={30}
                      className="border border-green-600"
                      onClick={pause}
                    />
                    <Image
                      src="/images/stopicon.webp"
                      alt=""
                      width={30}
                      height={30}
                      className="border border-green-600"
                      onClick={stop}
                    />
                  </div>
                </div>
              </div>
            }
          </div>
          <audio
            src={artiste?.songUrl}
            controls
            loop
            className="w-[100%] lg:mt-40"
          />
        </div>
        <div className="lg:col-span-3">
          <Sidecomponent />
        </div>
      </div>
    </>
  );
};

export default Page;
