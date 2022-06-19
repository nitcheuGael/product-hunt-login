import { Button, Col, Row } from 'react-bootstrap';
import { Trash3 } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import Product from '../../service/Product';



const ProductItem = ({ productListe }) => {
    const deletes = () => {
        Product.delete(productListe.id)
    }

    let navigate = useNavigate()
    const navigation = () => {
        navigate("/product-create/")
        localStorage.setItem("lienProduit", productListe.lienProduct);
    }
    return (

        <Row>
            <Col md={{ span: 3, offset: 3 }}>

                <img src={productListe.photo} alt={productListe.titre} />
                <div className="card-body">
                    <h5 className="card-title">{productListe.topicProduit} {productListe.lienProduct} </h5>
                    <p className="card-text">{productListe.nameProduct}</p>
                    <p className="card-text">{productListe.dateProduct}</p>
                </div >
            </Col >
            <Col md={{ span: 3, offset: 1 }}>
                {productListe.promocodeProduit === '' && <Button variant="primary" onClick={navigation} >Continue editing</Button>}
                {productListe.promocodeProduit === '' && <Trash3 onClick={deletes} />}
                {productListe.promocodeProduit !== '' && <Button variant="primary" >Launch dashboard</Button>}
                {productListe.promocodeProduit !== '' && <Button variant="primary" >View post</Button>}
            </Col>
        </Row >
    );
};

export default ProductItem;