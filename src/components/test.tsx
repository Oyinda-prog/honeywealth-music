'use client'
import Sidecomponent from '@/components/Sidecomponent'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface ApiInterface {
    id: string;
    songImage: string;
    artistName: string;
    songTitle: string;
    songUrl: string;
    albumName: string;
    releaseDate: string;
}

const Page = () => {
    const { id } = useParams();
    const artistId = Array.isArray(id) ? id[0] : id;

    const [api, setApi] = useState<ApiInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!artistId) return;

        const fetchApi = async () => {
            try {
                const response = await fetch('https://musicapi-19wk.onrender.com/music/myAPI', { cache: 'no-cache' });
                const data = await response.json();
                
                console.log("Fetched API Data:", data); // ✅ Debugging API response
                
                if (Array.isArray(data)) {
                    setApi(data);
                } else {
                    console.error("API response is not an array:", data);
                }
            } catch (error) {
                console.error('Error fetching API:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [artistId]);

    // ✅ Debugging
    console.log("Artist ID from useParams:", `"${artistId}"`);

    // ✅ Ensure artistId and artist.id are strings before comparing
    const artiste = api.find((artist) => {
        const artistIdStr = String(artist.id).trim().toLowerCase();
        const paramIdStr = String(artistId).trim().toLowerCase();
        console.log(`Comparing: "${artistIdStr}" === "${paramIdStr}"`);
        return artistIdStr === paramIdStr;
    });

    console.log("Matched Artist:", artiste || "No match found");

    return (
        <>
            <div className="grid w-full shadow lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <Sidecomponent />
                </div>
                <div className="lg:col-span-9">
                    <div>
                        <h1 className="">Recommended for you</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 space-y-5 sm:space-y-5 md:space-y-0 lg:space-y-0">
                        {loading ? (
                            <p className="text-center text-gray-500">Loading...</p>
                        ) : artiste ? (
                            <p className="text-center">{artiste.songTitle}</p>
                        ) : (
                            <p className="text-center text-red-500">No artist found</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
