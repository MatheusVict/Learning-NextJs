import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Todo = () => {

    const router = useRouter()

    const todoid = router.query.todoid

  return (
    <>
        <Link href='/todos'>
            <a>Voltar</a>
        </Link>
        <h1>{todoid}</h1>
        <p>Cometário: Arroz <Link href={`/todos/${todoid}/coments/1`}><a>Detalhes</a></Link></p>
        <p>Cometário: Arroz <Link href={`/todos/${todoid}/coments/2`}><a>Detalhes</a></Link></p>
        <p>Cometário: Arroz <Link href={`/todos/${todoid}/coments/3`}><a>Detalhes</a></Link></p>
    </>
  )
}

export default Todo