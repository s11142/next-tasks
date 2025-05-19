import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
  } catch (e) {
    console.log("DB接続に失敗しました", e);
    throw new Error();
  }
};
