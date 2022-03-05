import React from "react";
import * as Style from "./style";

export interface HomeLayoutProps  {
    direction: "text-left" | "text-right";
    textBlock: React.ReactNode;
    imageBlock: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
    return (
        <Style.Root>
            {
                props.direction === "text-left" ? (
                    <>
                        <Style.Text direction={props.direction}>
                            {props.textBlock}
                        </Style.Text>
                        <Style.Image direction={props.direction}>
                            {props.imageBlock}
                        </Style.Image>
                    </>
                ): (
                    <>
                        <Style.Image direction={props.direction}>
                            {props.imageBlock}
                        </Style.Image>
                        <Style.Text direction={props.direction}>
                            {props.textBlock}
                        </Style.Text>
                    </>
                )
            }
        </Style.Root>
    );
};

export default HomeLayout;