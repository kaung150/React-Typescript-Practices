import React from "react";
import Todos from "./components/Todos";

const App: React.FC = () => {
  const todos = [
    { itemName: "product 1 ", itemPrice: "200$" },
    { itemName: "product 2 ", itemPrice: "300$" },
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};

export default App;
