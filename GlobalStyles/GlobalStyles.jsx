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
    background-image: url("https://img.freepik.com/vetores-gratis/fundo-lindo-nuvens-com-design-de-ceu-azul_1017-25501.jpg?w=1380&t=st=1661615467~exp=1661616067~hmac=8b55dc92d18c1b85d5ac2a6d6e166ac702d30da72329f4d4bae5e6c40da1ae21");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: white
}

a {
    text-decoration: none;
    font-weight: bold;
    transition: 0.5s;
}

`;