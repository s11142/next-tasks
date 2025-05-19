import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  props: {
    params: Promise<{
      id: string;
    }>;
  }
) => {
  const params = await props.params;
  try {
    await connectDb();
    const task: TaskDocument | null = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json(
        {
          message: "タスクが存在しません",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json({
      message: "タスク取得成功",
      task,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "タスク取得失敗",
      },
      {
        status: 500,
      }
    );
  }
};

export const dynamic = "force-dynamic";
