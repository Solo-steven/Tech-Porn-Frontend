import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: { [key: string]:string }
  }
}