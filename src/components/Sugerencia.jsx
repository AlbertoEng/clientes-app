import { useRef } from 'react'

export const Sugerencia = ({ enviarRespuesta }) => {

    const refComentario = useRef('');

    const handleChange = ( ev )=>{
        refComentario.current = ev.target.value
    }
    return (
        <div className="flex flex-col justify-center mt-20 p-3">
            <p className="text-center mb-2 text-lg">¿Que bebida o platillo te gustaria ver en nuestro menú?</p>
            <div className="flex justify-center">
                <input  ref={refComentario} onChange={handleChange} className="p-3 w-full xl:w-3/4" type="text" name="sugerencia" id="" placeholder="Escribir sugerencia aqui" />
            </div>
            <div className="flex justify-center">
                <button onClick={()=>enviarRespuesta(refComentario.current)} className='p-3 bg-blue-500 text-slate-200 font-semibold rounded-md min-w-32 my-3 w-full md:w-1/4 '>Enviar Respuestas</button>
            </div>
        </div>
    )
}
