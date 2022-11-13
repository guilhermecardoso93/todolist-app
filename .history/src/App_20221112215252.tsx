import { useState } from 'react';
import { Area, Container, Header } from  './App.styles'
import { Item } from './types/Item';



export function App() {
  const [ list, setList] = useState<Item[]>([
    {
      id:1,
      task: 'Fazer um bolo',
      isDone: false
    }
  ])


  return (
  <Container>
    <Area>
    <Header>
      Lista de Tarefas
      </Header>
    </Area>
  </Container>
  );
}
