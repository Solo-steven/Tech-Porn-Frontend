import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "system/theme";
import{ HomePage } from "pages/Home";


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
            <HomePage />
        </ThemeProvider>
    );
};

export default App;
