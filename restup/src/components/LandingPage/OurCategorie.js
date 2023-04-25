import React, { Fragment } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

  
function OurCategorie() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Fragment>
      <h1 className='titleCategorie'>Nos Catégories de Pizza</h1>
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg"alt="categorie" />
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>
  <div className='Categorie-Item'>
    <img className='fix-img-categorie' src="./assets/images/p.jpg" alt="categorie"/>
  </div>

</Carousel>
</Fragment>
  )
}

export default OurCategorie
