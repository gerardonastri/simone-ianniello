import React from 'react'
import './Home.css'

import soundSrc from '../../assets/sound gif.mp4'

const Home = () => {
  return (
    <div className='container'>
      {/* HOME CONTAINER */}
        <main className="home__container">
          {/* <video src={soundSrc} loop autoPlay muted type="video/mp4"></video> */}
          <div className="home__container-text">
            <h1>Simone Ianniello</h1>
            <h3>Sound Designer - Sound Engineer</h3>
          </div>
        </main>

      {/* HOME IMAGES */}
      <section className="images">
         <div className="wrapper">
            <img src="https://images.pexels.com/photos/16955442/pexels-photo-16955442/free-photo-of-display-biglia-museo-sculture.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="img of a project" />
            <img src="https://images.pexels.com/photos/8647070/pexels-photo-8647070.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="img of a project" />
            <img src="https://images.pexels.com/photos/16646219/pexels-photo-16646219/free-photo-of-case-francia-parigi-strada.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="img of a project" />
            <img src="https://images.pexels.com/photos/17814304/pexels-photo-17814304/free-photo-of-nebbia.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="img of a project" />
         </div>
      </section>
    </div>
  )
}

export default Home