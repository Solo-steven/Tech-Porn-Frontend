import React from "react";
import * as Style from "./style";
import Logo from "asset/Logo.svg";

const Navbar: React.FC = () => {
    return (
        <Style.Background>
            <Style.LayoutContainer>
                <img src={Logo} alt="logo"/>
                <Style.Spacer/>
                <Style.Link>{"關於我們"}</Style.Link>
                <Style.Link>{"聯絡我們"}</Style.Link>
                <Style.Link>{"Podcast"}</Style.Link>
                <Style.Link>{"文章"}</Style.Link>
            </Style.LayoutContainer>
        </Style.Background>
    );
};

export default Navbar;
