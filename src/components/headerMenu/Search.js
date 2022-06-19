import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
const styles = {
    taille: {
        fontSize: '12px'
    }
}
const Search = () => {
    return (
        <Form >
            <FormControl style={styles.taille}
                type="search"
                placeholder="Search product Hunt"
                className="me-2"
                aria-label="Search"
            />
        </Form>
    );
};

export default Search;