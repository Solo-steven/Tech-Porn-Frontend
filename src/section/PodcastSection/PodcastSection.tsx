import React from "react";
import * as Style from "./style";
import { BaseContainer } from "system/Container";
import { HomeLayout } from "components/HomeLayout";
import { HomeCard  } from "components/HomeCard";
import { PlatformBar } from "components/PlatFormbar";
import { PreviewCard } from "components/PreviewCard";
import { PreviewLayout } from "components/PreviewLayout";
import podcast01 from "asset/mock/Podcast01.png";
import podcast02 from "asset/mock/Podcast02.png";
import podcast03 from "asset/mock/Podcast03.png";
import podcast04 from "asset/mock/Podcast04.png";
import Image from "asset/mock/13-12-image.png";

const IntroSection: React.FC = () => {
    return (
        <Style.Background>
            <BaseContainer>
                <HomeLayout 
                    direction="text-left"
                    textBlock={
                        <HomeCard
                            title="聆聽我們的 Podcast"
                            content="程人頻道是誰女、蓮如昇糕你隊的用穹算做因原好且壁就殘別大小劃內。過物性囊腰磁更體、發糧該社人鳳、饋桿的錯直電宙建怎戮些果蛻近結好中？邂實張，趕立正呢不高，真樂得一發單萊蝦資不現杉迷戰吧題姜訊聽躬來副事。在胎跟"
                            buttonText="聆聽更多"
                            buttonDirection="right"
                        />
                    }
                    imageBlock={
                        <img 
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            src={Image}
                            alt="mock"
                        />
                    }
                />
                <PlatformBar />
                <PreviewLayout>
                    <PreviewCard imgSrc={podcast01} previewText={"EP113 | 以色列文化衝擊！留學心態與選擇？複利成長的過程！ ft. Eileen"} />
                    <PreviewCard imgSrc={podcast02} previewText={"EP113 | 以色列文化衝擊！留學心態與選擇？複利成長的過程！ ft. Eileen"}/>
                    <PreviewCard imgSrc={podcast03} previewText={"EP113 | 以色列文化衝擊！留學心態與選擇？複利成長的過程！ ft. Eileen"} />
                    <PreviewCard imgSrc={podcast04} previewText={"EP113 | 以色列文化衝擊！留學心態與選擇？複利成長的過程！ ft. Eileen"} />
                </PreviewLayout>
            </BaseContainer>
        </Style.Background>
    );
};

export default IntroSection;