interface SubTask {
  id: string;
  task: string;
  completed: boolean;
}
interface TodoType {
  task: string;
  subtask: SubTask[];
  completed: boolean;
  category: string;
}
interface Todo {
  data: [
    task: string,
    subtask: SubTask[],
    completed: boolean,
    category: string
  ];
}

// interface Data {
//   data: [
//     task: string,
//     subtask: SubTask[],
//     completed: boolean,
//     category: string
//   ];
//   title: String;
// }
