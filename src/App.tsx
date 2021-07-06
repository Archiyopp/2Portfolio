import { useState } from "react";
import { FaEdit, FaMinusCircle, FaCheckCircle, FaTimes } from "react-icons/fa";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}
type Tasks = Array<Task>;

type filterFunctionName = "All" | "Todo" | "Completed";

type filterFunction = (task: Task) => boolean;

const initialState: Tasks = [
  {
    id: "1",
    text: "Sleep",
    completed: false,
  },
  {
    id: "2",
    text: "Study",
    completed: false,
  },
  {
    id: "3",
    text: "Workout",
    completed: false,
  },
];
const filterFunctions: Record<filterFunctionName, filterFunction> = {
  All: () => true,
  Todo: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};
function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(initialState);
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState<filterFunctionName>("All");
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (value !== "") {
      setTasks((tasks): Tasks => {
        const newTask: Task = {
          id: Date(),
          text: value,
          completed: false,
        };
        setValue("");
        return [...tasks, newTask];
      });
    } else {
      return;
    }
  };
  const themeChange = (): void => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "cupcake");
      setTheme("cupcake");
    } else if (theme === "cupcake") {
      document.documentElement.setAttribute("data-theme", "synthwave");
      setTheme("synthwave");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  };
  const removeTask = (id: string): void => {
    const newTasks: Tasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const toggleCompleteTask = (id: string): void => {
    const newTasks: Tasks = tasks.map((task: Task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const TaskList: Tasks = tasks.filter(filterFunctions[filter]);
  return (
    <section className="max-w-md mx-auto my-auto flex flex-col w-96 items-center">
      <button type="button" onClick={themeChange} className="btn btn-info mb-2">
        Change Theme
      </button>
      <div className="btn-group">
        <button
          className={`btn ${`${filter}` === "All" ? `btn-active` : null}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`btn ${`${filter}` === "Todo" ? `btn-active` : null}`}
          onClick={() => setFilter("Todo")}
        >
          To do
        </button>
        <button
          className={`btn ${`${filter}` === "Completed" ? `btn-active` : null}`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <form className="form-control w-96 mx-0" onSubmit={handleSubmit}>
        <label
          htmlFor="task"
          className="label justify-center text-lg font-bold"
        >
          Task:
        </label>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Task to do"
          className="input text-base-content text-lg"
          value={value}
        />
        <button type="submit" className="btn btn-primary mx-0 mb-2 text-xl">
          Submit
        </button>
      </form>
      <ul className="w-96">
        {TaskList.map((task: Task) => (
          <li
            className="flex flex-row justify-between items-center bg-neutral px-4 py-2 rounded-xl mb-2"
            key={task.id}
          >
            <p className=" font-medium text-lg text-neutral-content">
              {task.text}
            </p>
            <div>
              <button
                className="px-1"
                onClick={(e) => toggleCompleteTask(task.id)}
              >
                {task.completed ? (
                  <FaTimes className="h-6 w-6 m-0 text-error" />
                ) : (
                  <FaCheckCircle className="h-6 w-6 m-0 text-success" />
                )}
              </button>
              <button className=" px-1">
                <FaEdit className="h-6 w-6 m-0 text-warning" />
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className=" px-1"
                type="button"
              >
                <FaMinusCircle className="text-error h-6 w-6 m-0" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
