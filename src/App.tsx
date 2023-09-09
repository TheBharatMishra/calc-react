import { useState } from "react";

function App() {
  const [count, setCount]: any = useState("");

  return (
    <main className="bg-orange-300 h-screen flex flex-col justify-center items-center w-screen font-bold p-20">
      <section className="bg-orange-500 flex justify-center items-center p-2 text-3xl w-full">
        <div>{count}</div>
      </section>
      <section className="grid-cols-3 w-full grid p-4 content-center justify-items-center bg-orange-900 text-2xl">
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + ".")}
        >
          .
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "0")}
        >
          0
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount("")}
        >
          C
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count / 100)}
        >
          %
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "+")}
        >
          +
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "-")}
        >
          -
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "*")}
        >
          *
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "/")}
        >
          /
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "1")}
        >
          1
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "2")}
        >
          2
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "3")}
        >
          3
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "4")}
        >
          4
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "5")}
        >
          5
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "6")}
        >
          6
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "7")}
        >
          7
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "8")}
        >
          8
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(count + "9")}
        >
          9
        </div>
        <div
          className="p-8 px-20 hover:bg-red-700"
          onClick={() => setCount(eval(count))}
        >
          =
        </div>
      </section>
    </main>
  );
}

export default App;
