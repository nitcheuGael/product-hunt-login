import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
const RouteLibre = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<LoginPage />} />

            </Switch>
        </BrowserRouter>
    );
};

export default RouteLibre;