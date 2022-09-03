import styled from "styled-components";

export const WrapperLayout = styled.div`
  background-image: url("/tempo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 16px;


  max-width: 100%;
  height: 100vh;

  @media(min-width: 400px) {
    background-image: url("/desktop.png");
    
  }
`;
