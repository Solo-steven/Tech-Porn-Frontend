import React from "react";
import * as Style from "./style";
import Logo from "asset/Logo.svg";
import ProfileIcon from "asset/Profile-Icon.png";
import theme from "system/theme";
import useMediaQuery from "system/useMediaQuery";

const Navbar: React.FC = () => {
    const match = useMediaQuery(theme.breakpoints.lg.split("a ")[1]);
    return (
        <Style.Background>
            <Style.Container>
                <img src={Logo} alt="logo"/>
                <Style.Spacer/>
                { match ?  (
                    <>
                        <Style.Link>{"關於我們"}</Style.Link>
                        <Style.Link>{"聯絡我們"}</Style.Link>
                        <Style.Link>{"Podcast"}</Style.Link>
                        <Style.Link>{"文章"}</Style.Link>
                        <Style.Link>
                            <img src={ProfileIcon} alt="profile"/>
                        </Style.Link>
                    </>
                ): <Style.MenuIcon />}
            </Style.Container>
        </Style.Background>
    );
};

export default Navbar;
