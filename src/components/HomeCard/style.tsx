import styled from "@emotion/styled";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    color: #BAE5A3;
    font-weight: 500;
    ${props => props.theme.breakpoints.xs} {
        font-size: 30px;
        line-height: 49px;
        text-align: center;
        margin-bottom: 36px;
    }
    ${props => props.theme.breakpoints.lg} {
        font-size: 36px;
        line-height: 66px;
        text-align: left;
        margin-bottom: 24px;
    }
`;

export const Content = styled.p`
    font-size: 19px;
    line-height: 32px;
    color: #FFFFFF;
    ${props => props.theme.breakpoints.xs} {
        margin-bottom: 36px;
    }
    ${props => props.theme.breakpoints.lg} {
        margin-bottom: 48px;
    }
`;

export const ButtonContainer = styled.div<{ justify? : "left" | "right"}>`
    display: flex;
    ${props => props.theme.breakpoints.xs} {
        justify-content: center;
    }
    ${props => props.theme.breakpoints.lg} {
        justify-content: ${({justify = "left"}) => justify === "left"  ? "flex-start" : "flex-end"}
    }
`;