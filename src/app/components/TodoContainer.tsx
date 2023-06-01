"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";

const TodoContainer = (tododata: any) => {
  // console.log("tododata>>>", tododata);
  const { data, title } = tododata.tododata;

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isSubTask, setIsSubTask] = useState<Boolean>(false);
  const [checked, setChecked] = useState<Boolean>(false);
  const [subChecked, setSubChecked] = useState<Boolean>(false);
  // const [val, setval] = useState<String>("");
  const [todo, setTodo] = useState<TodoType>({
    task: "",
    subtask: [
      {
        id: "",
        task: "",
        completed: false,
      },
    ],
    completed: false,
    category: "",
  });

  const handleCategory = (title: string) => {
    console.log("title>>>", title);
    setIsOpen(!isOpen);
    setTodo({ ...todo, category: title });
  };
  const handleSubmit = async () => {
    console.log("todo>>>", todo);
    try {
      const res = await fetch("http://127.0.0.1:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      const json = await res.json();
      if (json) {
        console.log("res>>>", json);
        reset();
      }
    } catch (error) {}
  };

  const handleUpdate = () => {};

  const reset = () => {
    console.log("its working");
    setTodo({
      task: "",
      subtask: [
        {
          id: "",
          task: "",
          completed: false,
        },
      ],
      completed: false,
      category: "",
    });
  };
  console.log("todo", todo);
  return (
    <div className="py-6">
      <section className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div>
            <Image src="/icon.png" width="20" height="20" alt="icon" />
          </div>
          <div>
            <p className="font-semibold capitalize">{title}</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <MdKeyboardArrowDown
            // onClick={() => setIsOpen(!isOpen)}
            onClick={() => handleCategory(title)}
          />
        </div>
      </section>
      {isOpen && (
        <section>
          <div>
            <ul>
              {data &&
                data.map((task: any, i: number) => (
                  <li key={i}>
                    <section className="flex justify-between items-center py-4">
                      <div className="flex gap-5 items-center">
                        <div>
                          {/* <input type="checkbox" /> */}
                          <Checkbox
                            onChange={() => setChecked(!checked)}
                            color="default"
                            checked={task.completed || checked}
                          />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => setIsSubTask(!isSubTask)}
                        >
                          <p
                            // className={`${
                            //   task.completed === true || checked === true
                            // }? line-through : none `}
                            className={
                              task.completed === true || checked === true
                                ? "line-through"
                                : "none"
                            }
                          >
                            {task.task}
                          </p>
                        </div>
                      </div>

                      <div>
                        <button
                          className="font-semibold"
                          onClick={handleUpdate}
                        >
                          Edit
                        </button>
                      </div>
                    </section>
                    {isSubTask && (
                      <section className="ms-4">
                        <div>
                          <ul>
                            {task.subtask &&
                              task.subtask.map((subtask: any, i: number) => (
                                <li key={i}>
                                  <section className="flex gap-5 items-center py-4">
                                    <div>
                                      <Checkbox
                                        onChange={() =>
                                          setSubChecked(!subChecked)
                                        }
                                        color="default"
                                        checked={
                                          subtask.completed || subChecked
                                        }
                                      />
                                    </div>
                                    <div>
                                      <p>{subtask.task}</p>
                                    </div>
                                  </section>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className="flex gap-5 items-center py-4">
                          <div>
                            <Image
                              src="/icon.png"
                              width="20"
                              height="20"
                              alt="icon"
                            />
                          </div>
                          <div className="w-[80%]">
                            <input
                              className="outline-none w-full"
                              type="text"
                              placeholder="Write a SubTask..."
                            />
                          </div>
                        </div>
                      </section>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex gap-5 items-center py-4">
            <div>
              <Image src="/icon.png" width="20" height="20" alt="icon" />
            </div>
            <div className="w-[80%] flex items-center">
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Write a Task..."
                onChange={(e) => setTodo({ ...todo, task: e.target.value })}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="font-semibold cursor-pointer"
            >
              Add
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default TodoContainer;
