import Link from 'next/link'
import React from 'react'

const NotFOund = () => {
  return (
    <>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <Link href='/'><a>Home</a></Link>
    </>
  )
}

export default NotFOund