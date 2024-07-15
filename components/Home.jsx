"use client"

import React, {useState, useEffect} from 'react'
import SearchBar from './Headers/SearchBar'
import MusicSection from './MusicSection'
import axios from 'axios'

var backgrounds = [
    "https://w0.peakpx.com/wallpaper/476/955/HD-wallpaper-colorful-lines-abstract-art-dark-backgrounds-creative-lines-background-with-lines.jpg"
]

export default function Home() {
    const [songs, setSongs] = useState([])
    useEffect(() => {
      axios('/api/search').then(res=>setSongs(res.data))
    }, [])

    return (
        <section className="flex flex-col justify-center items-center mx-auto relative place-items-center min-h-screen bg-black/60 overflow-hidden pb-20">
            <div className='filter blur-[10px] absolute inset-0 w-full -z-10'
                style={{ backgroundImage: `url('${backgrounds[0]}')`}}
            >
            </div>
            <div className='max-w-5xl mb-5 my-8'>
                <div className='my-6 mx-auto w-fit text-center select-none'>
                    <p className="font-fancy text-4xl text-center sm:text-5xl md:text-3xl font-bold text-gray-200 -mb-5">Welcome to</p>
                    <h1 className="font-fancy text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">Harmonika</h1>
                    <p className='font-bold text-gray-400 my-2'>Made with <span className='text-xl text-[#e25555]'>&#9829;</span> by <a className='underline' target='_blank' href='https://shreyansh-gupta.vercel.app/'>Shreyansh Gupta</a></p>
                </div>
                <div className='mt-6 mb-12'>
                <SearchBar setSongs = {setSongs}/>
                </div>
                <MusicSection songs = {songs} />
            </div>
        </section>


    )
}
