import React from "react";
import * as Style from "./style";
import Apple from "asset/Apple_Podcast_Icon.png";
import Spotify from "asset/Spotify_Podcast_Icon.png";
import KKBox from "asset/KKBox_Podcast_Icon.png";
import SoundOn from "asset/SoundOn_Podcast_Icon.png";
import YouTube from "asset/Youtube_Podcast_Icon.png";

const PlatFormBar: React.FC = () => {
    return (
        <Style.Background>
            <Style.Container>
                <Style.Header>{"在其他平台收聽"}</Style.Header>
                <Style.IconContainer>
                    <Style.Icon src={Apple} alt="apple-icon"/>
                    <Style.Icon src={Spotify} alt="apple-icon"/>
                    <Style.Icon src={KKBox} alt="apple-icon"/>
                    <Style.Icon src={SoundOn} alt="apple-icon"/>
                    <Style.Icon src={YouTube} alt="apple-icon"/>
                </Style.IconContainer>
            </Style.Container>
        </Style.Background>
    );
};

export default PlatFormBar;
