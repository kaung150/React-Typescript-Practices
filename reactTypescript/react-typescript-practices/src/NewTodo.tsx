import React, { useRef } from "react";

const NewTodo: React.FC<{ todoHandler: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const text = inputRef.current?.value ?? false;
    props.todoHandler(text);
  };
  return (
    <div className="px-5 text-center">
      <form action="" onSubmit={(ev) => handleSubmit(ev)}>
        <input
          type="text"
          className="w-full py-1 px-2 outline-none"
          placeholder="Enter the item"
          ref={inputRef}
        />
        <button className="text-white bg-indigo-800 py-1 px-4 rounded-md  mb-5 mt-3">
          ADD Item
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
