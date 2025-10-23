import { useState } from "react";

export default function Tab() {
  const [active, setActiveTab] = useState("tab1");
  return (
    <>
      <button onClick={() => setActiveTab("tab1")}>Профиль</button>
      <button onClick={() => setActiveTab("tab2")}>Настройки</button>
      <button onClick={() => setActiveTab("tab3")}>История</button>

      <div>
        {active === "tab1" && <h1>Первый</h1>}
        {active === "tab2" && <h1>Второй</h1>}
        {active === "tab3" && <h1>Третий</h1>}
      </div>
    </>
  );
}
