import { useEffect, useState } from "react";
import clsx from "clsx";

interface ObjectTypes {
  type: string;
  rate: number;
}

const exchangeRate: ObjectTypes[] = [
  {
    type: "美金",
    rate: 0.033,
  },
  {
    type: "日幣",
    rate: 4.44,
  },
  {
    type: "澳幣",
    rate: 0.048,
  },
  {
    type: "韓幣",
    rate: 43.7,
  },
  {
    type: "印尼幣",
    rate: 496.53,
  },
];

type listType = {
  input: number;
  output: number;
  type: string;
};

const Day1 = (): JSX.Element => {
  const [output, setOutput] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  const [money, setMoney] = useState<number>(5000);
  const [rateList, setRateList] = useState<ObjectTypes[]>(exchangeRate);
  const [list, setList] = useState<[] | listType[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (isNaN(Number(target.rate.value))) return;

    const newRate = {
      type: target.type.value,
      rate: Number(target.rate.value),
    };

    console.log(newRate);

    setRateList([...rateList, newRate]);
  };

  const handleClick = () => {
    const output = Number((input * rateList[type].rate).toFixed(2));

    setOutput(output);
    money - input < 0 ? setMoney(0) : setMoney(money - input);
    setList([...list, { input, output, type: rateList[type].type }]);
  };

  useEffect(() => {
    console.log(rateList);
  });

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="m-8">Day 1 - 匯率兌換</h1>

      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl">Lv1</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">幣種</label>
          <input
            type="text"
            name="type"
            id="type"
            className="p-2 rounded-lg text-gray-800"
          />
          <label htmlFor="rate">匯率</label>
          <input
            type="text"
            name="rate"
            id="rate"
            className="p-2 rounded-lg text-gray-800"
          />
          <button
            type="submit"
            className="bg-cyan-800 p-2 rounded-lg border border-white active:bg-cyan-900"
          >
            增加
          </button>
        </form>
        <div className="border border-white my-5 w-full"></div>
        <h2 className="text-3xl">Lv2</h2>
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
        <div className="flex justify-start space-x-4">
          <div className="flex flex-col  items-center space-x-4">
            <ul className="flex flex-col items-start w-full">
              {rateList.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
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
                  <p>{(item.rate * input).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <button
            className={clsx(
              "bg-cyan-800 p-2 rounded-lg border border-white active:bg-cyan-900",
              input > 0 && money > 0
                ? "cursor-pointer"
                : "cursor-not-allowed bg-gray-400"
            )}
            onClick={handleClick}
          >
            兌換
          </button>
        </div>
      </div>
      <div className="border border-white my-5"></div>
      <div>
        <h2 className="text-3xl my-2">Lv3</h2>
        <p className="text-xl text-left">您錢包有{money}元</p>
      </div>
      <div>
        <h2 className="text-3xl my-2">您的兌換紀錄</h2>
        <ul className="flex flex-col items-start">
          {list.length > 0 &&
            list.map((item, index) => (
              <li key={`list_${index}`} className="flex items-center ">
                <p>
                  您用{item.input}台幣，兌換了{item.output}
                  {item.type}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Day1;
