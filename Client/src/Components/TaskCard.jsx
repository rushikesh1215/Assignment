export default function TaskCard({ task, onDelete }) {
  return (
    <div className="border rounded p-4 mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => onDelete(task._id)} className="bg-red-500 px-3 py-1 rounded">Delete</button>
    </div>
  );
}
