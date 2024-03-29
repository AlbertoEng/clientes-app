import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const Comments = () => {
  const router = useRouter();
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    const fetchDataComments = async(  )=>{
      const comments = await fetch('https://engtech-8cb10-default-rtdb.firebaseio.com/respuestas/.json');
      const result = await comments.json();
      if(result === null || result === undefined) {
        setComments([]);
        return;
      };
      // transformando el objeto a arreglo 
      const transformedComments = Object.keys(result).map(key => ({ id: key, comment: result[key].comentario }));
      setComments(transformedComments);

    }
    fetchDataComments();
  }, [])


  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>Comentarios Camino a Comala Mazanillo</h1>
      <div className='flex justify-end'>
        <button onClick={()=>router.push('/')} className='p-2 rounded font-semibold bg-zinc-800 text-white'>Regresar</button>
      </div>
      <h2 className='mt-5 text-xl'>Lista de Comentarios: </h2>
      {
        comments.length === 0 
        ? <p className=''>No hay comentarios</p>  
        : comments.map(( comment )=>{
          return (
            <div key={comment.id} className='p-3 bg-zinc-200 my-2 rounded'>
              <p className='py-3 px-3'>{comment.comment}</p>
              <div className='flex justify-end'>
                { new Date().toLocaleDateString()}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Comments