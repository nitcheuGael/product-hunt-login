import { Button } from 'react-bootstrap';
const ButtonApp = ({ variant, text, onClick }) => {

    return (
        <div>
            <Button variant={variant} onClick={onClick}>{text} </Button>
        </div>
    );
};

export default ButtonApp;