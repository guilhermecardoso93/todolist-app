import { Container } from "./AddTask.styles";

export function AddTask() {
return (
  <Container>
    <div className="image">
      ➕
    </div>
    <input 
      type='text'
      placeholder='Adicione um tarefa'
    />
  </Container>
)
}