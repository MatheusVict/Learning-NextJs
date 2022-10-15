import Link from 'next/link'
import React from 'react'

export async function getStaticProps(context) {

  const { params } = context;

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`)

  const todo = await data.json();

  return {
    props: { todo }
  }



}

export async function getStaticPaths() {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  
  const data = await response.json();

  const paths = data.map((todo) => {

    return {
      params: {
        todoid: `${todo.id}`
      }
    }
  })

  return { paths, fallback: false }
}

const Todo = ({ todo }) => {
  return (
    <>
        <Link href='/todos'>
            <a>Voltar</a>
        </Link>
        <h1>ID: {todo.id}</h1>
        <h3>{todo.title}</h3>
        <p>Cometário: Arroz <Link href={`/todos/${todo. id}/coments/1`}><a>Detalhes</a></Link></p>
        <p>Cometário: Arroz <Link href={`/todos/${todo.id}/coments/2`}><a>Detalhes</a></Link></p>
        <p>Cometário: Arroz <Link href={`/todos/${todo.id}/coments/3`}><a>Detalhes</a></Link></p>
    </>
  )
}

export default Todo