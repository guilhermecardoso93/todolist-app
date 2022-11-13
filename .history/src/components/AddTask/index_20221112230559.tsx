import { useState, KeyboardEvent } from "react";
import { Container } from "./AddTask.styles";

type AddTaskProps = {
  onEnter: (taskName: string) => void;
};

export function AddTask({ onEnter }: AddTaskProps) {
  const [inputTask, setInputTask] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" && inputTask !== "") {
      console.log(e.code)

      onEnter(inputTask);
    }
  }

  return (
    <Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
}
