import { Container, Row } from 'react-bootstrap';
import HeaderProduct from '../components/productCreate/HeaderProduct';
import ProductCreateLayout from '../components/productCreate/ProductCreateLayout';

const ProductCreatePage = () => {
    return (
        <Container >
            <Row>
                <HeaderProduct />
            </Row>
            <hr className="solid" />
            <Row>
                <ProductCreateLayout />
            </Row>
        </Container>
    );
};

export default ProductCreatePage;