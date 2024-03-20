'use strict'
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const imageLoader = () => {
  return `https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png`
}


export default function Home() {
  
  // verificar en el local storage si existe un user con email
  // si no existe redirigir a login

  const router = useRouter();

  useEffect(()=>{
    if(!localStorage.getItem('user')) {
      router.push('/auth/login');
    }
  },[])


  return (
      <main className={`${inter.className}  flex flex-col max-h-full`}>
        <h1 className="text-3xl text-center mt-5 font-bold">Dashboard Camino a Comala</h1>
        <h1 className="text-xl text-center mt-5 ">Hola, Leonardo y/o Romina</h1>
      </main>
  );
}
