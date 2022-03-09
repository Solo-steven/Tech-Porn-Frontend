import styled from "@emotion/styled/macro";

export const Background  = styled.div`
    background: #0A0F12;;
    width: 100vw;
`;

export const LayoutContainer = styled.div`
    ${props => props.theme.breakpoints.xs} {
        display: flex;
        flex-direction: column-reverse;
    }
    ${props => props.theme.breakpoints.lg} {
        display: block;
    }
`;


