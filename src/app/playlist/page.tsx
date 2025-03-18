"use client";
import Sidecomponent from "@/components/Sidecomponent";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface apiinterface {
  id: string;
  songImage: string;
  artistName: string;
  songTitle: string;
  songUrl: string;
  albumName: string;
  releaseDate: string;
}

interface User {
  email: string;
  password: string;
  id: string;
  fullname: string;
  dob: string;
  gender: string;
}
const Page = () => {
  const router = useRouter();
  const [currentuser, setcurrentuser] = useState<User | null>(null);
  const a = {
    textDecoration: "none",
    color: "white",
  };
  const col = {
    color: "black",
    textDecoration: "none",
  };
  useEffect(() => {
    const storedUsers = localStorage.getItem("honeymusic_currentuser");
    if (storedUsers) {
      setcurrentuser(JSON.parse(storedUsers));
    } else {
      setcurrentuser(null);
    }
  }, []);

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
    console.log(currentuser);

    fetchapi();
  }, [currentuser]);

  const logOut = () => {
    localStorage.removeItem("honeymusic_currentuser");
    router.push("/");
  };
  // const useparams=useParams()
  // const {id}=useparams
  // const artiste=api.find((artist)=>artist.id==id)
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
            <Link href="/" style={a}>
              Home
            </Link>
          </li>
          <li className="shadow">
            <input
              type="text"
              className=" text-center bg-[#2A2A2A] rounded-3xl border border-amber-950 sm:none lg:w-[700px] lg:h-[50px]"
              placeholder="What do you want to play?"
            />
          </li>
          <li>
            <Link href="#" style={a}>
              Install App
            </Link>
          </li>
          {/* <li className='bg-pink-900 flex justify-center items-center text-white text-center font-bold rounded-full w-[50px] h-[50px]'>
          <Link href="/login">{currentuser.fullname.slice(0,1).toUpperCase()}</Link> */}
          {/* </li> */}
          {/* <li className='bg-pink-900 flex justify-center items-center text-white text-center font-bold rounded-full w-[50px] h-[50px]'>
  <Link href="/login">
    {currentuser ? currentuser.fullname.slice(0, 1).toUpperCase() : "?"}
  </Link>
</li> */}
          <li className="bg-pink-900 flex justify-center items-center text-white text-center font-bold rounded-full w-[50px] h-[50px]">
            <Link href="/login">
              {currentuser?.fullname
                ? currentuser.fullname.slice(0, 1).toUpperCase()
                : "?"}
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

      {/* <div  className="grid w-full  mt-18 shadow lg:grid-cols-12 bg-[#000000]">
<div className="lg:col-span-3">
<Sidecomponent/>
</div>
<div className="lg:col-span-9">
<Artistecomponent/>
</div>
    </div> */}

      <div className="grid w-full mt-18 shadow lg:grid-cols-12 bg-black">
        <div className="lg:col-span-3">
          <Sidecomponent />
        </div>
        <div className="lg:col-span-9">
          <div>
            <h1 className="text-white m-10 font-bold">Recommended for you</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   p-4 sm:space-y-5 md:space-y-0  lg:space-y-5  space-x-15 shadow  bg-[#C3C3C3] opacity-90  rounded-3xl">
            {api.map((music) => (
              <div
                key={music.id}
                className="ms-10 text-[20px] w-[80%]  md:bg-[#949192] opacity-90 md:w-[80%] my-15 b shadow rounded-3xl p-4"
              >
                {!music.id ? (
                  <div>
                    <Image
                      src="/images/loading.png"
                      alt="Loading....."
                      width={60}
                      height={60}
                    />
                  </div>
                ) : (
                  <div>
                    <Link href={`/playlist/${music.id}`} className="">
                      <div className=" mx-auto p-10 space-y-8 rounded-3xl shadow relative w-35 h-35">
                        <Image
                          alt="Artiste Image"
                          src={music.songImage}
                          unoptimized={true}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <p className="text-dark font-bold text-[18px] mt-5 mb-3">
                        {music.songTitle}
                      </p>
                      {/* <p className='text-white mb-5'>{music.albumName}</p> */}

                      <Image
                        src="/images/playicon.jpg"
                        alt="play "
                        width={30}
                        height={30}
                        className="rounded-full "
                      />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
