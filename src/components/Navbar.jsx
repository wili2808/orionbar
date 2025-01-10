import { useState } from 'react'
import '../styles/navbar.css'

export function Navbar() {
  const [activeMenu, setExpandMenu] = useState(false)
  const handleClick = () => {
    setExpandMenu(!activeMenu)
    console.log(activeMenu)
  }
  return (
    <div className="nav-container">
      <div className="nav-btn">
        <svg
          className="icon"
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
      </div>
      <div className={activeMenu ? 'navbar' : 'navbar active'}>
        <a href="">HOME</a>
        <a href="">NOSOTROS</a>
        <a href="">NUESTRA CARTA</a>
        <a href="">EVENTOS</a>
        <a href="">SHOP</a>
        <a href="">CONTACTO</a>
      </div>
    </div>
  )
}
