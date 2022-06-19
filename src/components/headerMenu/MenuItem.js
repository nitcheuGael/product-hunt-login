import { NavDropdown } from 'react-bootstrap';
import MenuItemContent from './MenuItemContent';

const styles = {
    wrapper: {
        width: 300,
        marginBottom: 10,
        fontFamily: 'geogia',
        fontSize: '12px',

    },
    NavDropdown: {
        marginBottom: 10,
        fontFamily: 'geogia',
        fontSize: '15px',
        width: 100,

    }
}
const MenuItem = ({ title = "item", body = [], href = "#" }) => {
    return (
        <>
            <NavDropdown title={title} id="dropdown-button-dropstart"

                style={styles.NavDropdown} >
                {body.map((item, index) => {
                    return <NavDropdown.Item style={styles.wrapper} href={href} key={index}>
                        <MenuItemContent content={item} />
                    </NavDropdown.Item>
                })}
            </NavDropdown>
        </>
    );
};

export default MenuItem;