import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {


  const [showDropdown, setShowDropdown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="navbar">
      <div className="wrapper">
        <h1>Simon</h1>
        <div className={`navbar__links ${isActive && "active"}`}>
          <a href="/">Home</a>
          <div className="navbar__dropdown">
            <span id="dropdown" onMouseOver={() => setShowDropdown(true)}>Projects</span>
            <div className={`navbar__dropdown-container ${showDropdown && "show"}`} onMouseLeave={() => setShowDropdown(false)}>
              <a href="/">Sound design</a>
              <a href="/">Post design</a>
              <a href="/">Live design</a>
              <a href="/">Podcast</a>
            </div>
          </div>
          <a href="/about">About me</a>
          <div className="navbar__links-icons">
            <a href="https://www.instagram.com/simon_audio/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UC8E8ijYAx5liwa20gm0Y_2g"><i className="fa-brands fa-youtube"></i></a>
            <a href="mailto:simon.audio24@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://www.facebook.com/simone.ianniello.904"><i className="fa-brands fa-facebook"></i></a>
            <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        {/* HAMBURGER  */}
        <div className="hamburger" onClick={() => setIsActive(prev => !prev)}>
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar