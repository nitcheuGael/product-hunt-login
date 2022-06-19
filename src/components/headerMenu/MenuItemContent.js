import { Col, Container, Row } from 'react-bootstrap';


const styles = {
    title: {
        fontSize: 14,
    },
    description: {
        fontSize: 12,
        marginTop: 0,
    }
}

const MenuItemContent = ({ content }) => {
    const { title, icon, description } = content;
    return (
        <Container>
            <Row>
                <Col xs={2}>
                    <img src={icon} alt="icon" />
                </Col>
                <Col >
                    <Row>
                        <strong style={styles.title}>{title}</strong>
                    </Row>
                    <Row>
                        <span style={styles.description}>{description}</span>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MenuItemContent;