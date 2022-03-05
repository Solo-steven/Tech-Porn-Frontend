import styled from "@emotion/styled/macro";
import BaseContainer from "system/Container";

export const Root = styled.div`
    background: 
        radial-gradient(29.63% 227.87% at 81.56% 74.46%,
        rgba(84, 129, 149, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%),
        radial-gradient(90.18% 470.2% at 30.87% 26.43%,
        rgba(78, 104, 77, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%),
        #0E0F0C;
`;

export const Container = styled(BaseContainer)`
    padding-top:27.5px;
    padding-bottom: 27.5px;
    display: flex;
    justify-content: center
`;

export const CopyRight = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    font-family: Roboto;
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    &+& {
        margin-left: 20px
    }
`;