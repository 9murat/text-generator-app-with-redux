import React from 'react'

export default function Header() {
    return (
        <div className=' sticky top-0 w-full bg-[#222222] '>
         <div className='container max-w-5xl h-24 flex items-center justify-center'>
          <h2 className='text-2xl text-center md:text-start md:text-3xl lg:text-4xl font-bold text-white tracking-[.1em] capitalize'>React sample text generator app</h2>
    
         
        </div>
        <div className='container max-w-5xl flex items-center justify-center'>
        <p className='w-[300px] md:w-[600px] lg:w-[900px] rounded-lg font-bold text-white border'></p>
        </div>
      
        </div>
      )
    }
