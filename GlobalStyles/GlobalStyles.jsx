import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    transition: 0.5s;
}

body {
    font-family: "Roboto",sans-serif;
    color: white
}

a {
    text-decoration: none;
    font-weight: bold;
    transition: 0.5s;
}

`;