import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

// pt/mt = 5 * theme.spacing(1) (8px) = 40px, aligné sur le token spacing.xl.
export function FoundationsLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box sx={{ pt: 5, px: 2, pb: 4 }}>
      <Typography variant="h3" sx={{ lineHeight: 1.2 }}>
        {title}
      </Typography>
      <Box sx={{ mt: 5 }}>{children}</Box>
    </Box>
  );
}
