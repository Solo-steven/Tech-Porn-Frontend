import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const PreviewBlock = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 56px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(10, 15, 18, 0.8);
    backdrop-filter: blur(4px);
    color: #BAE5A3;
    font-size: 19px;
    line-height: 32px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Root = styled(motion.div)`
    overflow: hidden;
    position: relative;
`;



