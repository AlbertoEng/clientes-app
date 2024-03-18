'use strict'
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const imageLoader = () => {
  return `https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png`
}


export default function Home() {

  return (
      <main className={`${inter.className}  flex flex-col max-h-full`}>
        <div className="flex p-5 mt-5 w-full  justify-center">
        <Image loader={imageLoader} priority={true} unoptimized width={60} height={60} className="max-w-12" src="https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png" alt="logo camino a comala" /> 
        </div>
        <form className="flex flex-col justify-center px-3">
          <div className="flex justify-center w-full py-3" >
            <input type="email" name="usuario"  className="w-full md:w-1/2 xl:w-1/3 p-3 rounded-sm font-bold shadow-sm" placeholder="Tu email"/>
          </div>
          <div className="flex justify-center w-full py-3" >
            <input type="password" name="usuario"  className="w-full md:w-1/2 xl:w-1/3 p-3 rounded-sm font-bold shadow-sm" placeholder="Tu Contraseña"/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="p-3 mt-5 w-full md:w-1/4 text-white font-bold bg-blue-500 rounded-sm">Entrar</button>
          </div>
        </form>
      </main>
  );
}
