import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  width: 100%;
  height: 90vh;
`;

export const WrapperCurrent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100vw;
`;
export const CardTempMaxAndMin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const CardTempAndImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 90%;
  
`;

export const CardMoment = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Temp = styled.span`
  font-size: 54px;
`;
export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
`;
export const CardNameCity = styled.div`
  padding: 50px 0;
`;
