import React from "react";

const Todos: React.FC<{
  productList: { name: string; price: string }[];
}> = (props) => {
  return (
    <div>
      {props.productList.map((product, index) => (
        <div key={index} className="text-white text-center text-xl">
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default Todos;
