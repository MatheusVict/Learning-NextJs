import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Coments = () => {

    const router = useRouter()

    const comentsid = router.query.comentsid;
    const todoid = router.query.todoid;

  return (
    <>
      <Link href={`/todos/${todoid}`}><a>Voltar</a></Link>
      <h1>Comentario: {comentsid}</h1>
      <p>Do to-do: {todoid}</p>
    </>
  )
}

export default Coments