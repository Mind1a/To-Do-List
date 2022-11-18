import React, { useEffect } from "react";

import {
  PopupDiv,
  PopupOverlay,
  PopupContent,
  PopupName,
  PopupTasks,
  PopupImg,
  PopupDescription,
  PopupButtons,
  PopupCloseBtn,
  PopupLogOutBtn,
} from "./Popupstyled";

const Popup = ({ logOut, userName, userImg, totalTask, modal, closeModal }) => {
  useEffect(() => {}, [totalTask]);
  return (
    <>
      {modal && (
        <PopupDiv>
          <PopupOverlay onClick={closeModal}></PopupOverlay>
          <PopupContent>
            <PopupDescription>
              <PopupName>Hello {userName}</PopupName>{" "}
              <PopupImg src={userImg}></PopupImg>
              <PopupTasks> Total tasks : {totalTask} </PopupTasks>
            </PopupDescription>
            <PopupButtons>
              {" "}
              <PopupLogOutBtn onClick={logOut}>Log Out</PopupLogOutBtn>
              <PopupCloseBtn onClick={closeModal}>Close</PopupCloseBtn>
            </PopupButtons>
          </PopupContent>
        </PopupDiv>
      )}
    </>
  );
};

export default Popup;
