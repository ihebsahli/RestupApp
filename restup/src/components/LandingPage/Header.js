import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../LandingPage/header.css'
import '../LandingPage/search.css'
function Header() {

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    let target = button.querySelector('.target');
    function handleMove(e) {
      const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
      const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

      target.style.setProperty('--x', `${x}px`)
      target.style.setProperty('--y', `${y}px`)
    }
    button.addEventListener('mousemove', (e) => {
      handleMove(e);
    });
    button.addEventListener('touchmove', (e) => {
      handleMove(e.changedTouches[0]);
    });
  });

  return (
    <div class="parallax">
      <div class="waviy">
        <span style={{ '--i': 1 }}>P</span>
        <span style={{ '--i': 2 }}>I</span>
        <span style={{ '--i': 3 }}>Z</span>
        <span style={{ '--i': 4 }}>Z</span>
        <span style={{ '--i': 5 }}>U</span>
        <span style={{ '--i': 6 }}>P</span>
        <span style={{ '--i': 7 }}> -</span>
        <span style={{ '--i': 8 }}>R</span>
        <span style={{ '--i': 9 }}>E</span>
        <span style={{ '--i': 10 }}>S</span>
        <span style={{ '--i': 11 }}>T</span>
        <span style={{ '--i': 12 }}>A</span>
        <span style={{ '--i': 13 }}>U</span>
        <span style={{ '--i': 14 }}>R</span>
        <span style={{ '--i': 15 }}>A</span>
        <span style={{ '--i': 16 }}>N</span>
        <span style={{ '--i': 17 }}>T</span>


      </div>    <p className="animate-charcter">it is a place where passion and great taste take centre stage  </p>

      <button class="button">
        <div class="pattern">
          <div class="target inner bg1"></div>
        </div>
        <div class="text">Passer votre commande</div>
      </button>

      <div class="wrapper">
    <div class="containerr">
      <form role="search" method="get" class="search-form form" action="">
        <label>
            <span class="screen-reader-text">Search for...</span>
            <input type="search" class="search-field" placeholder="Type something..." value="" name="s" title="" />
        </label>
        <input type="submit" class="search-submit button" value="Search" />
    </form>
    </div>
  </div>


      {/* <div class="containerSearch">
        <input type="text" placeholder="Search..."></input>
        <div class="search"></div>
      </div> */}


    </div>


  )
}

export default Header
