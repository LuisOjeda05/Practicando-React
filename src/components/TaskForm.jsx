import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 mb-4 rounded-md grid place-items-center"
      >
        <h1 className="text-white font-bold text-xl mb-2">Create a new Task</h1>
        <input
          placeholder="Write your task title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-zinc-300 p-3 mb-2 w-full"
        />

        <textarea
          placeholder="Add your task description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-zinc-300 p-3 mb-2 w-full"
        />

        <button className="bg-yellow-500 px-8 py-2 mt-2 rounded-md hover:bg-yellow-300">Submit</button>
      </form>
    </div>
  );
}

export default TaskForm;
