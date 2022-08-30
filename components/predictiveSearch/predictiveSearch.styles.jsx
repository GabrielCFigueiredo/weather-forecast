import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
`;

export const WrapperCurrent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
  width: 300px;
`;
export const Temp = styled.span`
  font-size: 54px;
`;
export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 250px;
`;
export const CardNameCity = styled.div`
  padding: 50px 0;
`;
