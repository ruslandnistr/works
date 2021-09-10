import React from "react";

const Pagination = ({ product, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }

  

  return (
 <div>
        <ul>
        {product.map((product, p) => (
          <li id={product.id} >{product.id}  {product.title  }</li>
        ))}
    </ul>
 </div>
  );
};

export default Pagination;
