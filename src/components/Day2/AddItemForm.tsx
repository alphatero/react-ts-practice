import { FormEvent } from "react";
import { Icon } from "..";

type AddItemFormProps = {
  onSubmit: (e: FormEvent) => void;
};

export const AddItemForm = ({ onSubmit }: AddItemFormProps) => {
  return (
    <form className="flex relative" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        className="w-full h-[47px] border-none rounded-lg pl-4 text-gray-800"
        placeholder="請輸入待辦事項"
      />
      <button type="submit" className="w-12 h-12 block absolute right-0">
        <span className="w-5 h-5">
          <Icon.Add />
        </span>
      </button>
    </form>
  );
};
