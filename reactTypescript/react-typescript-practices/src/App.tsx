import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./NewTodo";

const App: React.FC = () => {
  const todos = [
    { itemName: "product 1 ", itemPrice: "200$" },
    { itemName: "product 2 ", itemPrice: "300$" },
  ];
  return (
    <div className="bg-indigo-500 max-w-xs mx-auto text-white text-center py-5 px-5 mt-20">
      <NewTodo />
      <Todos items={todos} />
    </div>
  );
};

export default App;
