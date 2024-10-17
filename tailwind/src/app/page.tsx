import React from 'react'
import Link from 'next/link'
const Homepage = () => {

  return (
    <div>
      <h1>LOGO</h1>
      <ul>
        <li><Link href="/"> Home</Link></li>
        <li><Link href="/about"> About</Link></li>
        <li><Link href="/contact"> Contact</Link></li>
        <li><Link href="/service"> Service</Link></li>
      </ul>

    </div>
  )
}

export default Homepage
