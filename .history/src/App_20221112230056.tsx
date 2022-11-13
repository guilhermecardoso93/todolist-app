import { useState } from "react";
import { Area, Container, Header } from "./App.styles";
import { AddTask } from "./components/AddTask";
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
      isDone: true,
    },
  ]);


  function handleAddTask(taskName: string) {
    let newList = [...list]

    newList.push({
      id: 123,
      task: '',
      isDone: false,
    })
    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        <AddTask/>

       {list.map((task) => (
        <ListTask  task={task} key={task.id}/>
       ))}
      </Area>
    </Container>
  );
}
