import { Schema, model, models } from "mongoose";

// enum Category {
//   Productivity,
//   Assignments,
//   Works,
// }

const TodoSchema = new Schema<TodoType>({
  task: {
    type: String,
  },
  subtask: [
    {
      id: {
        type: String,
        unique: true,
      },
      task: {
        type: String,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  completed: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ["productivity", "assignments", "work"],
  },
});

const Todo = models.Todo || model<TodoType>("Todo", TodoSchema);
export default Todo;
