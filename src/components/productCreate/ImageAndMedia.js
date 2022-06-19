import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Capture from '../../assets/images/Capture.PNG';
import Product from '../../service/Product';



const ImageAndMedia = () => {

    const [image, setImage] = useState('');
    const [lienYoutubeProduct, setLienYoutube] = useState('');
    const lienProduct = localStorage.getItem("lienProduit")
    const emailAbonne = localStorage.getItem("email")

    useEffect(() => {
        Product.list_Product(lienProduct, emailAbonne).then((response) => {
            if (response.length !== 0) {
                setLienYoutube(response.data[0].lienYoutubeProduct)
            }
        })

    }, [])

    useEffect(() => {
        HandeleBlogAding()
    })

    const HandeleBlogAding = () => {
        // e.preventDefault();

        Product.list_Product(lienProduct, emailAbonne).then((response) => {

            const produit1 = {
                id: response.data[0].id,
                nameProduct: response.data[0].nameProduct,
                taglineProduct: response.data[0].taglineProduct,
                lienTwitter: response.data[0].lienTwitter,
                lienProduct: response.data[0].lienProduct,
                topicProduit: response.data[0].topicProduit,
                descriptionProduct: response.data[0].descriptionProduct,
                thumbnailProduct: response.data[0].thumbnailProduct,
                travailProduct: response.data[0].travailProduct,
                lieuTraivailProduct: response.data[0].lieuTraivailProduct,
                pricingProduct: response.data[0].pricingProduct,
                lienYoutubeProduct: lienYoutubeProduct,
                dureeOffreProduct: response.data[0].dureeOffreProduct,
                promocodeProduit: response.data[0].promocodeProduit,
                commentaire: response.data[0].commentaire,
                email: response.data[0].email,

                statut: "incommplete",
            };
            Product.update_product(produit1, response.data[0].id).then((rest) => {

            }).catch(erre => {

            })
        })

        /*  useEffect(() => {
             HandeleBlogAding();
             console.log("update top")
         },) */

    }


    return (
        <Container>


            <Row>
                <h5>Thumbnail</h5><br />
                <p>Let's make your product look nice</p>
            </Row><br />
            <Row>

                <Col xs={2} md={1} className="g-4">
                    <Card>
                        <Card.Img variant="top" src={Capture} />
                    </Card>

                </Col>

                <Col>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="file" size="lg"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </Form.Group>
                </Col>

            </Row><br />
            <Row>
                <h5>Preview of your product on the homepage
                </h5><br />
            </Row>
            <hr />
            <Row>
                <h3>Gallery</h3>
                <p>The first image will be used as the social preview when your link is shared online.
                    We recommend at least 3 or more images. Read our tips for great product galleries →</p>
            </Row >

            <Row xs="auto">
                <Col><Card><Card.Img variant="top" src={Capture} /></Card></Col>
                <Col><Card><Card.Img variant="top" src={Capture} /></Card></Col>
                <Col><Card><Card.Img variant="top" src={Capture} /></Card></Col>
            </Row><br />
            <Row></Row><br />
            <Row>
                <h3>YouTube video</h3><br />
                <h6>This is optional but we find that showing how your
                    product works is helpful to convince people. If you do add a video,
                    it will appear as the first item in your gallery when you launch.

                </h6>
            </Row><br />
            <hr /><br />

            <Row>
                <form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link to the video</Form.Label>
                        <Form.Control
                            type="lien"
                            placeholder="Link to the video"
                            value={lienYoutubeProduct}
                            onChange={
                                (e) => setLienYoutube(e.target.value)
                            }
                            required />
                    </Form.Group>
                </form>
            </Row><br />
            <Row></Row><br />
            {/* <Button variant="primary" type="submit" onClick={HandeleBlogAding}></Button> */}
        </Container>


    );
};

export default ImageAndMedia;
