import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: 72px;
    text-align: center;
    color: ${({ theme }) => theme.colors.headers};

    @media (max-width: 767px){
        margin: 48px 0px;
    }
`;

export const Logo = styled.img`
    @media (max-width: 767px){
            width: 32px;
            height: 32px;
        }
`;

export const Header = styled.h2`
    margin-top: 13px;
    margin-bottom: 0px;
    letter-spacing: 0.05em;

    @media (max-width: 767px){
        font-size: 18px;
        line-height: 22px;
    }
`;

export const SubHeader = styled.p`
    margin-top: 8px;
    margin-bottom: 0px;
    letter-spacing: 0.05em;

    @media (max-width: 767px){
        margin-top: 16px;
        font-size: 17px;
        line-height: 140%;
    }
`;
