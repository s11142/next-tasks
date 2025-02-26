import { FC } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
    <form action="">
      <button
        type="submit"
        className="hover:text-gray-500 text-lg cursor-pointer"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
