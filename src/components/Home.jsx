import React from 'react'
import Categories from './Categories'
import Banner from './Banner'
const Home = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl m-auto flex justify-between'>
      <Categories/>
      <Banner/>
      </div>
    </div>
  )
}

export default Home
