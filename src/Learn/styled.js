import styled from "styled-components";
import { ReactComponent as Circle } from "../svg/circle.svg";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 72px;
    padding: 32px;
    border-radius: 4px;
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.mineShaft};
    border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
    letter-spacing: 0.05em;
`;

export const Content = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.slateGray};
    margin-top: 32px;
`;

export const Marker = styled(Circle)`
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    border-radius: 50%;
    margin-right: 16px;
`;

export const List = styled.ul`
    list-style-type: none;
    line-height: 140%;
    letter-spacing: 0.05em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
`;

export const Item = styled.li`

`;