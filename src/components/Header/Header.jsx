import './header.css'
import orion_logo from '../../assets/orion_logo.webp'
import orion_logo2 from '../../assets/orion_logo2.webp'

const LINK_INSTA = 'https://www.instagram.com/orion.barber.bar/'
const ADRESS_BAR =
  'https://www.google.com/maps/place/Francisco+L%C3%B3pez+1855,+Ituzaing%C3%B3,+Corrientes/@-27.5853111,-56.6909163,18z/data=!3m1!4b1!4m5!3m4!1s0x9457388c4f307bc9:0xc521b90afef5589e!8m2!3d-27.5853111!4d-56.6896288?hl=es&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'

export function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={orion_logo2} alt="logo principal de Orion" />
      </div>
      <div className="info">
        <div className="info-content">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#e8eaed"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <a href={ADRESS_BAR} target="_blank">
            Francisco López 1855 - Ituzaingó Cts
          </a>
        </div>
        <div className="info-content">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
          >
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
          </svg>
          <a href={LINK_INSTA} target="_blank">
            ORION.BARBER.BAR
          </a>
        </div>
      </div>
    </div>
  )
}
