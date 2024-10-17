import Link from 'next/link'
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <li><Link href="/">Go To Home Page</Link></li>
        <li><Link href="/contact">Go To Contact Page</Link></li>
        <li><Link href="/service">Go To Service Page</Link></li>
      </ul>
    </div>
  )
}

export default Aboutpage;
