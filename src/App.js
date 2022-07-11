import Sidebar from "./components/sidebar";
import TodoList from "./components/todolist";

function App() {
  return (
    <div>
      <div className="flex relative">
        <Sidebar />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
