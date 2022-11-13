import styled from "styled-components";

type ContainerProps = {
  isDone: boolean;
};

export const Container = styled.div(
  ({ isDone }: ContainerProps) =>
    `display: flex;
  background-color: #20212c;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  label {
    color: #ccc;
    text-decoration: ${isDone ? 'line-through': 'initial'}
  }`
);
