"use client"
import { createYoutubePoster, shorten } from '@/helper/Transform'
import React from 'react'
import { motion } from 'framer-motion'
import CustomImage from '../Custom/CustomImage'
export default function MusicDetailCard({ song, delay }) {
    return (
        <motion.div
            key={song.download_link}
            transition={{ duration: 0.4, delay: 0.1 * delay }}
            initial={{ opacity: 0, translateY: '12px' }}
            animate={{ opacity: 1, translateY: '0' }}
            className='shadow-lg relative hover:shadow-xl min-h-full'>

            <div className='absolute -z-10 inset-0 transform scale-[1.01] rounded-md bg-gradient-to-br from-zinc-500 via-zinc-900/80 to-zinc-500 transition-all'></div>
            <div className="flex flex-col p-2.5 h-full rounded-md overflow-hidden outline-none bg-zinc-900/80 hover:bg-zinc-900/95">
                <div className="group relative">
                    <CustomImage className="block rounded h-28 w-18"
                        src={createYoutubePoster(song.download_link)}
                        alt={song.title}
                        fallbackSrc="musicnote.png"
                    />

                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                        <a href={song.download_link} target='_blank' className="relative top-2 group-hover:top-0 hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={40} height={40} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 49 49" xmlSpace="preserve">
                                <g>
                                    <g>
                                        <path d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512    c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744    C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z" />
                                        <path d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229    c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113    c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex grow-[1] justify-between flex-col my-2 text-sm relative">
                    <h3 className="text-white leading-tight mb-1 font-semibold" title={song.title}>
                        <span>{shorten(song.title, 16)}</span>
                    </h3>
                    <div className='text-xs flex justify-between'>
                    {/* <button type="button" className="px-1 py-1 text-[0.6rem] font-medium text-center text-white rounded-md bg-blue-600 hover:bg-blue-700">
                        recommend</button> */}
                        <p className="text-gray-400">{song.year}</p>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
