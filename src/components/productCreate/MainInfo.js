import { useEffect, useState } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Product from '../../service/Product';


const MainInfo = () => {

    const [nameProduct, setName] = useState('');
    const [taglineProduct, setTaglineProduct] = useState('');
    const [lienTwitter, setLientwitter] = useState('');
    const [topicProduit, setTopic] = useState('');
    const [descriptionProduct, setDescription] = useState('');
    const lienProduct = localStorage.getItem("lienProduit")
    const emailAbonne = localStorage.getItem("email")

    useEffect(() => {
        Product.list_Product(lienProduct, emailAbonne).then((response) => {
            if (response.length !== 0) {
                setName(response.data[0].nameProduct)
                setTaglineProduct(response.data[0].taglineProduct)
                setLientwitter(response.data[0].lienTwitter)
                setTopic(response.data[0].topicProduit)
                setDescription(response.data[0].descriptionProduct)

            }
        })

    }, [])

    useEffect(() => {
        HandeleBlogAding()
    })

    const HandeleBlogAding = () => {
        const tmpDate = new Date().toISOString().split('T');
        const date = `${tmpDate[0]}`;


        Product.list_Product(lienProduct, emailAbonne).then((response) => {
            const produit1 = {
                id: response.data[0].id,
                nameProduct: nameProduct,
                taglineProduct: taglineProduct,
                lienTwitter: lienTwitter,
                lienProduct: response.data[0].lienProduct,
                topicProduit: topicProduit,
                descriptionProduct: descriptionProduct,
                thumbnailProduct: response.data[0].thumbnailProduct,
                travailProduct: response.data[0].travailProduct,
                lieuTraivailProduct: response.data[0].lieuTraivailProduct,
                pricingProduct: response.data[0].lieuTraivailProduct,
                lienYoutubeProduct: response.data[0].lieuTraivailProduct,
                dureeOffreProduct: response.data[0].dureeOffreProduct,
                promocodeProduit: response.data[0].promocodeProduit,
                commentaire: response.data[0].commentaire,
                email: response.data[0].email,
                statut: "incommplete",


            };
            Product.update_product(produit1, response.data[0].id).then((rest) => {
                console.log("update top", response[0].id)
            }).catch(erre => {

            })
        })

        /*  useEffect(() => {
             HandeleBlogAding();
             console.log("update top")
         },) */

    }

    return (
        <div className="creer-product">
            <form className='form'>
                <div className="form-group">
                    <Row>
                        <Col>
                            <h6>Tell us more about this product</h6>
                            <p>We’ll need its name, tagline, links, topics and description.</p><br />
                        </Col>
                    </Row>

                    <Row>
                        <Form.Label htmlFor="disabledSelect">Name of the product</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="simply the name of the product"
                            value={nameProduct}
                            id="nom"
                            onChange={
                                (e) => setName(e.target.value)
                            }
                        />

                    </Row><br />

                    <Row >
                        <Form.Label htmlFor="disabledSelect">Tagline</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="concise ansd descriptive tagline for the product"
                            value={taglineProduct}
                            id="tagline"
                            onChange={
                                (e) => setTaglineProduct(e.target.value)
                            }
                        />
                    </Row><br />
                    <hr />

                    <Row>
                        <Col>
                            <h3>Links</h3><br />
                        </Col>
                    </Row>

                    <Row>

                        <Form.Label htmlFor="disabledSelect">

                            <Form.Label htmlFor="disabledSelect">Links to the product
                            </Form.Label>
                            <Form.Control
                                type="text"
                                value={lienProduct}
                                id="tagline"
                            />
                        </Form.Label>

                    </Row><br />


                    <Row>
                        <Form.Label htmlFor="disabledSelect">Twitter account of the product
                        </Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">twitter.com/</InputGroup.Text>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="@product"
                                value={lienTwitter}
                                onChange={
                                    (e) => setLientwitter(e.target.value)
                                }
                            />
                        </InputGroup>
                    </Row>
                    <hr /><br />
                    <Row>

                        <h5>Topic</h5>
                    </Row><br />
                    <Row>
                        <Form.Label htmlFor="disabledSelect">Select up to three topics
                        </Form.Label>
                        <Form.Select aria-label="Default select example"
                            value={topicProduit}
                            id="topic"
                            onChange={
                                (e) => setTopic(e.target.value)
                            }
                        >
                            <option>Select a topic</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Developer Tools">Developer Tools</option>
                            <option value="Artifical Intelligence">Artifical Intelligence</option>
                        </Form.Select>
                    </Row><br />
                    <hr /><br />
                    <Row>
                        <h5>Description</h5>
                    </Row> <br />
                    <Row>
                        <Form.Group className="mb-3"
                        >
                            <Form.Label>Description of the product</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description"
                                value={descriptionProduct}
                                id="description"
                                onChange={
                                    (e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    {/*                     <Button variant="primary" type="submit" onClick={HandeleBlogAding}></Button> */}
                </div>
            </form>
        </div>)

}

export default MainInfo;