import { useState } from 'react';
import Header from '../components/Header';
import RouteLibre from '../routes/RouteLibre';
import Routes from '../routes/Routes';
import { useEffect } from 'react';
import LoginPage from '../pages/LoginPage';




const Layout = () => {


    const [show, setShow] = useState(true);
    const email = localStorage.getItem("email")
    useEffect(() => {
        if (email === null || email === undefined || email === "") {
            setShow(false);

        }
    }, [])


    return (
        <>
            <Header />
            <RouteLibre />
            {show && <Routes />}
        </>
    );
};

export default Layout;