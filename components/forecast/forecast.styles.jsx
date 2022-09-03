import styled from "styled-components";

export const CardCurrent = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 80vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 90vh;
`;

export const WrapperForecast = styled.div`

  overflow-x: scroll;
  width: 100%;
  height: 250px;

  background-color: black;
  opacity: .7;
`;

export const CardTempMaxAndMin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Temperature = styled.span`
  font-size: 54px;
`;

export const CardTempAndImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 90%;
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
`;

export const WrapperForecastNextHours = styled.div`
  display: flex;
`;
export const CardForecastNextHours = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
