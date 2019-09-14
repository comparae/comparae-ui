import { DefaultTheme } from 'styled-components';

import { colors } from './colors';
import { typography } from './typography';

export const DarkTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: colors.primary,
    background: colors.greyDark,
    red: colors.red,
  },
  ...typography,
};
