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
    background-image: url("https://img.freepik.com/fotos-gratis/fundo-aquarela-pintado-a-mao-com-forma-de-ceu-e-nuvens_24972-1108.jpg?w=1380&t=st=1661433855~exp=1661434455~hmac=6937f9421f52e7142f5a239d36d7fec239b002d7323841d5baacda8307063623");
    background-repeat: no-repeat;
    background-size: cover;
}

a {
    text-decoration: none;
    font-weight: bold;
    transition: 0.5s;
}

`;