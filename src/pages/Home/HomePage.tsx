import React from "react";
import { Navbar } from "components/Navbr";
import { BannerSection } from "section/BannerSection";
import { IntroSection } from "section/IntroSection";
import { PodcastSection } from "section/PodcastSection";
import { ArticleSection } from "section/ArticleSection";
import { DiscordSection } from "section/DiscordSection";
import { Footer} from "components/Footer";
 
const HomePage: React.FC = () => {
    return (
        <>
            <Navbar/>
            <BannerSection />
            <IntroSection />
            <PodcastSection/>
            <ArticleSection/>
            <DiscordSection/>
            <Footer/>
        </>
    );
};

export default HomePage;