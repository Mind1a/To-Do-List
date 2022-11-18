import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: black;
`;

export const HomeMainImg = styled.img`
  margin: 74px 0px 46px 0px;
  max-width: 90px;
  height: 165px;
`;

export const HomeTitle = styled.h1`
  color: #ffffff;
  font-size: 54px;
  text-transform: capitalize;
  margin-bottom: 150px;
  text-align: center;
`;

export const HomeButton = styled(Link)`
  display: flex;
  max-width: 388px;
  min-height: 98px;
  background-color: #5efc8d;
  color: #000000;
  border-radius: 4px;
  font-size: 48px;
  text-transform: capitalize;
  padding: 0px 50px;
  align-items: center;
  text-align: center;

  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`;

HomeMainImg.defaultProps = {
  src: "assets/svg/todo.svg",
};
