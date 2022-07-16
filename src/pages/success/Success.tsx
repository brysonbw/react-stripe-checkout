import React from 'react'
import {FcCheckmark} from 'react-icons/fc'
import { Link } from 'react-router-dom'

type Props = {}

const Success = (props: Props) => {
  return (
    <div className=' w-9/12 m-auto flex flex-col items-center justify-center h-screen font-bold'>
           <div className='mb-5 text-2xl'>
           Purchase was successful <FcCheckmark className='text-green-500 inline-block mb-[.2em]' /> 
            </div> 
            <div className='mb-5'>
           You've unlocked the source code: <p className='inline-block'><a href='https://github.com/brysonbw/react-stripe-checkout' className='underline hover:no-underline hover:cursor-pointer'>GitHub Repo</a></p>
            </div> 
            <Link className=' no-underline hover:underline' to="/">
            return to homepage
            </Link>
            </div>
  )
}

export default Success