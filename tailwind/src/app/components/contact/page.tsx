import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        <li><Link href="/">Go To Home Page</Link></li>
        <li><Link href="/about">Go To About Page</Link></li>
        <li><Link href="/service">Go To Service Page</Link></li>
      </ul>
    </div>
  )
}

export default ContactPage
