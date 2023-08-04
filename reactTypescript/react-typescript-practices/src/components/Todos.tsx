import React from "react";

// interface TodoListProps {
//   items: { itemName: string; itemPrice: string }[];
// }

const Todos: React.FC<{ items: { itemName: string; itemPrice: string }[] }> = (
  props
) => {
  return (
    <div className="">
      {props.items.map((todo, id) => {
        return <div key={id}>{todo.itemName}</div>;
      })}
    </div>
  );
};

export default Todos;
