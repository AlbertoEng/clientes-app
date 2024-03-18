'use strict'
import React from 'react'
import { Inter } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const inter = Inter({ subsets: ["latin"] });

const imageLoader = () => {
    return `https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png`
}

const gracias = () => {
    return (
        <main className={`${inter.className} bbg-[#B6B6B6]`}>
            <header className="bg-zinc-800 sticky top-0">
                <div className="flex items-center">
                    <div className="flex p-5">
                    <Image loader={imageLoader}  unoptimized width={60} height={60} className="max-w-12" src="https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png" alt="logo camino a comala" /> 
                    </div>
                    <div className="flex flex-col" >
                        <h1 className="text-xl font-bold text-slate-100">Camino a Comala</h1>
                        <h2 className="text-md text-slate-100">Manzanillo</h2>
                    </div>
                </div>
            </header>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl  font-bold my-5 text-center mt-10">Gracias por tu tiempo</h1>
                <p className=" text-center text-lg mt-5">Tu opinión es muy importante para nosotros</p>
            </div> 

            <footer className="bg-zinc-900 py-14 absolute bottom-0 left-0 right-0">
                <p className="text-slate-200 text-center text-sm">Siguenos en nuestras redes sociales</p>
                <div className="w-full flex justify-center gap-3 my-3">
                    <Link href={'https://www.facebook.com/CaminoaComala/'}>
                        <FaFacebook size={34} className="text-white" />
                    </Link>
                    <Link href={'https://www.instagram.com/caminoacomala/'}>
                        <FaInstagram size={34} className="text-white" />
                    </Link>
                </div>
                <a href="http://WWW.CAMINOACOMALA.COM"><p className="text-slate-200 text-center font-bold text-md my-3">WWW.CAMINOACOMALA.COM</p></a>
            </footer>
        </main>
    )
}

export default gracias