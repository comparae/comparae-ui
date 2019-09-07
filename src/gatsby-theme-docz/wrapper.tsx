import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { LightTheme } from '../theme';

const Wrapper = ({ children }: any) => (
  <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
);

export default Wrapper;
