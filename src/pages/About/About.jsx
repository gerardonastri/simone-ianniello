import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='container'>
      {/* HOME CONTAINER  */}
      <main className="home__container">
        <h1>About</h1>
      </main>

      {/* ABOUT CONTAINER  */}
      <div className="about__container">
          <div className="wrapper">
            <div className="about__left">
              <img src="https://images.pexels.com/photos/15537703/pexels-photo-15537703/free-photo-of-sporco-edificio-costruzione-modello.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="simon" />
            </div>
            <div className="about__right">
              <h1>Chi sono</h1>
              <p>Hello eveyone, my name is Simone Ianniello. I'm an audio engineering student at the Avellino Conservatory (based in Italy). My Journey started at the age of 17 (in the 2022), when i used for the first time a mixer. Since that day on, I became passionate about audio engineering.</p>
              <p>Over the years, I gained experience working at various service providers and venues as a sound technician. In addition, I have recorded and mixed the podcast for the "Astarbene crew" web radio.</p>
              <p>In addition, I have recorded and mixed the podcast for the "Astarbene crew" web radio called "Si dabbi chi può". At the moment i'm starting to record and design all the types of sounds (Ambient,fight,weapons and Synthseised sounds) and i hope to join as soon as possible to a video game studio to create sounds for video games.</p>
              <div className="about__right-link">
                <a href="#contacts">Contatti</a>
              </div>
            </div>
          </div>
      </div>

      {/* ABOUT PROJECTS  */}
      <section className="images projects">
          <h1>Progetti</h1>
          <div className="wrapper">
              <img src="https://images.pexels.com/photos/16955442/pexels-photo-16955442/free-photo-of-display-biglia-museo-sculture.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/8647070/pexels-photo-8647070.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/16646219/pexels-photo-16646219/free-photo-of-case-francia-parigi-strada.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/17814304/pexels-photo-17814304/free-photo-of-nebbia.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/16106259/pexels-photo-16106259/free-photo-of-ghiacciaio-piedras-blancas.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/13163793/pexels-photo-13163793.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/17404042/pexels-photo-17404042/free-photo-of-legno-scale-foresta-scalini.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
              <img src="https://images.pexels.com/photos/17693471/pexels-photo-17693471/free-photo-of-natura-pesce-subacqueo-vita-marina.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="project of simon" />
          </div>
      </section>

      {/* CONTATTI  */}
      <div className="about__contacts" id="contacts">
          <h1>Contatti</h1>
         <div className="wrapper">
          <div className="about__contacts-item">
              <i className="fa-solid fa-phone"></i>
              <span>+123456789</span>
          </div>
          <div className="about__contacts-item">
              <i className="fa-solid fa-envelope"></i>
              <span>simon.audio24@gmail.com</span>
          </div>
          <div className="about__contacts-item">
              <i className="fa-brands fa-instagram"></i>
              <span>simon_audio</span>
          </div>
         </div>
      </div>
    </div>
  )
}

export default About