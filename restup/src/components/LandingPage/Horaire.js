import React, { Fragment } from 'react'
import { Col, Row } from 'antd';
function Horaire() {
    return (
        <Fragment>
            <h1 className='TitreHoraire'> HORAIRES D'OUVERTURE</h1>
            <Row className='containerHoraire'>
                <Col className='container-Horaire' span={12}>
                <span className='TitleHoraire'>"Pizzup Menzah 6"</span>

                    <h1 className='titleAboutUs'>
                        Horaire de travail
                    </h1>
                    <div>
                      
                        Sunday – Wednesday
                        11AM – 10PM</div>
                        <div>
                        Thursday – Saturday
                        11AM – MIDNIGHT</div>
                </Col>
                <Col className='container-Horaire' span={12}>
                <span className='TitleHoraire'>"Pizzup Lac 2"</span>

                    <h1 className='titleAboutUs'>
                        Horaire de travail
                    </h1>
                    <div>
                      
                        Sunday – Wednesday
                        11AM – 10PM</div>
                        <div>
                        Thursday – Saturday
                        11AM – MIDNIGHT</div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Horaire
