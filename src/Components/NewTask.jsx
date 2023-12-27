import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnterdTask] = useState("");

  const handleChange = (e) => {
    setEnterdTask(e.target.value);
  };

  function handleClick() {
    onAdd(enteredTask);
    setEnterdTask("");
  }
  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        value={enteredTask}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
