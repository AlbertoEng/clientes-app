import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { FaRegFaceAngry, FaRegFaceGrinHearts, FaRegFaceMeh, FaRegFaceSadTear, FaRegFaceSmile, FaRegFaceSmileWink } from 'react-icons/fa6';


export const Pregunta = ({ pregunta, respuesta, handleRespuesta, id }) => {

  return (
    <div className='bg-[#CECECE] px-1 py-10 mb-3 rounded-md shadow-lg w-full md:w-1/2'>
        <p className='text-lg px-3 text-black font-black text-center mb-5'>{pregunta}</p>
        
        <div className='flex justify-around gap-1 '>
            <button onClick={()=>handleRespuesta(id, 0)} className={`${respuesta === 0 ? 'activado' : ''} flex justify-center min-w-14 font-semibold py-2 text-xs sm:text-sm bg-[#BEBEBE] text-black rounded-md`}><FaRegFaceAngry size={24} className='' /></button>
            <button onClick={()=>handleRespuesta(id, 1)} className={`${respuesta === 1 ? 'activado' : ''} flex justify-center min-w-14 font-semibold py-2 text-xs sm:text-sm bg-[#BEBEBE] text-black rounded-md`}><FaRegFaceSadTear size={24} className='' /></button>
            <button onClick={()=>handleRespuesta(id, 2)} className={`${respuesta === 2 ? 'activado' : ''} flex justify-center min-w-14 font-semibold py-2 text-xs sm:text-sm bg-[#BEBEBE] text-black rounded-md`}><FaRegFaceMeh size={24} className='' /></button>
            <button onClick={()=>handleRespuesta(id, 3)} className={`${respuesta === 3 ? 'activado' : ''} flex justify-center min-w-14 font-semibold py-2 text-xs sm:text-sm bg-[#BEBEBE] text-black rounded-md`}><FaRegFaceSmile size={24} className='' /></button>
            <button onClick={()=>handleRespuesta(id, 4)} className={`${respuesta === 4 ? 'activado' : ''} flex justify-center min-w-14 font-semibold py-2 text-xs sm:text-sm bg-[#BEBEBE] text-black rounded-md`}><FaRegFaceGrinHearts size={24} /></button>
        </div>
    </div>
  )
}
