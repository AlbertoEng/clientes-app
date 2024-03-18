'use strict'
import Image from "next/image";
import { Inter } from "next/font/google";
import { Pregunta } from "../../components/Pregunta";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Sugerencia } from "../../components/Sugerencia";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });

const imageLoader = () => {
    return `https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png`
}

export default function MazanilloPage() {
  const [preguntas, setPreguntas]  = useState();
  const [respuestas, setRespuestas] = useState();
  const router = useRouter();



  useEffect(()=>{
    
    // revisando local storage
    if(localStorage.getItem('encuestaCaminoAComala')) {
      router.push('/gracias');
    };

    async function getPreguntas(){
      const listPreguntas = await fetch('https://engtech-8cb10-default-rtdb.firebaseio.com/preguntas/.json');
      const result = await listPreguntas.json();
      const respuestas = Array(result.length).fill(null);
      setRespuestas(respuestas);
      setPreguntas(result);
    }
    getPreguntas();
  },[])

  
  function handleRespuesta(index, valor) {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = valor;
    setRespuestas(newRespuestas);
  }

  const enviandoRespuesta = async ()=>{
    // revisando local storage
    if(localStorage.getItem('encuestaCaminoAComala')) {
      router.push('/gracias');
    };

    if(respuestas.includes(null)) return;
    const envio = {
      sucursal: 'manzanillo',
      preguntas: preguntas.map((preg, index)=>{
        return {
          pregunta: preg.texto,
          respuesta: respuestas[index]
        }
      })
    };
    const envioRespuestas = await fetch('https://engtech-8cb10-default-rtdb.firebaseio.com/respuestas/.json', {
      method: 'POST',
      body: JSON.stringify(envio)
    });
    if(envioRespuestas.ok){
      localStorage.setItem('encuestaCaminoAComala', 'true');
      router.push('/gracias');
    }


  }


  return (
    <main className={`${inter.className} bbg-[#B6B6B6]`}>
      <header className="bg-zinc-800 sticky top-0">
        <div className="flex items-center">
          <div className="flex p-5">
          <Image loader={imageLoader} unoptimized width={60} height={60} className="max-w-12" src="https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png" alt="logo camino a comala" /> 
          </div>
          <div className="flex flex-col" >
            <h1 className="text-xl font-bold text-slate-100">Camino a Comala</h1>
            <h2 className="text-md text-slate-100">Manzanillo</h2>
          </div>
        </div>
      </header>
      <div className=" px-3 py-5">
        <p className="text-center my-5 w-full ">¿Nos Ayudas contestando unas preguntas?</p>
        <div className="w-full  flex flex-col items-center ">
          {
            preguntas ? preguntas.map(( preg, index )=>{
              return <Pregunta key={index} id={index} pregunta={preg.texto} respuesta={respuestas[index]} handleRespuesta={handleRespuesta}  />
            }) : null
          }  
        </div>
      
      </div>
      <Sugerencia enviarRespuesta={enviandoRespuesta} />
      <footer className="bg-zinc-900 py-14"> 
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
  );
}