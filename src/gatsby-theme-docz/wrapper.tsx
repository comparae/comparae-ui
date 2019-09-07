import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorMode } from 'theme-ui';

import { Dark, Light } from '../theme';

const themes: any = {
  dark: Dark,
  light: Light,
};

const Wrapper = ({ children }: any) => {
  const [colorMode] = useColorMode();

  return <ThemeProvider theme={themes[colorMode]}>{children}</ThemeProvider>;
};

export default Wrapper;
