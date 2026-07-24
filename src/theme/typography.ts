import type { TypographyVariantsOptions } from '@mui/material/styles';
import { designTokens } from './generated/tokens';

const { typography, fontFamilies } = designTokens;

export const typographyOptions: TypographyVariantsOptions = {
  fontFamily: `${fontFamilies.body}, "Helvetica Neue", Arial, sans-serif`,
  h1: typography.h1,
  h2: typography.h2,
  h3: typography.h3,
  body1: typography.body1,
  body2: typography.body2,
  button: { ...typography.button, textTransform: 'none' },
};
