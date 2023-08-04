import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const input = inputRef.current?.value ?? false;
    console.log(input);
  };
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Enter Your Product</h1>
      <form action="" onSubmit={(ev) => handleSubmit(ev)}>
        <input
          type="text"
          placeholder="Enter your product "
          className="w-full px-2 outline-none text-slate-600"
          ref={inputRef}
        />

        <button className="bg-indigo-800 py-1 px-3 mt-4 mb-5 rounded-lg">
          ClickToADD
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
