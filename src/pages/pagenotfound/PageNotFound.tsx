
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <div className='co  text-black'><iframe title='404-giphy' src="https://giphy.com/embed/YrBRYRDN4M5ryrNOND" width="480" height="480" frameBorder="0" className="giphy-embed rounded-full mx-auto mb-5" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Bounce-TV-yikes-whoops-my-bad-YrBRYRDN4M5ryrNOND" className='text-4xl'>404 - Page Not Found</a></p>
    <Link to="/">
    <p className='mt-4 hover:cursor-pointer hover:underline'>back to homepage</p>
    </Link>
    </div>
  )
}

export default PageNotFound