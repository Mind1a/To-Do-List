import React from "react";

// Import Styled components
import { Home, HomeMainImg, HomeTitle, HomeButton } from "./MainPage.styled";
import { useAuth } from "../../components/Login/auth";

export const MainPage = () => {
  const auth = useAuth();

  return (
    <Home>
      <HomeMainImg />
      <HomeTitle> Keep Track Of Daily Tasks In Life </HomeTitle>
      <HomeButton to={auth.profileImg ? "/todo" : "/registration"}>
        Get Started
      </HomeButton>
    </Home>
  );
};
