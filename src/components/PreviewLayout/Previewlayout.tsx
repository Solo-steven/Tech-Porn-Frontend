import React from "react";
import * as Style from "./style";

const PreviewLayout: React.FC = ({children}) => {
    return (
        <Style.Root>
            {children}
        </Style.Root>
    );
};

export default PreviewLayout;

