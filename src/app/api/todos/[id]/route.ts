import { connectMongoDb } from "@/app/libs/mongoDbConnection/Connection";
import Todo from "@/app/libs/modal/Todo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request", request);
  // const data: any = await request.json();
  // console.log("data>>>", data);
  // if (request.method !== "POST") {
  //   return NextResponse.json({ message: "Only POST are allowed." });
  // }

  // try {
  //   await connectMongoDb();
  //   const Todos = await Todo.updateOne(
  //     { _id: params.id },
  //     { $set: { completed: data } },
  //     { new: true }
  //   );
  //   if (Todos) {
  //     return NextResponse.json({
  //       message: "Todo Updated sucessfully",
  //     });
  //   }
  // } catch (error) {
  //   console.log("error", error);
  // }
}
