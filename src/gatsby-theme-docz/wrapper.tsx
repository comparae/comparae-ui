import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Light } from '../theme';

const Wrapper = ({ children }: any) => (
  <ThemeProvider theme={Light}>{children}</ThemeProvider>
);

export default Wrapper;
