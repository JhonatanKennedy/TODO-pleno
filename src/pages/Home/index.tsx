import { useState } from "react";
import { TodoItem } from "../../components/TodoItem";
import { MainItem } from "../../domain/items/main";

export const Home = () => {
  const [teste, setTeste] = useState(false);

  const [items] = useState(new MainItem());

  const alou = async () => {
    await items.createTODOItem({
      description: "teste1232",
      done: false,
    });
  };

  return (
    <div style={{ margin: "20px" }}>
      Home
      <br />
      <div style={{ width: "20%" }}>
        {items.allData.items.map((el) => (
          <div key={el.id}>{el.description}</div>
        ))}
        <TodoItem
          description="teste"
          done={teste}
          toggleItem={() => setTeste(!teste)}
          onDelete={alou}
          onEdit={() => null}
        />
      </div>
    </div>
  );
};

// useEffect(() => {
//   const handleGet = async () => {
//     const res = await fetch.get("http://localhost:3000/todoList");
//     console.log(res);
//   };
//   handleGet();
// }, []);

// const testeApi = () => {
//   fetch.post("http://localhost:3000/todoList", {
//     id: 1,
//     description: "teste123",
//     done: false,
//   });
// };

// const deleteApi = () => {
//   fetch.delete("http://localhost:3000/todoList/1");
// };
