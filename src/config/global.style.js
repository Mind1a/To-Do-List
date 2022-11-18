import { createGlobalStyle } from "styled-components";

// Global Font
const GlobalStyle = createGlobalStyle`
    @font-face { 
        font-family: "Poppins-Light";
        src: url("assets/fonts/Poppins/Poppins-Light.ttf"); 
    }; 

    body {
        font-family: "Poppins-Light";  
    }; 
`;

export default GlobalStyle;
