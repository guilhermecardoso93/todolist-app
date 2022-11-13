import { useState } from "react";
import { Container } from "./ListTask.styles";
import { Item } from "../../types/Item";

type Props = {
  task: Item
  onChange: (id: number, done: boolean) => void
}

export function ListTask({ task, onChange }: Props) {
  const [ isChecked, setIsChecked] = useState(task.isDone)

  return (
    <Container isDone={isChecked}>
     <input 
      type='checkbox' 
      checked={isChecked}
      onChange={e => setIsChecked(e.target.checked)}
      />
     <label>{task.task}</label>
    </Container>
  )
}