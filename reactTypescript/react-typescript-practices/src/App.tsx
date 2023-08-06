import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./NewTodo";

const App: React.FC = () => {
  const productList = [
    { name: "Item 1", price: "22$" },
    { name: "Item 2", price: "23$" },
  ];

  const todoHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="bg-indigo-500 max-w-xs mx-auto py-5">
      <h1 className="text-white text-4xl font-bold  text-center mb-4">
        Product Lists
      </h1>

      <NewTodo todoHandler={todoHandler} />
      <Todos productList={productList} />
    </div>
  );
};

export default App;
