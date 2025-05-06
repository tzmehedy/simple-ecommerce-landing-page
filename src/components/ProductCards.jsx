import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductCards = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch("../../public/productsList.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
      <div className="">
        <div className="flex justify-end ">
          <select
            name="sort"
            id=""
            className="border-1 border-[#EF3C8B] px-3 py-2 rounded-lg"
          >
            <option className="flex items-center" value="Sort By Latest">
              Sort By Latest
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:ml-20 mt-3 space-y-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default ProductCards;