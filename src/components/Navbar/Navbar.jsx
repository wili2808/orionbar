import './navbar.css'
;<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
/>
export function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-btn">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <span className="nav-titulo">ORION BAR</span>
      </div>

      <div className="navbar">
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
