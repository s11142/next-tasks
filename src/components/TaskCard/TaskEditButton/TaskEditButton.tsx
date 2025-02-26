import Link from "next/link";
import { FC } from "react";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

const TaskEditButton: FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
      <FaPen className="hover:text-gray-500 text-lg cursor-pointer" />
    </Link>
  );
};

export default TaskEditButton;
