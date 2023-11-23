import TaskCard from "./TaskCard";
import { TaskContext } from "../Context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center mt-8">No hay tareas listadas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
