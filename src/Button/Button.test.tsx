import * as React from 'react';
import { renderWithTheme } from '../utils/tests';

import { Button } from './Button';

describe('<Button />', () => {
  it('renders with Light theme', () => {
    const { container } = renderWithTheme(
      <Button color="primary">Test</Button>,
      'dark'
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
  });

  it('renders with Light theme', () => {
    const { container } = renderWithTheme(
      <Button color="primary">Test</Button>,
      'light'
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
  });
});
