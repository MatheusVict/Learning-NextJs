import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Todos.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()
    
    return {
        props: { todos },
    }
}

const todos = ({ todos }) => {
  return (
    <>
        <h1>To-do List</h1>
        <ul className={styles.todolist}>
            {todos.map((todo) => {
                return <li key={todo.id}>{todo.title} <Link href={`/todos/${todo.id}`}><a>Ver mais</a></Link></li>
            })}
        </ul>
    </>
  )
}

export default todos