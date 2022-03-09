import React from "react";
import { BannerSection } from "section/BannerSection";
import { IntroSection } from "section/IntroSection";
import { PodcastSection } from "section/PodcastSection";
import { ArticleSection } from "section/ArticleSection";
import { DiscordSection } from "section/DiscordSection";
 
const HomePage: React.FC = () => {
    return (
        <>
            <BannerSection />
            <IntroSection />
            <PodcastSection/>
            <ArticleSection/>
            <DiscordSection/>
        </>
    );
};

export default HomePage;