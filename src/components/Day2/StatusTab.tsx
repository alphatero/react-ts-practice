import clsx from "clsx";
import { STATUS } from "../../types";

type StatusTabProps = {
  status: string;
  toggleStatus: (key: STATUS | string) => void;
};

type Enum<E> = Record<keyof E, number | string> & { [k: string]: string };

export const StatusTab = ({ status, toggleStatus }: StatusTabProps) => {
  const statuses: Enum<typeof STATUS> = STATUS;

  return (
    <ul className="flex justify-between">
      {Object.keys(statuses).map((key, index) => (
        <li
          key={`tab_${index}`}
          className={clsx(
            "p-4",
            "border-b-2 border-gray-200",
            "text-gray-600 hover:text-black text-medium",
            "flex justify-center flex-1",
            status === statuses[key] && "border-black text-black"
          )}
          onClick={() => toggleStatus(statuses[key])}
        >
          <a href="#" className="active">
            {statuses[key]}
          </a>
        </li>
      ))}
    </ul>
  );
};
