import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import bigpage from '../../assets/images/bigpage.PNG';
import Product from '../../service/Product';
import { useNavigate } from 'react-router-dom';



const NewProduct = () => {

    const [lienProduct, setLienProduct] = useState("")
    const emailAbonne = localStorage.getItem("email")
    const getUrlRoot = () => {
        return lienProduct.replace("https://", '').replace("http://", "")
    }
    localStorage.setItem("lienProduit", getUrlRoot());
    const HandeleBlogAding = () => {
        Product.list_Product(getUrlRoot(), emailAbonne).then((response) => {
            if (response.data.length === 0) {
                const tmpDate = new Date().toISOString().split('T');
                const date = `${tmpDate[0]}`;
                const produit1 = {
                    nameProduct: "",
                    taglineProduct: "",
                    lienProduct: getUrlRoot(),
                    lienTwitter: "",
                    topicProduit: "",
                    descriptionProduct: "",
                    thumbnailProduct: "sss",
                    travailProduct: true,
                    lieuTraivailProduct: "",
                    pricingProduct: "",
                    lienYoutubeProduct: "",
                    dureeOffreProduct: "",
                    promocodeProduit: "",
                    commentaire: "testrerrer",
                    dateProduct: date,
                    statut: "incommplete",
                    email: emailAbonne
                };

                Product.add_product(produit1).then((rest) => {
                    navigation();
                }).catch(() => {

                })
            } else {
                navigation();
            }

        })

    }

    let navigate = useNavigate()
    const navigation = () => {
        navigate("/product-create/")
    }



    return (

        <Row>

            <Col xs={3} >
                <img src={bigpage} alt="imaage" />

            </Col>
            <Col xs={{ offset: 3 }} >
                <h3><b>Submit a product</b></h3><br />
                <p>Found a cool product you want everyone to know about? Or maybe you made one yourself
                    and want the world to know about it? You're in the right place. So relax and follow the steps.</p><br />

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link to the product</Form.Label>
                        <Form.Control type="text"
                            value={lienProduct}
                            name="lienProduct"
                            onChange={(e) =>
                                setLienProduct(e.target.value)
                            }
                            placeholder="www.producthunt.com"
                            required />
                    </Form.Group>
                    <Button variant="danger"
                        onClick={HandeleBlogAding}
                    >Get started </Button>
                </Form><br />



                <p>Your existing drafts:
                    Post Draft
                    ,
                    goodwww.producthunt.com</p><br />

                <b>Frequent questions</b>
                <Col>
                    <hr />
                    <p>What to know before submitting a product</p>
                    <hr />
                </Col>
                <p>First time posting? Read our guide</p>
                <Col>
                    <hr />
                    <p>What happens immediately after launching</p>
                </Col>
                <Col>
                    <hr />
                    <p>The launch team — know your role</p>
                </Col>
                <hr />
            </Col>
        </Row>


    );
};

export default NewProduct;