import React from 'react'
import './Project.css'
import soundProjectImg from '../../assets/images/sound-project-img1.avif'

const Project = () => {
  return (
    <div className='container project'>
        {/* HOME CONTAINER  */}
        <main className="home__container">
            <h1>Title of the project</h1>
        </main>

        <div className="project__container">
            <div className="wrapper">
                <img src={soundProjectImg}alt="img of the project" />
                <h2>How was it realized</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam praesentium, fuga molestiae explicabo modi facere id, rem repudiandae magni unde porro minima cupiditate aliquam quo placeat accusamus consectetur ad ipsa.</p>
                <h2>Who collaborated</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse vero sint obcaecati illo, temporibus suscipit et error enim rem tempora nesciunt dolor. Magnam a consectetur voluptatibus itaque distinctio iste.</p>
                <img src={soundProjectImg}alt="img secondary of the project" />
                <h2>The experience</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, sapiente quasi sunt veniam voluptates excepturi inventore velit voluptatibus, eos numquam veritatis. Molestiae quidem earum hic at maiores illo nemo enim?</p>
            </div>
        </div>
    </div>
  )
}

export default Project