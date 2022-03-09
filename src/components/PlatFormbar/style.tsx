import styled from "@emotion/styled/macro";

export const Background = styled.div`
    background:  #00000000;
    margin-top: 80px ;
`;

export const Container = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const  Header = styled.div`
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF ;
    line-height: 44px;
`;

export const IconContainer =styled.div`
    margin-top: 44px;
`;

export const Icon = styled.img`
    ${props => props.theme.breakpoints.xs} {
        width: 44px;
        height: 44px;
        &+& {
            margin-left: 42px;
        }
    }
    ${props => props.theme.breakpoints.lg} {
        width: 64px;
        height: 64px;
        &+& {
            margin-left: 50px;
        }
    }
`;