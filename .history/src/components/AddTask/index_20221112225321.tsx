import { useState } from "react";
import { Container } from "./AddTask.styles";

export function AddTask() {
  const [ inputTask, setInputTask ] = useState('')

return (
  <Container>
    <div className="image">
      ➕
    </div>
    <input 
      type='text'
      placeholder='Adicione uma tarefa'
      value={inputTask}
      onChange={e => setInputTask(e.target.value)}
    />
  </Container>
)
}