"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("unknown")
  useEffect(() => {
    axios('/api').then(res=>setData(res.data.title))
  }, [])
  
  return (
   <main>
    {data}
   </main>
  );
}
