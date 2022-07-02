import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../Sun.svg";

export const Wrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
`;

export const Caption = styled.div`
     color: ${({ theme }) => theme.colors.textPrimary};
     font-weight: 700;
     font-size: 12px;
     display: flex;
     flex-direction: row-reverse;
     gap: 12px;
     padding: 5px;
`;

export const Container = styled.button`
     width: 47px;
     padding: 2px;
     border: 1px solid ${({ theme }) => theme.colors.textPrimary};
     border-radius: 15px;
     background: ${({ theme }) => theme.colors.themeSwitch.background};

     &:hover{
          cursor: pointer;
     }
`;

export const IconBody = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: transform .6s;
  background: ${({ theme }) => theme.colors.themeSwitch.iconBackground};
  
  ${({ iconTransition }) =>
          iconTransition && css`
          transform: translateX(20px);
          & path {
            fill: ${({ theme }) => theme.colors.themeSwitch.iconSun};
        }
    `};
`;

export const Sun = styled(SunIcon)``;