import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorMode } from 'theme-ui';

import { DarkTheme, LightTheme } from '../theme';

const themes: any = {
  dark: DarkTheme,
  light: LightTheme,
};

const Wrapper = ({ children }: any) => {
  const [colorMode] = useColorMode();

  return <ThemeProvider theme={themes[colorMode]}>{children}</ThemeProvider>;
};

export default Wrapper;
