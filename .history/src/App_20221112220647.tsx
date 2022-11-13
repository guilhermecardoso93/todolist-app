import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { ListTask } from "./components/ListTask";
import { Item } from "./types/Item";

export function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      task: "Fazer um bolo",
      isDone: false,
    },
    {
      id: 2,
      task: "Fazer um projeto",
      isDone: false,
    },
  ]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

       {list.map((task) => (
        <ListTask  task={task} key={task.id}/>
       ))}
      </Area>
    </Container>
  );
}
