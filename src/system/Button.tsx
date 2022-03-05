import styled from "@emotion/styled";

export const Button = styled.button`
    width: 160px;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #BAE5A3;
    background: #00000000;
    border: 2px solid #425454;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px;

    &:hover {
        background: #BAE5A3;
        color: #000000;
        border: 2px solid #BAE5A3;
        transition: all .2s;
    }
`;

export default Button;