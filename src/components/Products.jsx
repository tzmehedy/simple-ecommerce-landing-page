import React from 'react';
import CategoriesNav from './CategoriesNav';
import ProductCards from './ProductCards';

const Products = () => {
    return (
        <div className='grid grid-cols-12 px-24 mt-5 lg:space-x-5'>
            <div className='col-span-12 lg:col-span-2 '>
                <CategoriesNav></CategoriesNav>

            </div>
            <div className='col-span-12 lg:col-span-10'>
                <ProductCards></ProductCards>
            </div>

        </div>
    );
};

export default Products;