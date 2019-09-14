import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      background: string;
      red: string;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: Array<number>;
    fontWeights: {
      body: number;
      heading: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    letterSpacings: {
      body: string;
      caps: string;
    };
  }
}
