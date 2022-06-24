import styled from "styled-components";

export const Repos = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;

export const Tile = styled.div`
    padding: 56px;
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    background-color: ${({ theme }) => theme.colors.tile.background};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    text-align: left;
  

    &:hover{
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const Header = styled.h3`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.tile.tileHeader};
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    margin: 0px;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 24px 0 0 0;
`;

export const Demo = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 24px;
    margin-bottom: 0px;
    letter-spacing: 0.05em;
`;

export const Repo = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 8px;
    margin-bottom: 0px;
    letter-spacing: 0.05em;
`;

export const Link = styled.a`
    margin-left: 8px;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 140%;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(3, 102, 214, 0.2);
    text-decoration: none;

    &:focus {
        color: ${({ theme }) => theme.colors.link.active};
    }

    &:hover{
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;