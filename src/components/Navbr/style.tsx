import styled from "@emotion/styled/macro";
import { BaseContainer } from "system/Container";

export const Background = styled.div`
    background: #00000000;
    width: 100vw;
    position: absolute;
`;

export const Container = styled(BaseContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.theme.breakpoints.xs} {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    ${props => props.theme.breakpoints.lg} {
        padding-top: 39px;
        padding-bottom: 39px ;
    }
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;

export const Link = styled.div`
    padding: 8px;
    color: #FFFFFF;
    font-size: 19px;
    cursor: pointer;
    &:hover {
        color: #BAE5A3;
    }
    &+& {
        margin-left: 40px;
    }
`;

export const MenuIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="2" x2="20" y2="2" stroke="white" strokeWidth="4"/>
        <line y1="10" x2="20" y2="10" stroke="white" strokeWidth="4"/>
        <line y1="18" x2="20" y2="18" stroke="white" strokeWidth="4"/>
    </svg>

)