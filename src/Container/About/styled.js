import styled from "styled-components";
import { ReactComponent as Icon } from "../../svg/Button-icon.svg";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
`;

export const Image = styled.img`
    height: 398px;
    width: 398px;
    border-radius: 50%;
`;

export const Content = styled.div`
    margin: 64px 0px 12px 0px;
`;

export const Caption = styled.span`
    font-weight: 700;
    font-size: 15px;
    color: ${({theme}) => theme.colors.slateGray};
`;

export const Header = styled.h1`
    margin-bottom: 35px;
    font-weight: 900;
    font-size: 38px;
    color: ${({theme}) => theme.colors.mineShaft};
`;

export const Description = styled.p`
    font-weight: 400px;
    font-size: 20px;
    line-height: 28px;
    color: ${({theme}) => theme.colors.slateGray};
`;

export const Button = styled.a`
    width: 124px;
    margin-top: 32px;
    padding: 12px 16px 12px 18px;
    background-color: ${({theme}) => theme.colors.scienceBlue};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: ${({theme}) => theme.colors.white};
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

export const ButtonIcon = styled(Icon)`
    margin-right: 18px;
`;