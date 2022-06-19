import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import NewProduct from '../components/productCreate/NewProduct';
import ProductCreatePage from '../pages/ProductCreatePage copy';
import ProductListPage from '../pages/ProductListPage';
import ProductUpdatePage from '../pages/ProductUpdatePage';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/product-list" element={<ProductListPage />} />
                <Route path="/product-create/" element={<ProductCreatePage />} />
                <Route path="/product-update" element={<ProductUpdatePage />} />
                <Route path="/new" element={<NewProduct />} />
                <Route path="*" element={<NewProduct />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;