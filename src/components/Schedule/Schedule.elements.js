import styled from "styled-components";
import hours from "../../images/hours.png";

export const scheduleObj = {
  lightBg: true,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  description:
    "",
  headline: "Closed on Sun-Monday",
  lightText: false,
  topLine: "Restaurant Hours",
  img: hours,
  alt: "image",
  start: "true",
};

export const GoogleMap = styled.div`
  background-color: #fff;
  margin: 25px 0px;
  border: 5px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;
