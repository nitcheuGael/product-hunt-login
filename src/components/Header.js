import { useEffect, useState } from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Activity, PersonFill } from 'react-bootstrap-icons';
import Capture from '../assets/images/Capture.PNG';
import navNewDiscussion from '../assets/images/navNewDiscussion.avif';
import navNewPost from '../assets/images/navNewPost.avif';
import Menu from './headerMenu/Menu';
import MenuItem from './headerMenu/MenuItem';
import Search from './headerMenu/Search';


const Header = () => {
    const body = [
        {
            title: "New Product",
            icon: navNewPost,
            description: "launch your product in product hunt"
        },
        {
            title: "New discution",
            icon: navNewDiscussion,
            description: "launch your product in product hunt"
        }

    ]

    const [show, setShow] = useState(true);
    const email = localStorage.getItem("email")
    const photo = localStorage.getItem("photo")
    useEffect(() => {
        if (email === null || email === undefined || email === "") {
            setShow(false);
        }
    })

    function handleSignOut (e) {
        localStorage.removeItem("email");
        localStorage.removeItem("photo");
        setShow(false);

    }


    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={Capture} alt="icon" />
                </Navbar.Brand>
                <image src='../assets/images/Capture.PNG' alt="icon" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Search />
                        <Menu />
                    </Nav>
                    {body.map((item, index) => {


                    })}
                    <MenuItem title='Submit' href="new" body={body}
                    />


                    <Activity rounded='true' />
                    {!show && <a href="login">.   Singn In    .</a>}
                    {show && <a href="#" onClick={handleSignOut}>.   Singn UP  .</a>}
                    <Nav defaultActiveKey="/home" as="ul">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">

                                {!show && <PersonFill rounded='true' />}
                                {show && <img src={photo} alt="PP"
                                    style={{
                                        width: "30PX",
                                        borderRadius: "50%",
                                        border: "2px solid #cddc39",
                                        filter: "drop-shadow(0 0 8px #ff5722)",
                                    }

                                    }
                                />}

                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1" >Profile</Dropdown.Item>
                                <Dropdown.Item href="/product-list">My product</Dropdown.Item>
                                <Dropdown.Item href="/product-list">My collectetion</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">My topic</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={handleSignOut}>Logout</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;