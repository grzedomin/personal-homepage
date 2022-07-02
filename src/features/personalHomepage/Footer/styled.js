import styled from "styled-components";

export const Wrapper = styled.footer`
    margin-top: 130px;
    margin-bottom: 109px;
    max-width: 691px;
    
    @media(max-width: 767px){
        margin: 0px 0px 31px;
    };
`;

export const Caption = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: 767px){
        font-size: 12px;
        line-height: 130%;
    };
`;

export const Email = styled.a`
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.headers};
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    text-decoration: none;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
        transition: 0.5s;
    }

    &:visited{
        color: ${({ theme }) => theme.colors.link.active};
    }

    &:active{
        color: ${({ theme }) => theme.colors.link.active};
    }

    @media(max-width: 767px){
        font-size: 18px;
        line-height: 22px;
        margin-top: 12px;
    };
`;

export const Description = styled.p`
    margin-top: 24px;
    padding-right: 21px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.headers};

    @media(max-width: 767px){
        font-size: 14px;
        line-height: 17px;
        margin-top: 12px;
    };
`;

export const Icons = styled.div`
    margin-top: 56px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    transition: 0.4s;

    @media(max-width: 767px){
       margin-top: 40px;
    };

`;

export const IconLink = styled.a`
& path {
    fill: ${({theme}) => theme.colors.icons}
}

    &:hover{
        & path{
            fill: ${({ theme }) => theme.colors.primary};
            cursor: pointer;
            transition: 0.5s;
        }
    }
    &:active{
        & path {
            fill: ${({ theme }) => theme.colors.link.active};
        }
    }
`;