import React from 'react'
import Link from 'next/link'
const HomePage = () => {

  return (
    
    <div className='bg-custom-bg bg-cover bg-center h-screen'>
      
      <ul className='mx-auto flex justify-between items-center h-14 bg-black text-white'>
        <li className='border-solid border-2 border-amber-300 rounded-lg ...'><Link href="/"> Home</Link></li>
        <li className="border-dashed border-2 border-amber-300 ... rounded-lg ..."><Link href="/components/about"> About</Link></li>
        <li className="border-dotted border-2 border-amber-300 ... rounded-lg ..."><Link href="/components/contact"> Contact</Link></li>
        <li className="border-double border-4 border-amber-300 ... rounded-lg ..."><Link href="/components/service"> Service</Link></li>
      </ul>
<br></br>

    <p className="border-double border-4 border-yello-600 ... rounded-lg ... border-amber-400 text-center py-20 text-7xl underline decoration-double ... bg-lime-950 text-white ">Welcome To My Landing Page</p>
    <br></br>
    <br></br>
    
    <p className="border-dotted border-2 border-black ... rounded-lg text-center py-10 text-3xl bg-yellow-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque optio commodi dolorem placeat porro sint itaque recusandae quam, aperiam, maxime iure doloremque quo soluta, asperiores rem. Alias, eum repellat.</p>
      <br></br>
      <br></br> 
      <button className='justify-items-center ... ms-2 bg-red-800 hover:bg-red-600 ... p-2 border-solid border-2 border-black ... rounded-lg text-center bg-green-800 text-white '>Get Started</button>
      <br></br>
      <br></br>
      <br></br>
      
     <footer className='border-solid border-2 border-black ... text-center bg-black text-white  '>&copy; 2024 Landing Page. All Rights Reserved.</footer> 
      
      </div>


 )
}

export default HomePage
