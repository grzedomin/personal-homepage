import styled from "styled-components";
import { ReactComponent as Circle } from "../svg/circle.svg";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.tile.background};
    margin-top: 72px;
    padding: 32px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    transition: 0.4s;

    @media(max-width: 767px){
        margin: 50px 0;
        padding: 16px;
    };
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.headers};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    letter-spacing: 0.05em;

    @media(max-width: 767px){
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 12px;
        padding-right: 80px;
    };
`;

export const Content = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 32px;

    @media (max-width: 767px){
       margin-top: 12px;
       font-size: 14px;
    };
`;

export const Marker = styled(Circle)`
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    border-radius: 50%;
    margin-right: 16px;

    @media (max-width: 767px){
       height: 6px;
       width: 6px;
       margin-right: 8px;
    };
`;

export const List = styled.ul`
    list-style-type: none;
    line-height: 140%;
    letter-spacing: 0.05em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;

    @media (max-width: 767px){
        padding-left: 16px;
        grid-template-columns: 1fr;
        margin-bottom: 0;
    };
`;

export const Item = styled.li`

`;