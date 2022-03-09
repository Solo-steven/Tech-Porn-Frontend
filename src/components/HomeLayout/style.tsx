import styled from "@emotion/styled";

export const Root = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    ${props => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 2fr;
        grid-column-gap: 20px;
        grid-row-gap: 40px;
    }
    ${props => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
    }
`;

export const Text = styled.div<{direction: "text-left" | "text-right";}>`
    ${props => props.theme.breakpoints.xs} {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end:  3;
    }
    ${props => props.theme.breakpoints.lg} {
        grid-column-start: ${(props)=> props.direction === "text-left" ? 1 : 8 };
        grid-column-end:${(props)=> props.direction === "text-left" ? 6 : 13 };
        grid-row-start: 1;
        grid-row-end:  2;
    }
`;

export const Image = styled.div<{direction: "text-left" | "text-right";}>`
    ${props => props.theme.breakpoints.xs} {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end:  2;
    }
    ${props => props.theme.breakpoints.lg} {
        grid-column-start: ${(props)=> props.direction === "text-left" ? 7 : 1 };
        grid-column-end:${(props)=> props.direction === "text-left" ? 13 : 7 };
        grid-row-start: 1;
        grid-row-end:  2;
    }
`;