import styled from "styled-components";
import { ReactComponent as Icon } from "../svg/Button-icon.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    transition: 0.4s;

    @media (max-width: 767px){
        display: flex;
        flex-direction: column;
        gap: 0;
    };
    
`;

export const Image = styled.img`
    height: 398px;
    width: 398px;
    border-radius: 50%;

    @media (max-width: 767px){
        max-height: 132px;
        max-width: 132px;
    };
`;

export const Content = styled.div`
    margin: 64px 0px 12px 0px;

    @media (max-width: 767px){
        margin-top: 12px;
    };
`;

export const Caption = styled.span`
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textPrimary};
    letter-spacing: 0.05em;

    @media (max-width: 767px){
       font-size: 12px;
    };
`;

export const Header = styled.h1`
    margin-bottom: 35px;
    font-weight: 900;
    font-size: 38px;
    color: ${({ theme }) => theme.colors.headers};
    letter-spacing: 0.05em;

    @media (max-width: 767px){
        margin-bottom: 0px;
        margin-top: 8px;
        font-size: 22px;
    };
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: 767px){
        margin-top: 16px;
        margin-bottom: 24px;
        font-size: 17px;
        word-wrap: break-word;
    };
`;

export const Button = styled.a`
    width: 124px;
    margin-top: 32px;
    padding: 12px 16px 12px 18px;
    background-color: ${({ theme }) => theme.colors.buttonLink.background};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover{
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        cursor: pointer;
        transition: 0.6s;
    }
    &:active{
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;

export const ButtonIcon = styled(Icon)`
    margin-right: 18px;
`;