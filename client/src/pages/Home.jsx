import React from 'react'
import Header from '../components/Header'
 

const homePicture = new URL("../assets/images/home.PNG", import.meta.url)

function Home() {
  return (
    <section className='main-container'>
      <Header />
      <div className='background_image'>
        <img src={homePicture} />
      </div>     
    </section>
  )
}

export default Home