import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChoiseListeProduct from '../components/ChoiseListeProduct';
import ProductItem from '../components/productListe/ProductItem';
import TitleProduct from '../components/TitleProduct';
import Product from '../service/Product';


const ProductListPage = () => {
    const [productList, setProductList] = useState([]);
    const emailAbonne = localStorage.getItem("email");

    useEffect(() => {
        Product.list_product_by_email(emailAbonne).then((response) => {
            setProductList(response.data);
            console.log(response.data);
            response.data.map((item, key) => {
                if (
                    item.commentaire === '' || item.commentaire === null ||
                    item.dateProduct === '' || item.dateProduct === null
                    || item.descriptionProduct === '' || item.descriptionProduct === null ||
                    item.dureeOffreProduct === '' || item.dureeOffreProduct === null ||
                    item.lienProduct === '' || item.lienProduct === null || item.lienTwitter === '' || item.lienTwitter === null ||
                    item.lienYoutubeProduct === '' || item.lienYoutubeProduct === null || item.lieuTraivailProduct === '' || item.lieuTraivailProduct === null
                    || item.nameProduct === '' || item.nameProduct === null || item.pricingProduct === '' || item.pricingProduct === null ||
                    item.promocodeProduit === '' || item.promocodeProduit === null || item.taglineProduct === '' || item.taglineProduct === null ||
                    item.thumbnailProduct === '' || item.thumbnailProduct === null || item.topicProduit === '' || item.topicProduit === null ||
                    item.travailProduct === '' || item.travailProduct === null
                ) {

                }
            })
        })
    }, []);
    return (
        <Container style={{ marginTop: 50 }}>
            <Row >
                <Col md={{ span: 3, offset: 3 }}>
                    <TitleProduct />
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <ChoiseListeProduct />
                </Col>
            </Row><br />
            <Row>
                {productList.map((item, key) => (<ProductItem key={key} productListe={item} />))}
            </Row>
        </Container>
    );
};
export default ProductListPage;