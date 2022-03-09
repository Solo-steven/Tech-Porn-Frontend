import styled from "@emotion/styled";

export const BaseContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
    ${props => props.theme.breakpoints.xs} {
        padding: 60px 20px;
    }
    ${props => props.theme.breakpoints.lg} {
        padding: 90px 20px;
    }
`;

export default BaseContainer;
