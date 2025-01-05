import { useState } from 'react'
import './navbar.css'
const LINK_INSTA = 'https://www.instagram.com/orion.barber.bar/'
const ADRESS_BAR =
  'https://www.google.com/maps/place/Francisco+L%C3%B3pez+1855,+Ituzaing%C3%B3,+Corrientes/@-27.5853111,-56.6909163,18z/data=!3m1!4b1!4m5!3m4!1s0x9457388c4f307bc9:0xc521b90afef5589e!8m2!3d-27.5853111!4d-56.6896288?hl=es&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
export function Navbar() {
  const [expandMenu, setExpandMenu] = useState(false)
  const handleClick = () => {
    setExpandMenu(!expandMenu)
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

      <div className={expandMenu ? 'navbar-hidden' : 'navbar'}>
        <ul>
          <li>
            <span>HOME</span>
          </li>
          <li>
            <span>NOSOTROS</span>
          </li>
          <li>
            <span>NUESTRA CARTA</span>
          </li>
          <li>
            <span>EVENTOS</span>
          </li>
          <li>
            <span>SHOP</span>
          </li>
          <li>
            <span>CONTACTO</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
