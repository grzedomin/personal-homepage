import styled from "styled-components";
import { ReactComponent as Icon } from "../../../svg/ErrorIcon.svg";

export const Wrapper = styled.div`
    margin-top: 88px;
    color: ${({ theme }) => theme.colors.headers};
    margin-bottom: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h3`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    line-height: 29px;
    letter-spacing: 0.05em;
    margin-top: 24px;
    margin-bottom: 0px;
`;

export const SubHeader = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-top: 32px;
    margin-bottom: 0px;
`;

export const ErrorIcon = styled(Icon)`
    margin-top: 8px;

    & path {
        stroke: ${({ theme }) => theme.colors.icons}
    }
`;

export const Button = styled.a`
    width: 138px;
    margin-top: 32px;
    padding: 12px 16px 12px 18px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonLink.text};
    border: 1px solid rgba(209, 213, 218, 0.1);
    border-radius: 4px;
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
    }
    &:active{
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;