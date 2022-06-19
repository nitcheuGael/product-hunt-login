import { Button, Container, Form, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Product from '../../service/Product';

const Extras = () => {

    const [pricingProduct, setPricingProduct] = useState('');
    const [dureeOffreProduct, setDureePromo] = useState('');
    const [promocodeProduit, setCodePromo] = useState('');
    const [dateProduct, setDateHeure] = useState('');
    const [commentaire, setCommentaire] = useState('');
    const lienProduct = localStorage.getItem("lienProduit")
    const emailAbonne = localStorage.getItem("email")

    useEffect(() => {
        Product.list_Product(lienProduct, emailAbonne).then((response) => {
            if (response.length !== 0) {
                setPricingProduct(response.data[0].pricingProduct)
                setDureePromo(response.data[0].dureeOffreProduct)
                setCodePromo(response.data[0].promocodeProduit)
                setCommentaire(response.data[0].commentaire)

            }
        })

    }, [])
    useEffect(() => {
        HandeleBlogAding()
    })

    const HandeleBlogAding = () => {
        //e.preventDefault();
        Product.list_Product(lienProduct, emailAbonne).then((response) => {
            const produit1 = {
                id: response.data[0].id,
                nameProduct: response.data[0].nameProduct,
                taglineProduct: response.data[0].taglineProduct,
                lienProduct: response.data[0].lienProduct,
                topicProduit: response.data[0].topicProduit,
                descriptionProduct: response.data[0].descriptionProduct,
                thumbnailProduct: response.data[0].thumbnailProduct,
                travailProduct: response.data[0].travailProduct,
                lieuTraivailProduct: response.data[0].lieuTraivailProduct,
                pricingProduct: pricingProduct,
                lienYoutubeProduct: response.data[0].lieuTraivailProduct,
                dureeOffreProduct: dureeOffreProduct,
                promocodeProduit: promocodeProduit,
                commentaire: commentaire,
                email: response.data[0].email,

                statut: "incommplete",
            };
            Product.update_product(produit1, response.data[0].id)

        })

    }
    return (
        <Container>
            <Row>
                <h3>Pricing</h3>
                <span>Optional, but the community really appreciates knowing.</span>
            </Row><br />
            <Row>
                <Form>
                    <Row>
                        <Form.Check
                            inline
                            label="I worked on this product"
                            name="avis"
                            type='radio'
                            value="1"
                            id='yes'
                            onChange={(e) => setPricingProduct('1')}
                            checked={pricingProduct === "1"}

                        />

                        <p >  I'll be listed as both Hunter and Maker of this product</p>
                    </Row>
                    <Row>
                        <Form.Check
                            inline
                            label="I worked on this product"
                            name="avis"
                            type='radio'
                            value="2"
                            id='yes'
                            onChange={(e) => setPricingProduct('2')}
                            checked={pricingProduct === "2"}

                        />

                        <p >  I'll be listed as both Hunter and Maker of this product</p>
                    </Row>
                    <Row>
                        <Form.Check
                            inline
                            label="I worked on this product"
                            name="avis"
                            type='radio'
                            value="3"
                            id='yes'
                            onChange={(e) => setPricingProduct('3')}
                            checked={pricingProduct === "3"}

                        />
                        <p >  I'll be listed as both Hunter and Maker of this product</p>
                    </Row>

                </Form>

                <hr /><br />
                <Row>
                    <h3>Promo code</h3>
                    If you'd like to offer a promo code for the Product
                    Hunt community, you can add it here.
                    All fields must be completed to have a valid promo offer.
                </Row><br />
                <Row></Row><br />


                <Row className="mb-3">
                    <Form.Group as={Col} placeholder="PH10OFF">
                        <Form.Label>What is the offer?</Form.Label  >
                        <Form.Control placeholder="3 months free"
                            value={dureeOffreProduct}
                            name='dureePromo'
                            onChange={(e) => setDureePromo(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} placeholder="PH10OFF">
                        <Form.Label>Promo code</Form.Label>
                        <Form.Control placeholder="PH10OFF"
                            value={promocodeProduit}
                            name='codePromo'
                            onChange={(e) => setCodePromo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            value={dateProduct}
                            name='dateHeure'
                            onChange={(e) => setDateHeure(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <hr /><br />
                <Row>
                    <h3>Write the first comment</h3>
                    This comment will be posted when your product launches.
                    Adding a first comment is essential to get the discussion started.
                </Row><br />
                <Row></Row><br />
                <Row>
                    <Form.Group className="mb-3"
                    >
                        <Form.Control as="textarea" rows={3}
                            placeholder="Explain how you discovered this product...
                        invite people to join the conversation ,ask question to the Makers"

                            value={commentaire}
                            name='commentaire'
                            onChange={(e) => setCommentaire(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                {/* <Row md={5}>
                    <Button variant="danger">Next step:Launch Checklist</Button>
                </Row> */}

                {/*  <Button variant="primary" type="submit" onClick={HandeleBlogAding}></Button> */}

            </Row><br />
        </Container>
    );
};

export default Extras;