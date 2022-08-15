import clsx from "clsx";
import { Icon } from "..";
import { STATUS, TodoItemTypes } from "../../types";

type TodoItemProps = {
  item: TodoItemTypes;
  deleteItem: (id: string) => void;
  changeStatus: (item: TodoItemTypes) => void;
};

export const TodoItem = ({ item, deleteItem, changeStatus }: TodoItemProps) => {
  const { text, status, id } = item;

  return (
    <li className="flex justify-between mb-4 group">
      <label className="border-b w-full pb-4 border-gray-200">
        <input
          name={id}
          className="w-5 h-5 border border-[#9F9A91] rounded mr-4"
          type="checkbox"
          checked={status === STATUS["Done"]}
          onChange={() => changeStatus(item)}
        />
        <span
          className={clsx(
            status === STATUS["Done"]
              ? "line-through text-[#9F9A91]"
              : "text-black"
          )}
        >
          {text}
        </span>
      </label>
      <button
        type="button"
        className="w-1 h-1 ml-3 mr-2"
        onClick={() => deleteItem(item.id)}
      >
        <span>
          <Icon.Close />
        </span>
      </button>
    </li>
  );
};
