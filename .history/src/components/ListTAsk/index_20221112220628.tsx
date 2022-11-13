import { Container } from "./ListTask.styles";
import { Item } from "../../types/Item";

type Props = {
  task: Item
}

export function ListTask({ task }: Props) {
  return (
    <Container>
      {task.task}
    </Container>
  )
}