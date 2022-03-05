import React from "react";
import { Global } from "@emotion/react";
import{ HomePage } from "pages/Home";

const App: React.FC = () => {
    return (
        <div>
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
        </div>
    );
};

export default App;
