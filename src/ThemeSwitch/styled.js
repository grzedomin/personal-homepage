import styled from "styled-components";
import { ReactComponent as SunIcon } from "../svg/Sun.svg";

export const Wrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
`;

export const Caption = styled.div`
     color: ${({ theme }) => theme.colors.slateGray};
     font-weight: 700;
     font-size: 12px;
     display: flex;
     flex-direction: row-reverse;
     gap: 12px;
     padding: 5px;
`;

export const Container = styled.span`
     width: 47px;
     padding: 2px;
     border: 1px solid;
     border-radius: 15px;
     background: rgb(229,229,229);

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
  transition: transform .3s;

&:active{
     transform: translateX(20px);
}
`;

export const Sun = styled(SunIcon)`

`;