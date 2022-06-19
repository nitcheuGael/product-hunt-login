import React from 'react';
import ImageAndMedia from './ImageAndMedia';
import MainInfo from './MainInfo';
import Maker from './Maker';
import Extras from './Extras';
import ReviewAndLaunch from './ReviewAndLaunch';


const ProductCreateContent = ({ selectedIndex }) => {


    switch (selectedIndex) {
        case 0:
            return <MainInfo />;
        case 1:
            return <ImageAndMedia />
        case 2:
            return <Maker />
        case 3:
            return <Extras />
        case 4:
            return <ReviewAndLaunch />
        default:
            return <div>rien</div>;
    }

};

export default ProductCreateContent;