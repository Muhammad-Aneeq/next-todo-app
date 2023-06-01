import Image from "next/image";

import TodoContainer from "./components/TodoContainer";
import getProductivityTodos from "./libs/data/getProductivityTodos";
import getAssignmentTodos from "./libs/data/getAssignmentTodos";
import getWorkTodos from "./libs/data/getWorkTodos";

export default async function Home() {
  const productivityData: Promise<Todo> = getProductivityTodos();
  const productivity = await productivityData;
  const assignmentTodos: Promise<Todo> = getAssignmentTodos();
  const assignments = await assignmentTodos;
  const workTodos: Promise<Todo> = getWorkTodos();
  const work = await workTodos;
  const productivityTodo = {
    ...productivity,
    title: "productivity",
  };
  const assignmentsTodo = {
    ...assignments,
    title: "assignments",
  };
  const workTodo = {
    ...work,
    title: "work",
  };
  return (
    <div className="w-[450px] min-h-[600px]  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]   mx-auto my-16">
      <Image
        className="w-full"
        src="/header.png"
        alt="header"
        width="64"
        height="500"
      />
      <div className="px-12 py-8">
        <TodoContainer tododata={productivityTodo} />
        <TodoContainer tododata={assignmentsTodo} />
        <TodoContainer tododata={workTodo} />
      </div>
    </div>
  );
}
