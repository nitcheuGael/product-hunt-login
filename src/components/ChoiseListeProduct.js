import React from 'react';
import { Form } from 'react-bootstrap';

const ChoiseListeProduct = () => {
    return (

        <Form.Select htmlSize='1'>
            <option>All</option>
            <option>Made</option>
            <option>Hunted</option>
            <option>sheduled</option>
            <option>Posted</option>

        </Form.Select>

    );
};

export default ChoiseListeProduct;