import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "../services/api";
import Input from "./Input";
import Button from "./Button";
import TaskCard from "./TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error fetching tasks");
    }
  };

  const handleAdd = async () => {
    try {
      await addTask(title, description);
      setTitle(""); setDescription("");
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-6">
        <Input label="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Input label="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <Button onClick={handleAdd}>Add Task</Button>
      </div>
      <div>
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
