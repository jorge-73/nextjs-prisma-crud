import { prisma } from "@/libs/prisma";
import TaskCard from "./components/TaskCard";
async function loadTasks() {
  /* const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json(); */

  return await prisma.task.findMany();
}

export default async function Home() {
  const tasks = await loadTasks();

  return (
    <main>
      <h1 className="text-3xl text-center py-5">Tareas</h1>
      <div className="grid grid-cols-4 gap-3 text-center px-20">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}
