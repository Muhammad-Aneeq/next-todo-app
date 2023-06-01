import { connectMongoDb } from "@/app/libs/mongoDbConnection/Connection";
import Todo from "@/app/libs/modal/Todo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data: TodoType = await request.json();

  if (request.method !== "POST") {
    return NextResponse.json({ message: "Only POST are allowed." });
  }

  try {
    await connectMongoDb();
    const Todos = await Todo.create(data);
    if (Todos) {
      return NextResponse.json({
        message: "Todo created sucessfully",
      });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  if (request.method !== "GET") {
    return NextResponse.json({ message: "Only GET are allowed." });
  }
  try {
    await connectMongoDb();
    const Todos = await Todo.find({ category });

    if (Todos) {
      return NextResponse.json({
        data: Todos,
      });
    }
  } catch (error) {}
}
