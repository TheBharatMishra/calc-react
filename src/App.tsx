import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-orange-300 h-screen border-8 border-orange-500">
      <section className="bg-orange-500 px-20 py-5 bottom-1/2 left-1/2 absolute">
        <div>{count}</div>
      </section>
      <section>
        <div>+</div>
        <div>-</div>
        <div>x</div>
        <div>÷</div>
        <div>C</div>
        <div>DEL</div>
        <div>.</div>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div onClick={() => setCount(3)}>3</div>
        <div>4</div>
      </section>
    </main>
  );
}

export default App;
