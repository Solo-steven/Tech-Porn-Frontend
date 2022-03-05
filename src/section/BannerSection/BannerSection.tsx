import React from "react";
import { HomeLayout } from "components/HomeLayout";
import * as Style from "./style";
import Image from "asset/Banner.png";

const BannerSection: React.FC = () => {
    return (
        <Style.BannerBackground>
            <Style.Container>
                <HomeLayout
                    direction="text-left"
                    textBlock={
                        <Style.TextBlock>
                            <Style.Primary>{"程人頻道"}</Style.Primary>
                            <Style.Secondary>{"最真實的工程師Podcast"}</Style.Secondary>
                        </Style.TextBlock>
                    }
                    imageBlock={
                        <Style.Image src={Image} alt="banner"/>
                    }
                />
            </Style.Container>
        </Style.BannerBackground>
    );
};

export default BannerSection;