import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Login/auth";
import { useImg } from "../../components/PhotoUpload/PhotoUpload";
// Import Syled Components
import {
  Registration,
  RegistrationSection,
  RegistrationTitle,
  RegistrationForm,
  PhotoTitle,
  PhotoUpload,
  InputTitle,
  InputFill,
  RegistrationButton,
  RegistrationLabel,
  UploadImgIcon,
} from "./RegistrationPage.styled";

export const RegistrationPage = () => {
  // Authorization
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user && imgUp.Image) {
      auth.login(user);
      navigate("/todo", { replace: true });
    }
  };

  // import from Photo Upload
  const imgUp = useImg();

  // set User name
  const setUserName = (e) => {
    setUser(e.target.value);
  };
  const uploadImgInput = (e) => {
    imgUp.uploadImage(e);
  };

  // local storage

  useEffect(() => {
    window.localStorage.setItem("userName", user);
  }, [user]);

  useEffect(() => {
    window.localStorage.setItem("profileImg", imgUp.Image);
  }, [imgUp.Image]);

  return (
    <Registration>
      <RegistrationSection>
        <RegistrationTitle>Get Started</RegistrationTitle>
        <RegistrationForm onSubmit={handleLogin}>
          <PhotoTitle>add a photo</PhotoTitle>
          <PhotoUpload onClick={() => imgUp.clickElement(imgUp.triggerClick)}>
            {imgUp.Image ? (
              <UploadImgIcon src={imgUp.Image} />
            ) : (
              <UploadImgIcon src="assets/svg/photoFill.svg" />
            )}
          </PhotoUpload>
          <input
            required
            style={{ display: "none" }}
            type="file"
            onChange={uploadImgInput}
            ref={imgUp.triggerClick}
          />
          <InputTitle>fill in you name</InputTitle>
          <RegistrationLabel>
            <InputFill
              required
              placeholder="your name"
              type="text"
              onChange={setUserName}
            />
            <RegistrationButton type="submit">Sign In</RegistrationButton>
          </RegistrationLabel>
        </RegistrationForm>
      </RegistrationSection>
    </Registration>
  );
};
