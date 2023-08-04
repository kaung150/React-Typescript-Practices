import React from "react";

// interface TodoListProps {
//   items: { itemName: string; itemPrice: string }[];
// }

const Todos: React.FC<{ items: { itemName: string; itemPrice: string }[] }> = (
  props
) => {
  return (
    <div className="bg-indigo-500 max-w-xs mx-auto text-white text-center py-5 text-2xl mt-20">
      {props.items.map((todo) => {
        return <div>{todo.itemName}</div>;
      })}
    </div>
  );
};

export default Todos;
