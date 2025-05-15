import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const completedTasks = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: "no-store",
  });
  if (completedTasks.status !== 200) {
    throw new Error("200以外のステータスコード");
  }
  const data = await completedTasks.json();
  return data.tasks as TaskDocument[];
};

const CompletedTaskPage = async () => {
  const tasks = await getCompletedTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          Completed Tasks
        </h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskPage;
