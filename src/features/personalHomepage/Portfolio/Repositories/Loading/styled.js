import styled, { keyframes } from "styled-components";
import { ReactComponent as IconSpinner } from "../../../svg/icon-spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(IconSpinner)`
    animation: ${rotate} 1s linear infinite;
`;

export const LoadingInfo = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.headers};
    text-align: center;
    margin-top: 88px;
    margin-bottom: 48px;
`;