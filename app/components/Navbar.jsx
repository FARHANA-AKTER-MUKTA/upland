import Link from 'next/link'
import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <div>

        <Container>
        <ul  className='flex justify-center bg-pink-500 font-bold gap-6'>
            <li>
                <Link href='/'>UI screens
                </Link>
            </li>
            <li>
                <Link href='/'>UI screens
                </Link>
            </li>
            <li>
                <Link href='/'>UI screens
                </Link>
            </li>
            <li>
                <Link href='/'>UI screens
                </Link>
            </li>
        </ul>
        </Container>
    </div>
  )
}

export default Navbar