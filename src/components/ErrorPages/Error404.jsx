import React from 'react'
import { Link } from 'react-router-dom'
import './Errors.css'

const Error404 = () => {
  return (
	<div className='Error'>
		<div className="text">
		<h1 className='error_404'>ERROR 404</h1>
		<h1>This page does not exist</h1>
		<h1>Return to the <Link to='/'>home page</Link></h1>
		</div>
	</div>
  )
}

export default Error404