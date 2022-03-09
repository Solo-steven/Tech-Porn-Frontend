import React from "react";
import { HomeCard } from "components/HomeCard";
import { HomeLayout } from "components/HomeLayout";
import * as Style from "./style";
import Image from "asset/mock/mock-image.png";

const TeamPage: React.FC = () => {
    return (
        <Style.Background>
            <Style.Container>
                <HomeLayout
                    direction="text-right"
                    textBlock={
                        <HomeCard
                            title={"關於我們"}
                            content={"程人頻道是誰女、蓮如昇糕你隊的用穹算做因原好且壁就殘別大小劃內。過物性囊腰磁更體、發糧該社人鳳、饋桿的錯直電宙建怎戮些果蛻近結好中？邂實張，趕立正呢不高，真樂得一發單萊蝦資不現杉迷戰吧題姜訊聽躬來副事。"}
                        />
                    }
                    imageBlock={<img src={Image} alt="test"/>}
                />
            </Style.Container>
        </Style.Background>
    );
};

export default TeamPage;