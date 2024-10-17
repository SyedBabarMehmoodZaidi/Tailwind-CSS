import React from 'react'
import Link from 'next/link'
const Servicepage = () => {
  return (
    <div>
      <h1>Service Page</h1>
      <ul>
        <li><Link href="/">Go To Home Page</Link></li>
        <li><Link href="/about">Go To About Page</Link></li>
        <li><Link href="/contact">Go To Contact Page</Link></li>
      </ul>
    </div>
  )
}

export default Servicepage
