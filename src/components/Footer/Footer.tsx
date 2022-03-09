import React from "react";
import * as Style from "./style";
import Apple from "asset/Apple-footer.png";
import Spotify from "asset/Spotify-footer.png";
import KKBox from "asset/kkbox-footer.png";
import SoundOn from "asset/soundon-footer.png";
import Youtube from "asset/youtube-footer.png";
import FB from "asset/fb-footer.png";
import IG from "asset/ig-footer.png";

const Footer: React.FC = () => {
    return (
        <Style.Root>
            <Style.Container>
                 <Style.CopyRight>{"Copyright © 2022 程人頻道. All rights reserved."}</Style.CopyRight>
                 <Style.Spacer/>
                 <Style.IconContainer>
                    <Style.Icon src={Apple} alt="footer-icon"/>
                    <Style.Icon src={Spotify} alt="footer-icon"/>
                    <Style.Icon src={KKBox} alt="footer-icon"/>
                    <Style.Icon src={SoundOn} alt="footer-icon"/>
                    <Style.Icon src={Youtube} alt="footer-icon"/>
                    <Style.Icon src={FB} alt="footer-icon"/>
                    <Style.Icon src={IG} alt="footer-icon"/>
                 </Style.IconContainer>
            </Style.Container>
        </Style.Root>
    );
};

export default Footer;
