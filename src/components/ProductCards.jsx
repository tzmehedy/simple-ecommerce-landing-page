import React, { useEffect, useState } from 'react';

const ProductCards = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch("../../public/productsList.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(products)
    return (
      <div>
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

        <div>

        </div>
      </div>
    );
};

export default ProductCards;