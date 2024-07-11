import React from 'react'
import MusicDetailCard from './Cards/MusicDetailCard'
import SearchBar from './Headers/SearchBar'

export default function Home() {
    return (
        <section className="flex flex-col justify-center items-center mx-auto relative place-items-center min-h-screen bg-black/60 overflow-hidden pb-20">
            <div className='filter blur-[10px] transform scale-125 absolute inset-0 -z-10'
                style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/02/23/60/54/1000_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg')", backgroundSize: 'cover' }}
            >
            </div>
            <div className='max-w-5xl mb-5 my-8'>
                <div className='my-6 mx-auto w-fit text-center'>
                    <p className="font-fancy text-4xl text-center sm:text-5xl md:text-3xl font-bold text-gray-200 -mb-5">Welcome to</p>
                    <h1 className="font-fancy text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">Harmonika</h1>
                    <p className='font-bold text-gray-400 my-2'>Made with <span className='text-xl text-[#e25555]'>&#9829;</span> by Shreyansh Gupta</p>
                </div>
                <div className='mt-6 mb-12'>
                <SearchBar />
                </div>
                <section className="flex flex-wrap gap-x-3 gap-y-6 justify-center">
                    <MusicDetailCard />
                    <MusicDetailCard />
                    <MusicDetailCard />
                    <MusicDetailCard />
                    <MusicDetailCard />
                    <MusicDetailCard />
                    <MusicDetailCard />
                    <MusicDetailCard />
                </section>
            </div>
        </section>


    )
}
