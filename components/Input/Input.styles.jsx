import styled from "styled-components";

export const WrapperInput = styled.div`
  padding: 10px ;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  height: 45px;
  width: 350px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

export const Input = styled.input`
  height: 45px;
  width: 300px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 20px;
  ::placeholder {
    padding: 0 5px;
  }
`;
