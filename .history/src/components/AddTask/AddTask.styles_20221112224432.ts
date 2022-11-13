import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 10px;
  margin: 20px 0px;
  border-radius: 10px;
  border: 1px solid #555;

  .image {
    margin-right: 10px;
  }

  input { 
    border: none;
    background: none;
    outline: 0;
    color: #fff;
    font-size: 18px;
    width: 100%;
  }
`;
