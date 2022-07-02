import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
};

::before, ::after {
    box-sizing: inherit;
};

body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    max-width: 1216px;
    margin: 119px auto;
    transition: 0.4s;

    @media (max-width: 1280px){
      margin: 21px 16px;
    }

    @media (max-width: 767px){
        margin: 21px 16px 31px 16px;
    }
}
`;