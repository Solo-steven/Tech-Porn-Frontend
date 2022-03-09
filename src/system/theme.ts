
const mediaQueryString = ( breakpoints: { [key: string]: number} ) => {
    const breakpointsString : { [key: string]: string} = {};
    for(const [key, value] of Object.entries(breakpoints)) {
        breakpointsString[key] = `@media (min-width: ${value}px)`;
    }
    return breakpointsString;
};

export const theme = {
    breakpoints: mediaQueryString({
        xs: 0,
        sm: 600,
        lg: 900,
    })
};


export default theme;
