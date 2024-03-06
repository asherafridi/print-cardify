import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      1. <Link to="front-back-card" >Front Back Card</Link>
    <br />
        2. <Link to="passport-photo" >Passport Photo</Link>
    </div>
  )
}

export default Home