import React from 'react'

export default function Error({message}) {
    return (
        <div className='flex flex-col items-center justify-center space-y-4'>
            <p className= ' text-center bg-[#303030] p-5 rounded-lg font-bold capitalize md:uppercase text-lg md:text-2xl   text-white w-72 md:w-96'> {message}</p>
            <img className='rounded-xl ' alt="error" src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"/>
        </div>
      )
    }
    