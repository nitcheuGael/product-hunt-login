import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const HeaderProduct = () => {
    return (
        <Container >
            <Row></Row><br />
            <Row>
                <Col md={4} >
                    <strong>Draft name</strong>
                    <p>Status:Draft</p>
                </Col>
                <Col md={{ span: 4, offset: 4 }} >
                    Autosaved a few moments ago
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderProduct;