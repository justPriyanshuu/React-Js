import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <h1 className="todo-text">To-Do App</h1>
      <AddTask />
      <TaskList />
    </>
  );
}

export default App;
