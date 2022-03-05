import styled from "@emotion/styled/macro";
import { BaseContainer } from "system/Container";

export const Background = styled.div`
    background: #00000000;
    width: 100vw;
    position: absolute;
`;

export const LayoutContainer = styled(BaseContainer)`
    display: flex;
    justify-content: center;
    padding-top: 39px;
    padding-bottom: 39px ;
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