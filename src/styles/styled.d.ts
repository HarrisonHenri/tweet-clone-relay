import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: { light: string; main: string; dark: string };
      secondary: { light: string; main: string; dark: string };
    };
    spacing: {
      small: string;
      medium: string;
      high: string;
    };
  }
}
