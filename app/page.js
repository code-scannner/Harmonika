"use client"
import { useState } from "react";
import Main from '@/components/Home'

export default function Home() {
  const [curr, setCurr] = useState('')
  return (
    <main className='relative'>
      <Main />
      {/* {curr.length == 0 && <section className="fixed right-0 z-10 border border-solid border-gray-700 rounded-s-md">
        {/* <button onClick={()=>setCurr('')} className="bg-gray text-white absolute -left-2 -top-2">x</button> */}
        {/* <iframe className="rounded-s-md" width={250} height={141} src="https://www.youtube.com/embed/v4h5iPlxj0c?si=Xm4XXTqzJylS1fvY&controls=0&autoplay=true" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> */}
      {/* </section>} */}
    </main>
  );
}
