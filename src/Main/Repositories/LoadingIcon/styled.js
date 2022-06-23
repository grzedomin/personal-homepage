import styled, { keyframes } from "styled-components";
import { ReactComponent as IconSpinner } from "../../../svg/icon-spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(IconSpinner)`
    animation: ${rotate} 1s linear infinite;
    margin-top: 48px;
`;