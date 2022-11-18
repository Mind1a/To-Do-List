import styled from "styled-components";

export const PopupDiv = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const PopupOverlay = styled(PopupDiv)`
  background: rgba(49, 49, 49, 0.8);
`;

export const PopupContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

export const PopupName = styled.h1`
  margin: 20px 0px;
`;

export const PopupTasks = styled(PopupName)`
  margin: 20px 0px;
`;

export const PopupImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
`;

export const PopupDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const PopupLogOutBtn = styled.button`
  width: 60px;
  height: 50px;
  background-color: silver;
  border: none;
  font-size: 15px;
  border-radius: 4px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const PopupCloseBtn = styled.button`
  width: 60px;
  height: 50px;
  background-color: #e41b17;
  border: none;
  font-size: 15px;
  border-radius: 4px;
  margin-left: 5px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
