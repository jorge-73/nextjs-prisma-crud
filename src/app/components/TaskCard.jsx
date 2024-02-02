"use client";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tasks/edit/${task.id}`);
  };

  return (
    <div
      className="p-3 bg-slate-600 rounded flex flex-col hover:bg-slate-700 hover:cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-xl text-slate-200 font-bold mb-1">{task.title}</h2>
      <p className="mb-1">{task.description}</p>
      <p className="mb-3">{new Date(task.createAt).toLocaleString()}</p>
    </div>
  );
};

export default TaskCard;
