import React from "react";
import * as Style from "./style";
import Button from "system/Button";

export interface HomeCardProps {
    title: string;
    content: string;
    buttonText?: string;
    showButton?: boolean
    buttonDirection?: "left" | "right";
    buttonLink?: string;
}

const HomeCard: React.FC<HomeCardProps> = (props) => {
    return (
        <Style.Container>
            <Style.Title>{props.title}</Style.Title>
            <Style.Content>{props.content}</Style.Content>
            {
                props.showButton ? (
                    <Style.ButtonContainer>
                        <Button>{props.buttonText}</Button>
                    </Style.ButtonContainer>
                ) : null
            }
        </Style.Container>
    );
}

export default HomeCard;