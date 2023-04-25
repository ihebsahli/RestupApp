import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../Layout/navbar.css'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <h3 className="firstname">PIZZUP <span className="lastname">RESTAURANT</span></h3>
      <nav ref={navRef}>
        <a href="/login">Login</a>

        <div className="dropdown">
          <button className="dropbtn">Reservation</button>
          <div className="dropdown-content">
            <a href="/reservation">Réserver une place</a>
            <a href="/reservationList">List des reservations</a>
          </div>
        </div>

        <div className="dropdown">

          <button className="dropbtn">Jeux</button>
          <div className="dropdown-content">
            <a href="/tictactoc">Tic Tac Toc</a>
            <a href="/puzz">Question/Réponse</a>
            <a href="/pendu">Pendu</a>
            <a href="/guessthenumber">Guess the number</a>
            <a href="/remember">Memory game</a>
          </div>
        </div>

        <a href="/listplats">Menu</a>
        <a href="/chatgpt">ChatGPT</a>

        <a href="/#">About us</a>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
