import { createGlobalStyle } from "styled-components";

// Global Font
const GlobalStyle = createGlobalStyle`
    @font-face { 
        font-family: "Poppins-Light"; 
        src: url("assets/fonts/Poppins/Poppins-Light.woff2"); 
    }; 

    body {
        font-family: "Poppins-Light";  
    }; 
`;

export default GlobalStyle;
