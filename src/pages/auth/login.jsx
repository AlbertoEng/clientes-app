'use strict'
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const imageLoader = () => {
  return `https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png`
}


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState(false);

  const router = useRouter();

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://engtech-8cb10-default-rtdb.firebaseio.com/users/.json')
      .then(response => response.json())
      .then(data => {
        // Handle the data here
        console.log(data)
        setUsers(data);
      })
      .catch(error => {
        // Handle the error here
        console.error(error);
      });
  }
  ,[])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { leonardo, romina } = users;
    if(email === leonardo.email && password === leonardo.password) {
      localStorage.setItem('user', JSON.stringify(leonardo.email));
      router.push('/', undefined, { shallow: true });
    } else if(email === romina.email && password === romina.password) {
      localStorage.setItem('user', JSON.stringify(romina.email));
      router.push('/', undefined, { shallow: true });
    } else {
      setAlerta(true);
    }
  }

  useEffect(()=>{
    const alerta = setTimeout(()=>{
      setAlerta(false);
    }, 3000);
    return ()=>clearTimeout(alerta);
  }
  ,[alerta])

  return (
      <main className={`${inter.className}  flex flex-col max-h-full`}>
        <div className="flex p-5 mt-5 w-full  justify-center">
          <Image loader={imageLoader} width={100} height={100} className="max-w-12" src="https://static.wixstatic.com/media/41433d_8d61c286bd1d4ee7bd1ef764a4254ef2~mv2.png/v1/crop/x_0,y_3,w_687,h_1049/fill/w_283,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Vertical.png" alt="logo camino a comala" /> 
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center px-3">
          <div className="flex justify-center w-full py-3" >
            <input onChange={handleEmailChange} value={email} type="email" name="usuario"  className="w-full md:w-1/2 xl:w-1/3 p-3 rounded-sm font-bold shadow-sm" placeholder="Tu email"/>
          </div>
          <div className="flex justify-center w-full py-3" >
            <input onChange={handlePasswordChange} value={password} type="password" name="password"  className="w-full md:w-1/2 xl:w-1/3 p-3 rounded-sm font-bold shadow-sm" placeholder="Tu Contraseña"/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="p-3 mt-5 w-full md:w-1/4 text-white font-bold bg-blue-500 rounded-sm">Entrar</button>
          </div>
        </form>
        {
          alerta && 
          (<div className="flex  justify-center mt-10 rounded-md p-3" >
            <p className="text-center p-5 bg-red-300 w-full md:w-1/2 text-red-600 shadow-md rounded">Usuario o contraseña incorrectos</p>
          </div>)
          
        }
      </main>
  );
}