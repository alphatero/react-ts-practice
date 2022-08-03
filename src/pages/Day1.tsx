import { useState } from "react";
import clsx from "clsx";

interface ObjectTypes {
  type: string;
  rate: number;
}

const exchangeRate: ObjectTypes[] = [
  {
    type: "美金",
    rate: 29.996,
  },
  {
    type: "人民幣",
    rate: 4.431219,
  },
];

const Day1 = (): JSX.Element => {
  const [output, setOutput] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [type, setType] = useState<number>(0);

  const handleClick = () => {
    const rate = exchangeRate[type].rate;
    setOutput(Number((input / rate).toFixed(2)));
  };

  return (
    <div>
      <h1 className="m-8">Day 1 - 匯率兌換</h1>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2 items-center">
          <label htmlFor="input">台幣</label>
          <input
            type="number"
            name="input"
            id="input"
            className="p-2 rounded-lg text-gray-800"
            onChange={(e) => setInput(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-between space-x-4">
          <button
            className={clsx(
              "bg-cyan-800 p-2 rounded-lg border border-white",
              input > 0 ? "cursor-pointer" : "cursor-not-allowed bg-gray-400"
            )}
            onClick={handleClick}
          >
            兌換
          </button>
          <div className="flex items-center space-x-4">
            {exchangeRate.map((item, index) => (
              <button
                className={clsx(
                  "border border-white p-2",
                  index === type && "bg-cyan-800"
                )}
                key={`type_${index}`}
                onClick={() => {
                  setType(index);
                }}
              >
                {item.type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <label htmlFor="output">輸出</label>
          <input
            type="number"
            name="output"
            id="output"
            value={output}
            className="p-2 rounded-lg text-gray-800"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Day1;
