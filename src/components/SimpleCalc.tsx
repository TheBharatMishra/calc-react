// import { useState } from "react";

export default function SimpleCalc() {
  // const [count, setCount] = useState("");

  return (
    // <main>
    <main className="bg-orange-300 h-screen flex flex-col justify-center items-center w-screen font-bold p-20">
      <section className="bg-orange-500 flex justify-center items-center p-2 text-3xl w-96 h-10">
        {/* {count} */}
      </section>

      <section className="flex flex-row w-96">
        <div className="bg-gray-500 m-2 p-2">SHIFT</div>
        <div className="bg-gray-500 m-2 p-2">ALPHA</div>
        <div className="flex flex-row justify-center items-center bg-gray-500 p-2">
          <div>A</div>
          <div>
            <div>W</div>
            <div>S</div>
          </div>
          <div>D</div>
        </div>
        <div className="bg-gray-500 m-2 p-2">MODE CLR</div>
        <div className="bg-gray-500 m-2 p-2">ON</div>
      </section>

      <section className=" flex flex-row w-96 justify-center ">
        <div className="flex flex-row w-32 justify-evenly">
          <div className="bg-pink-200 flex flex-col">
            <div>x</div>
            <div>a b/c</div>
            <div>--</div>
            <div>RCL</div>
          </div>
          <div className="bg-pink-900 flex flex-col">
            <div>nCr</div>
            <div>Z</div>
            <div>'''</div>
            <div>ENG</div>
          </div>
        </div>
        <div className=" flex flex-row w-32 justify-evenly">
          <div className="bg-orange-200 flex flex-col">
            <div>x</div>
            <div>hyp</div>
            <div>{"("}</div>
          </div>
          <div className="bg-orange-900 flex flex-col">
            <div>^</div>
            <div>sin</div>
            <div>{")"}</div>
          </div>
        </div>

        <div className="flex flex-row w-32 justify-evenly">
          <div className="bg-red-200 flex flex-col">
            <div>{"Pol("}</div>
            <div>log</div>
            <div>cos</div>
            <div>'</div>
          </div>
          <div className="bg-red-900 flex flex-col">
            <div>x</div>
            <div>ln</div>
            <div>tan</div>
            <div>M+</div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center w-96">
        <div className="flex flex-row justify-between">
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>DEL</div>
          <div>AC</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>X</div>
          <div>/</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>+</div>
          <div>-</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>0</div>
          <div>.</div>
          <div>x10</div>
          <div>Ans</div>
          <div>=</div>
        </div>
      </section>
    </main>
  );
}
