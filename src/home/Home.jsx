import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Link to="front-back-card" >Front Back Card</Link>
        <Link to="passport-photo" >Passport Photo</Link>
    </div>
  )
}

export default Home