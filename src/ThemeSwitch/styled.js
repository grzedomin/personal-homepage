import styled from "styled-components";

export const Container = styled.div`
     color: ${({theme}) => theme.colors.slateGray};
     font-weight: 700;
     font-size: 12px;
     display: flex;
     flex-direction: row-reverse;
     gap: 12px;
     padding: 5px;
`;