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
    width: 100vw;
`;

export const Container = styled(BaseContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.theme.breakpoints.xs} {
        flex-direction: column-reverse ;
        justify-content: center;
        padding-top:27.5px;
        padding-bottom: 27.5px;
    }
    ${props => props.theme.breakpoints.lg} {
        flex-direction: row ;
        justify-content: center;
        padding-top:27.5px;
        padding-bottom: 27.5px;
    }
`;

export const CopyRight = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    line-height: 25px;
    font-family: Roboto;
    font-weight: 400;
    text-align: center;
`;

export const Spacer = styled.div`
    flex-grow: 1;
    
`;

export const IconContainer = styled.div`
    display: flex ;
    justify-content: center;
    margin-bottom: 28px ;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    &+& {
        margin-left: 20px
    }
`;