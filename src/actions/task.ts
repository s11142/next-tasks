"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    console.error(error);
    return { error: "タスクの作成に失敗しました" };
  }

  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get("isCompleted")),
  };

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    await connectDb();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    console.error(error);
    return { error: "タスクの更新に失敗しました" };
  }

  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {
  try {
    await connectDb();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    console.error(error);
    return { error: "タスクの削除に失敗しました" };
  }

  redirect("/");
};
