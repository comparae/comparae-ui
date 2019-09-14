import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme, LightTheme } from '../theme';

const themes: any = {
  dark: DarkTheme,
  light: LightTheme,
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
