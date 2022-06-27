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

    @media (max-width: 767px){
        margin-top: 21px;
        margin-bottom: 31px;
    }

    @media (max-width: 1280px){
      margin: 21px 16px;
    }
}
`;