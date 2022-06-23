import styled from "styled-components";
import { ReactComponent as Icon } from "../../../svg/ErrorIcon.svg";

export const Wrapper = styled.div`
    margin-top: 88px;
    color: ${({ theme }) => theme.colors.mineShaft};
    margin-bottom: 140px;
`;

export const Header = styled.h3`
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    line-height: 29px;
    letter-spacing: 0.05em;
    margin-top: 24px;
`;

export const SubHeader = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-top: 32px;
`;

export const ErrorIcon = styled(Icon)`
    margin-top: 8px;
`;