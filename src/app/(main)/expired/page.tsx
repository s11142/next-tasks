import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import React from "react";

const fetchExpiredTasks = async (): Promise<TaskDocument[]> => {
  const expiredTasks = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: "no-store",
  });
  if (expiredTasks.status !== 200) {
    throw new Error("200以外のステータスコード");
  }
  const data = await expiredTasks.json();
  return data.tasks;
};

const ExpiredTaskPage = async () => {
  const tasks = await fetchExpiredTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
