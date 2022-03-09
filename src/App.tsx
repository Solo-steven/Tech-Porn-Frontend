import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "system/theme";
import{ HomePage } from "pages/Home";
import { TeamPage } from "pages/Team";
import { ContentPage } from "pages/Content";
import { Navbar } from "components/Navbr";
import { Footer } from "components/Footer";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={{
                    "*": {
                        margin: 0,
                        padding: 0,
                        boxSizing: "border-box",
                        fontFamily: "'Roboto', sans-serif",
                    }
                }}
            />
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/team" element={<TeamPage/>} />
                    <Route path="/content" element={<ContentPage/>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
