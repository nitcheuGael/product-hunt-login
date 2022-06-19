import { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import Product from '../../service/Product';

const Maker = () => {
    const [travailProduct, setTravailProduct] = useState('');
    const [lieuTraivailProduct, setTraivailProduction] = useState('')
    const lienProduct = localStorage.getItem("lienProduit")
    const emailAbonne = localStorage.getItem("email")


    useEffect(() => {
        Product.list_Product(lienProduct, emailAbonne).then((response) => {
            if (response.length !== 0) {
                setTraivailProduction(response.data[0].lieuTraivailProduct)
                setTravailProduct(response.data[0].travailProduct)

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
                travailProduct: travailProduct,
                lieuTraivailProduct: lieuTraivailProduct,
                pricingProduct: response.data[0].lieuTraivailProduct,
                lienYoutubeProduct: response.data[0].lieuTraivailProduct,
                dureeOffreProduct: response.data[0].dureeOffreProduct,
                promocodeProduit: response.data[0].promocodeProduit,
                commentaire: response.data[0].commentaire,
                email: response.data[0].email,

                statut: "incommplete",
            };
            Product.update_product(produit1, response.data[0].id)
        })

    }
    return (
        <Container>
            <Row>
                <h3>Did you work on this product?</h3>
                <span>It’s fine either way. Just need to know.</span>
            </Row><br />
            <Row></Row><br />
            <Row>
                <Form>
                    <Row>
                        <Form.Check
                            inline
                            label="I worked on this product"
                            name="avis"
                            type='radio'
                            value='true'
                            id='yes'
                            onChange={(e) => setTravailProduct('true')}
                            checked={travailProduct === "true"}
                        />
                        <p >  I'll be listed as both Hunter and Maker of this product</p>
                    </Row>
                    <Row>
                        <Form.Check
                            inline
                            label="I didn't work on this product"
                            name="avis"
                            type='radio'
                            id='no'
                            value='false'
                            onChange={(e) => setTravailProduct('false')}
                            checked={travailProduct === "false"}
                        />
                        <p >  I'l l be listed as Hunter of this product</p>
                    </Row><br />
                </Form>

                <hr /><br />
                <Row>
                    <h3>Who worked on this product?</h3>
                    You’re free to add anyone who worked on this product.
                </Row><br />
                <Row></Row><br />
                <Row>
                    <form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <FormControl
                                placeholder="Add with product Hunt username or Twitter handles"
                                aria-label="traivail"
                                aria-describedby="basic-addon1"
                                value={lieuTraivailProduct}
                                onChange={(e) => setTraivailProduction(e.target.value)}
                            />
                        </InputGroup>
                    </form>
                </Row>

            </Row>
            <Row md={5}>
                {/* <Button variant="danger"
                >Next step:Extras</Button> */}

            </Row>
            {/* <Button variant="primary" type="submit" onClick={HandeleBlogAding}></Button> */}

        </Container>
    );
};

export default Maker;