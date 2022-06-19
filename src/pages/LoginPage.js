import { useEffect, useState } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import { Facebook } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import kitty from '../assets/images/kitty.avif';
import LoginGoogle from '../components/connexion/LoginGoogle';
import NewProduct from '../components/productCreate/NewProduct';



const LoginPage = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, [])

    let navigate = useNavigate()
    const navigation = () => {
        navigate("/")
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    < Col md={{ offset: 4 }}>
                        <img src={kitty} alt="icon" />
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    < Col md={{ span: 6, offset: 3 }}>
                        <LoginGoogle />
                    </Col><br />
                    <Col md={{ span: 3, offset: 4 }}>
                        <Button ><Facebook /></Button>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    we'll never post to any of your accouunts without your permission
                </Modal.Footer>
            </Modal>
            <div><NewProduct /></div>
        </>
    );
};
export default LoginPage;