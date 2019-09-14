import { DefaultTheme } from 'styled-components';

import { colors } from './colors';
import { typography } from './typography';

export const LightTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: colors.primary,
    background: colors.grey,
    red: colors.red,
  },
  ...typography,
};
