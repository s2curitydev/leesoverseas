import styled from "styled-components";

export const BtnStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 60px;
  margin: 25px auto;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
  width: 100vw;
  height: auto;
`;
