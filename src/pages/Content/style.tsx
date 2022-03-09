import styled from "@emotion/styled/macro";
import { BaseContainer } from "system/Container";

export const Background = styled.div`
    background-color: #0D151A ;
`;

export const Container = styled(BaseContainer)`
    ${props => props.theme.breakpoints.xs} {
        padding-top: 210px !important;
    }
`;
