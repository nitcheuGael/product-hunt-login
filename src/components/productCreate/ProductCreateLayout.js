import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ButtonApp from './ButtonApp';
import ProductCreateContent from './ProductCreateContent';
import ProductCreateMenuItem from './ProductCreateMenuItem';



const ProductCreateLayout = () => {
    const menuItems = [
        {
            title: 'Main Info',
            image: ''
        },
        {
            title: 'Inages and Media',
            image: ''
        },
        {
            title: 'Markers',
            image: ''
        },
        {
            title: 'Extras',
            image: ''
        },
        {
            title: 'Review and Launch',
            image: ''
        }
    ];

    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [text, setText] = useState('Next')
    const [isDisabled, setIsDisabled] = useState(true)

    const valeureText = () => {
        if (selectedMenuItem === 0) {
            setText(" Next step: Images and media")
            setIsDisabled(true)
        } else if (selectedMenuItem === 1) {
            setText("Next step: Makers")
            setIsDisabled(true)

        } else if (selectedMenuItem === 2) {
            setText("Next step: Extras")
            setIsDisabled(true)

        } else if (selectedMenuItem === 3) {
            setText("Next step: Launch checklist")
            setIsDisabled(true)

        } else {
            setIsDisabled(false)
            setText("")
        }
    }
    useEffect(() => {
        valeureText()

    })

    const handelClick = () => {
        setSelectedMenuItem(selectedMenuItem + 1);
    }

    return (
        <Container >
            <Row>
                <Col xs={3} >
                    <Container>
                        {menuItems.map((item, index) =>
                        (
                            <Row key={index} onClick={() => {
                                setSelectedMenuItem(index)
                            }}>
                                <Card style={{
                                    fontFamily: 'Roboto',
                                    textAlign: 'center',
                                    pointerEvents: 'none',
                                    fontSize: '17px',
                                    fontWeight: 'bold',
                                    backgroundColor: selectedMenuItem === index ? '#f5f5f5' : '#fff',
                                    hoverBackgroundColor: selectedMenuItem === index ? '#f5f5f5' : '#fff',
                                }}>
                                    <ProductCreateMenuItem title={item.title} image={item.image} /><br />
                                </Card>
                                <Row></Row><br />
                            </Row>
                        )
                        )}
                    </Container>
                </Col>
                <Col xs={{ offset: 1 }}>
                    <ProductCreateContent selectedIndex={selectedMenuItem} />
                    {isDisabled && <ButtonApp variant='primary' text={text} onClick={handelClick} position={selectedMenuItem} />}
                </Col>
            </Row>
        </Container>
    );
};
export default ProductCreateLayout;