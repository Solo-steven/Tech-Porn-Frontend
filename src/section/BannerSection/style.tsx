import styled from "@emotion/styled/macro";
import { BaseContainer } from "system/Container";

export const BannerBackground = styled.div`
    background: 
        radial-gradient(
            30.97% 85.07% at 76.84% 37.7%,
            #1C3131 0%, 
            rgba(33, 65, 65, 0) 100%
        ), 
        radial-gradient(
             47.85% 46.43% at 10.14% -10.99%, 
             #1B2916 0%, 
             rgba(43, 62, 36, 0) 100%
         ), 
        radial-gradient(
            36.9% 48.16% at 28.58% 44.54%,
            #18271F 0%,
            rgba(27, 46, 35, 0) 100%
        ), 
        #000000;
`;

export const Container = styled(BaseContainer)`
    padding-top: 210px;
`;

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Primary = styled.h1`
    font-size: 80px;
    color: #BAE5A3;
    text-align: right;
`;

export const Secondary = styled.h3`
    font-size: 36px;
    color: #FFFFFF;
    text-align: right;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

