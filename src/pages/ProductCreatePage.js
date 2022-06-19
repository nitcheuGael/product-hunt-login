import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MainInfo from '../components/MainInfo';

const ProductCreatePage = () => {
    return (



        <Container >
            <Row>
                <Col md={4} >
                    <strong>heeheh</strong>
                    <p>Status:Draft</p>
                </Col>
                <Col md={{ span: 4, offset: 4 }} >
                    Autosaved a few moments ago
                </Col>
            </Row>
            <Row>
                <Col style={{ backgroundColor: 'White' }}>

                </Col>
            </Row>
            <Row>
                <Button variant="light">
                    Main info
                </Button>
            </Row>
            <Row>
                <Button variant="light">
                    Images and media
                </Button  >
            </Row>
            <Row>
                <Button variant="light">
                    Makers
                </Button>
            </Row>
            <Row>
                <Button variant="light">
                    Extras
                </Button>
            </Row>
            <Row>
                <Button variant="light">
                    Review & Launch
                </Button>
            </Row>
            <Row>

                <Col md={1} >

                </Col>
                <Col md={9} >
                    <MainInfo />
                </Col>

            </Row>
        </Container>

    );
};

export default ProductCreatePage;