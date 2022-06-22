import styled from "styled-components";

export const Repos = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;

export const Tile = styled.div`
    padding: 56px;
    border: 6px solid ${({ theme }) => theme.colors.iron};
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.h3`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.scienceBlue};
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
    color: ${({ theme }) => theme.colors.slateGray};
    margin: 24px 0 0 0;
`;

export const Demo = styled.p`
    color: ${({ theme }) => theme.colors.slateGray};
    margin-top: 24px;
    margin-bottom: 0px;
`;

export const Repo = styled.p`
    color: ${({ theme }) => theme.colors.slateGray};
    margin-top: 8px;
    margin-bottom: 0px;
`;

export const Link = styled.a`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.scienceBlue};
    line-height: 140%;
    letter-spacing: 0.05em;

    &:focus {
        color: ${({ theme }) => theme.colors.dodgerBlue};
    }
`;