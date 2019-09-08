import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Button } from './Button';
import { Dark, Light } from '../theme';

describe('<Button />', () => {
  it('renders with Light theme', () => {
    const { container } = render(
      <ThemeProvider theme={Dark}>
        <Button color="primary">Test</Button>
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#000');
  });

  it('renders with Light theme', () => {
    const { container } = render(
      <ThemeProvider theme={Light}>
        <Button color="primary">Test</Button>
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
  });
});
