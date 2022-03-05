import React from "react";
import * as Style from "./style";
import { useSpring, useTransform } from "framer-motion";

interface PreviewCardProps {
    imgSrc: string;
    previewText: string;
}

const PreviewCard: React.FC<PreviewCardProps> = (props) => {
    const opacity = useSpring(0) ;
    const y = useTransform(opacity, [0,1], ["-100%","0%"])
    return (
        <Style.Root 
            onHoverEnd={()=> {  opacity.set(0)}}
            onHoverStart={()=> { opacity.set(1) }}
        >
            <Style.Image src={props.imgSrc} alt=""/>
            <Style.PreviewBlock style={{y, opacity}} >{props.previewText}</Style.PreviewBlock>
        </Style.Root>
    );
};

export default PreviewCard;
