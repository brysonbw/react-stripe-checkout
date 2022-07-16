import React from 'react'
import {FcCancel} from 'react-icons/fc'
import { Link } from 'react-router-dom'
type Props = {}

const Cancel = (props: Props) => {
  return (
   
        <div className=' w-9/12 m-auto flex flex-col items-center justify-center h-screen font-bold'>
           <div className='mb-5 text-2xl'>
           Purchase was canceled <FcCancel className='text-red-500 inline-block mb-[.2em]' /> 
            </div> 
            <Link className=' no-underline hover:underline' to="/">
            return to homepage
            </Link>
            </div>
            
   
  )
}

export default Cancel