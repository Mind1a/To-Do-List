import styled from "styled-components";

export const Todo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const TodoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  width: 100vw;
  min-height: 110px;
  overflow-x: hidden;
  overflow-wrap: break-word;
  overflow-y: hidden;
  @media (max-width: 425px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  color: #ffffff;
  font-weight: 900;
  margin-left: 30px;
  cursor: pointer;
  @media (max-width: 425px) {
    margin-left: 0px;
  }
`;

export const HeaderUserDiv = styled.div`
  display: flex;
  overflow-x: hidden;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const HeaderName = styled.span`
  display: flex;
  align-items: center;
  color: white;
  font-size: 22px;
  margin-right: 20px;
  padding: 10px;
  word-break: break-word;
  @media (max-width: 425px) {
    margin-right: 0px;
  }
`;

export const HeaderImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderImg = styled.img`
  width: 68px;
  height: 68px;
  margin-right: 30px;
  border-radius: 50%;
  @media (max-width: 425px) {
    margin-right: 0px;
  }
`;

export const TodoBody = styled.div``;

export const TodoTitle = styled.h1`
  color: #000000;
  font-size: 42px;
  font-weight: 600;
  margin-top: 35px;
  text-align: center;
  margin-bottom: 30px;
`;
export const TodoList = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  max-width: 595px;
  min-height: 54px;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const TodoSpan = styled.span`
  font-size: 22px;
  color: white;
  margin: 0px 10px;
`;

export const TodoText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 15px;
  word-break: break-word;
`;

export const TodoIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ImageSpan = styled.span``;

export const TodoEditImg = styled.img`
  width: 25px;
  height: 18px;
  cursor: pointer;
`;

export const TodoDoneImg = styled.img`
  width: 25px;
  height: 18px;
  cursor: pointer;
`;

export const TodoRemoveImg = styled.img`
  width: 25px;
  height: 18px;
  cursor: pointer;
  color: red;
`;

//
export const TodoUpdateDiv = styled.button`
  border: none;
  width: 54px;
  background-color: ${(props) => props.color};
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 50px;
  }
`;

//
export const TodoSetDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
  word-break: break-word;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TodoSetInpuDiv = styled.input`
  width: 487px;
  height: 76px;
  border: none;
  background-color: #e6ebff;
  border-radius: 4px;
  font-size: 22px;
  padding-left: 25px;
  word-break: break-word;
  @media (min-width: 390px) {
    width: 388px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;
export const TodoSetBtnDiv = styled.button`
  width: 108px;
  height: 76px;
  background-color: #5efc8d;
  border: none;
  font-size: 32px;
  border-radius: 4px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

TodoEditImg.defaultProps = {
  src: "assets/img/edit.png",
};
TodoDoneImg.defaultProps = {
  src: "assets/svg/done.svg",
};
TodoRemoveImg.defaultProps = {
  src: "assets/svg/recycleBin.svg",
};
