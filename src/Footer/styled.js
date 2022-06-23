import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 120px;
    width: 691px;
`;

export const Caption = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.slateGray};
`;

export const Email = styled.a`
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.mineShaft};
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    text-decoration: none;

    &:hover{
        color: ${({ theme }) => theme.colors.scienceBlue};
    }

    &:visited{
        color: ${({ theme }) => theme.colors.mineShaft};
    }

    &:active{
        color: ${({ theme }) => theme.colors.dodgerBlue};
    }
`;

export const Description = styled.p`
    margin-top: 24px;
    padding-right: 21px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.mineShaft};
`;

export const Icons = styled.div`
    margin-top: 56px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

export const IconLink = styled.a`

    &:hover{
        & path{
            fill: ${({ theme }) => theme.colors.scienceBlue};
            cursor: pointer;
        }
    }
    &:active{
        & path {
            fill: ${({ theme }) => theme.colors.dodgerBlue};
        }
    }
`;