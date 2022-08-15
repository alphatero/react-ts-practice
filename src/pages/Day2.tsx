import { FormEvent, ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";
import { AddItemForm, StatusTab, TodoItem } from "../components";
import { STATUS, TodoItemTypes } from "../types";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white rounded-lg shadow-md">{children}</div>;
};

export const Day2 = () => {
  const localList = JSON.parse(localStorage.getItem("todoList") || "[]");
  const [list, setList] = useState<TodoItemTypes[]>(localList);
  const [status, setStatus] = useState<STATUS | string>(STATUS.All);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formdata = new FormData(e.target as HTMLFormElement);
    const text = formdata.get("text") as string;

    createItem(text);
  };

  const createItem = (text: string) => {
    const newItem = {
      id: uuid(),
      text,
      status: STATUS["Todo"],
    };

    setList([...list, newItem]);
    localStorage.setItem("todoList", JSON.stringify([...list, newItem]));
  };

  const deleteItem = (id: string) => {
    setList(list.filter((item) => item.id !== id));
    localStorage.setItem(
      "todoList",
      JSON.stringify(list.filter((item) => item.id !== id))
    );
  };

  const deleteAll = () => {
    setList([]);
    localStorage.setItem("todoList", "[]");
  };

  const toggleStatus = (key: STATUS | string) => {
    setStatus(key);
  };

  const changeStatus = (item: TodoItemTypes) => {
    item.status === STATUS["Todo"]
      ? (item.status = STATUS["Done"])
      : (item.status = STATUS["Todo"]);
    setList([...list]);
    localStorage.setItem("todoList", JSON.stringify([...list]));
  };

  return (
    <div className="bg-white flex-1  font-medium">
      <div id="todoListPage" className="px-8 pt-6">
        <nav className="flex ">
          <h1>
            <a
              className=" 
               block w-[243px] h-[40px] overflow-hidden bg-[url('https://upload.cc/i1/2022/03/23/8vTzYG.png')] bg-no-repeat"
              href="#"
            ></a>
          </h1>
        </nav>
        <div className="flex flex-col items-center px-8 py-4">
          <div className="w-[500px] space-y-4">
            <Card>
              <AddItemForm onSubmit={onSubmit} />
            </Card>
            <Card>
              <StatusTab status={status} toggleStatus={toggleStatus} />
              <div className="pt-6 pb-8 pr-[17px] pl-6">
                <ul className="pb-2 text-black">
                  {list
                    .filter((item) =>
                      status === STATUS["All"] ? item : item.status === status
                    )
                    .map((item) => (
                      <TodoItem
                        item={item}
                        deleteItem={deleteItem}
                        changeStatus={changeStatus}
                      />
                    ))}
                </ul>
                <div className="flex justify-between text-black text-sm text">
                  <p>
                    {" "}
                    {
                      list.filter((item) => item.status === STATUS["Done"])
                        .length
                    }{" "}
                    個已完成項目
                  </p>
                  <button
                    type="button"
                    onClick={deleteAll}
                    className="text-gray-400"
                  >
                    清除已完成項目
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
