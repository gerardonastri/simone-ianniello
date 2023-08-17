import React from 'react'
import './Projects.css'

import soundImg from '../../assets/images/sound img.avif'

const Projects = () => {

    const id = window.location.pathname.split('/')[2]
    
    const projects = [
        {
            title: "Lorem Ipsum - Ipsum",
            img: ""
        },
        {
            title: "Lorem Ipsum - Ipsum",
            img: ""
        },
        {
            title: "Lorem Ipsum - Ipsum",
            img: ""
        },
        {
            title: "Lorem Ipsum - Ipsum",
            img: ""
        },
        {
            title: "Lorem Ipsum - Ipsum",
            img: ""
        },
        {
            title: "Lorem Ipsum - Ipsum",
            img: ""
        }
    ]

  return (
    <div className='container'>
        {/* HOME CONTAINER  */}
        <main className="home__container">
            <h1>{id && id} Projects</h1>
        </main>

        {/* PROJECTS  */}
        <div className="projects__container">
           <div className="wrapper">
                {projects?.map(project => (
                    <a href={`/project/4934939`}>
                        <img src={soundImg} alt="img of the project" />
                        <span>{project.title}</span>
                    </a>
                ))}
           </div>
        </div>
    </div>
  )
}

export default Projects