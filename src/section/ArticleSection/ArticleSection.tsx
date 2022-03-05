import React from "react";
import * as Style from "./style";
import { BaseContainer } from "system/Container";
import { HomeLayout } from "components/HomeLayout";
import { HomeCard  } from "components/HomeCard";
import { PreviewCard } from "components/PreviewCard";
import { PreviewLayout } from "components/PreviewLayout";
import Image from "asset/mock/13-12-image.png";
import Article01 from "asset/mock/article01.png";
import Article02 from "asset/mock/article02.png";
import Article03 from "asset/mock/article03.png";
import Article04 from "asset/mock/article04.png";

const IntroSection: React.FC = () => {
    return (
        <Style.Background>
            <BaseContainer>
                <HomeLayout 
                    direction="text-right"
                    textBlock={
                        <HomeCard
                            title="閱讀我們的文章"
                            content="程人頻道是誰女、蓮如昇糕你隊的用穹算做因原好且壁就殘別大小劃內。過物性囊腰磁更體、發糧該社人鳳、饋桿的錯直電宙建怎戮些果蛻近結好中？邂實張，趕立正呢不高，真樂得一發單萊蝦資不現杉迷戰吧題姜訊聽躬來副事。在胎跟"
                            buttonText="閱讀更多"
                            buttonDirection="left"
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
                <PreviewLayout>
                    <PreviewCard imgSrc={Article01} previewText={"歐盟執委會提案 給予烏克蘭難民臨時居留權"} />
                    <PreviewCard imgSrc={Article02} previewText={"歐盟執委會提案 給予烏克蘭難民臨時居留權"}/>
                    <PreviewCard imgSrc={Article03} previewText={"歐盟執委會提案 給予烏克蘭難民臨時居留權"} />
                    <PreviewCard imgSrc={Article04} previewText={"歐盟執委會提案 給予烏克蘭難民臨時居留權"} />
                </PreviewLayout>
            </BaseContainer>
        </Style.Background>
    );
};

export default IntroSection;