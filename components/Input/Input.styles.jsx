import styled from "styled-components";

export const WrapperInput = styled.div`
  height: 45px;
  width: 98vw;
  
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0 0 0;
  
  border-radius: 5px;
  border: none;
  outline: none;

  padding: 0 10px;
  
`;

export const CardInput = styled.div`
 width: 95%;
 
`;

export const Input = styled.input`
  height: 45px;
  width: 98%;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 15px;
  ::placeholder {
    padding: 0 5px;
  }
`;

export const CardIcon = styled.div`
 cursor: pointer;
 border-radius: 50px;
 :hover {
  background-color: #cbcecb;
  padding: 5px;
 }
`;
