import styled from "@emotion/styled";

export const Root = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;
`;

export const Text = styled.div<{direction: "text-left" | "text-right";}>`
    grid-column-start: ${(props)=> props.direction === "text-left" ? 1 : 8 };
    grid-column-end:${(props)=> props.direction === "text-left" ? 6 : 13 };
`;

export const Image = styled.div<{direction: "text-left" | "text-right";}>`
    grid-column-start: ${(props)=> props.direction === "text-left" ? 7 : 1 };
    grid-column-end:${(props)=> props.direction === "text-left" ? 13 : 7 };
`;