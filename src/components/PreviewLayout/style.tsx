import styled from "@emotion/styled/macro";

export const Root = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin-top: 80px ;
    ${props => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(2, 4fr);
        grid-column-gap: 20px;
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 20px;
    }
    ${props => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(4, 4fr);
        grid-column-gap: 20px;
        grid-template-rows: repeat(1, 1fr);
        grid-row-gap: 0px;
    }
`;