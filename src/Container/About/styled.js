import styled from "styled-components";

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