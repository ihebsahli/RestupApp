import React from 'react'
import { Carousel } from 'react-carousel-minimal';


function CarrouselHeader() {
    const data = [
        {
          image: "./assets/images/1.jpg",
          caption: `<div>
                      San Francisco
                      <br/>
                      Next line
                    </div>`
        },
        {
          image: "https://lelocalapizzas.fr/wp-content/uploads/2022/02/recette-pizza-4-saisons.jpg",
          caption: "Scotland"
        },
        {
          image: "https://focus.courrierinternational.com/2022/02/04/0/0/3000/2000/1280/0/60/0/f9b431c_1644007234191-075-manzo-notitle190131-np5k6.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://cuisinezavecdjouza.fr/wp-content/uploads/2021/01/pizza-napoli-hadi.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://lelocalapizzas.fr/wp-content/uploads/2021/09/pate-a-pizza-napolitaine.jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.saporinostri.it/wp-content/uploads/2020/10/le-origini-della-pizza-napoletana-e1601990439881-1024x604.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://img.freepik.com/photos-gratuite/pizza-mixte-divers-ingredients_140725-3790.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://cuisinemoiunmouton.com/wp-content/uploads/2022/01/Pizza-Italienne-tomates-parmesan-roquette-7.jpg",
          caption: "Scotland"
        },
        {
          image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/57e62365-0cda-4414-8fb8-8cabfa27a97a/Derivates/c0f28a49-afda-4f72-af8b-9a4a92791844.jpg",
          caption: "Darjeeling"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  return (
    <div className='container-carrousel' style={{ textAlign: "center"}}>
    <h2>React Carousel Minimal</h2>
    <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
    <div style={{
      padding: "0 20px"
    }}>
      <Carousel
        data={data}
        time={2000}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  </div>
  )
}

export default CarrouselHeader
