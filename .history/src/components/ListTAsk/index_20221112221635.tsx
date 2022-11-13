import { useState } from "react";
import { Container } from "./ListTask.styles";
import { Item } from "../../types/Item";

type Props = {
  task: Item
}

export function ListTask({ task }: Props) {
  const [ isChecked, setIsChecked] = useState(task.isDone)

  return (
    <Container>
     <input type='checkbox' checked={isChecked}/>
     <label>{task.task}</label>
    </Container>
  )
}