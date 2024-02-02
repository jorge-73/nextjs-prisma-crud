"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [taskId, setTaskId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      const getTask = async () => {
        const res = await fetch(`/api/tasks/${params.id}`);
        const data = await res.json();
        setTaskId(data.id);

        setValue("title", data.title);
        setValue("description", data.description);
      };
      getTask();
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    const { title, description } = data;
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
    }

    router.refresh();
    router.push("/");
  });

  const deleteTask = async (id) => {
    if (id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
    }

    router.refresh(); 
    router.push("/");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className=" text-2xl my-3">Formulario de tareas</h1>
      <form
        className="p-10 bg-slate-600 text-center rounded-md"
        onSubmit={onSubmit}
      >
        <div className="mb-3">
          <label htmlFor="title">Titulo: </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full text-black"
            placeholder="titulo..."
            {...register("title", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description">Descripción: </label>
          <textarea
            name="description"
            id="description"
            rows="10"
            className="w-full text-black"
            placeholder="Describe tu tarea..."
            {...register("description", { required: true })}
          ></textarea>
        </div>
        {params.id ? (
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-sky-500 py-2 px-4 rounded hover:bg-sky-600 cursor-pointer"
            >
              Editar
            </button>
            <button
              type="button"
              onClick={() => deleteTask(taskId)}
              className="bg-red-500 py-2 px-4 rounded hover:bg-red-600 cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="bg-indigo-700 py-2 px-4 rounded hover:bg-indigo-800 cursor-pointer"
          >
            Crear
          </button>
        )}
      </form>
    </div>
  );
};

export default page;
