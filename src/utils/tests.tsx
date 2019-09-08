import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Dark, Light } from '../theme';

const themes: any = {
  dark: Dark,
  light: Light,
};

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export function renderWithTheme(
  ui: React.ReactElement,
  theme: 'dark' | 'light'
) {
  return {
    ...render(<ThemeProvider theme={themes[theme]}>{ui}</ThemeProvider>),
  };
}
