"use client";

import { deleteTask, FormState } from "@/actions/task";
import { FC, useActionState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskAction = deleteTask.bind(null, id);
  const initState: FormState = { error: "" };
  const [state, formAction, isPending] = useActionState(
    deleteTaskAction,
    initState
  );

  useEffect(() => {
    if (state && state.error !== "") {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="hover:text-gray-600 text-lg cursor-pointer disabled:text-gray-400"
        disabled={isPending}
      >
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
