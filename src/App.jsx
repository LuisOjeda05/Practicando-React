import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-950 h-screen">
      <div className="container mx-auto p-5">
        <TaskForm />

        <TaskList />
      </div>
    </main>
  );
}

export default App;
