import { ReactNode } from "react";
import { Icon } from "../components/Icon";

const AddItemForm = () => {
  return (
    <div className="flex relative">
      <input
        type="text"
        className="w-full h-[47px] border-none rounded-lg pl-4 text-gray-800"
        placeholder="請輸入待辦事項"
      />
      <a href="#" className="w-12 h-12 block absolute right-0">
        <span className="w-5 h-5">
          <Icon.Add />
        </span>
      </a>
    </div>
  );
};

const StatusTab = () => {
  return (
    <ul className="flex justify-between">
      <li className="text-gray-600 border-b-2 border-gray-200 p-4 hover:text-black text-medium flex justify-center flex-1">
        <a href="#" className="active">
          全部
        </a>
      </li>
      <li className="text-gray-600 border-b-2 border-gray-200 p-4 hover:text-black text-medium flex-1 flex justify-center">
        <a href="#">待完成</a>
      </li>
      <li className="text-gray-600 border-b-2 border-gray-200 p-4 hover:text-black text-medium flex-1 flex justify-center">
        <a href="#">已完成</a>
      </li>
    </ul>
  );
};

const TodoItem = () => {
  return (
    <li className="flex justify-between mb-4 group">
      <label className="border-b w-full pb-4 border-gray-200">
        <input
          className="w-5 h-5 border border-[#9F9A91] rounded mr-4"
          type="checkbox"
          value="true"
        />
        <span className=" line-through text-[#9F9A91]">
          把冰箱發霉的檸檬拿去丟
        </span>
      </label>
      <a href="#" className="w-1 h-1 ml-3 mr-2">
        <span>
          <Icon.Close />
        </span>
      </a>
    </li>
  );
};

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white rounded-lg shadow-md">{children}</div>;
};

export const Day2 = () => {
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
              <AddItemForm />
            </Card>
            <Card>
              <StatusTab />
              <div className="pt-6 pb-8 pr-[17px] pl-6">
                <ul className="pb-2 text-black">
                  <TodoItem />
                </ul>
                <div className="flex justify-between text-black text-sm text">
                  <p> 5 個已完成項目</p>
                  <a href="#" className="text-gray-400">
                    清除已完成項目
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
