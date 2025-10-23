import { useState, useEffect } from "react";

export default function CountSet() {
  const [count, setCount] = useState(() => {
    const memory = localStorage.getItem("num");
    return memory ? Number(memory) : 0;
  });

  useEffect(() => {
    localStorage.setItem("num", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(Math.max(0, count - 1))}>Убавить</button>
      <button onClick={() => setCount(Math.min(10, count + 1))}>
        Прибавить
      </button>
    </div>
  );
}
