import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function CaseStudyBody({ blocks = [] }) {
  if (!blocks.length) return null;

  return (
    <StackWrapper spacing={2}>
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <Typography key={index} variant="body1" color="text.secondary">
              {block.text}
            </Typography>
          );
        }

        if (block.type === 'list') {
          const ListTag = block.style === 'numbered' ? 'ol' : 'ul';
          return (
            <Box key={index} component={ListTag} sx={{ m: 0, pl: 3 }}>
              {block.items?.map((item) => (
                <Box component="li" key={item}>
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          );
        }

        // Unknown block type; skip rendering for now
        return null;
      })}
    </StackWrapper>
  );
}

function StackWrapper({ children, spacing }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: spacing,
      }}
    >
      {children}
    </Box>
  );
}
