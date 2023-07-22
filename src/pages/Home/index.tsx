import { useState } from "react";
import { TodoItem } from "../../components/TodoItem";

export const Home = () => {
  const [teste, setTeste] = useState(false);
  return (
    <div style={{ margin: "20px" }}>
      Home
      <br />
      <div style={{ width: "20%" }}>
        <TodoItem
          description="teste"
          done={teste}
          toggleItem={() => setTeste(!teste)}
          onDelete={() => console.log("delete")}
          onEdit={(e) => console.log(e)}
        />
      </div>
    </div>
  );
};
