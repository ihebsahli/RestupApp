import React, { Fragment } from 'react'
import { Col, Row } from 'antd';
import { Button } from 'antd';
function AboutUs() {
  return (
    <Fragment>
      <h1> About Us</h1>
      <Row className="Container-About">
        <Col span={12} >
          <img src='./assets/images/chef.jpg ' alt="pizza" className='image-aboutus' />
        </Col>
        <Col className='container-aboutus' span={12}>
          <h1 className='titleAboutUs'>
            A propos
          </h1>
          <p className='apropos'>

             "Pizzup" est une entreprise tunisienne spécialisée dans les pizzas personnalisées.
            Elle offre une variété d'options de garniture pour répondre aux besoins de chaque client, que ce soit pour une soirée entre amis,
            une fête d'anniversaire ou simplement pour satisfaire une envie de pizza. Avec un engagement envers la qualité,
            la satisfaction client et la rapidité de livraison,
            "Pizzup" est une entreprise de choix pour tous ceux qui recherchent une expérience de pizza personnalisée à Tunis.  </p>

          <Button className='button-17'>Contacter nous</Button>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AboutUs
