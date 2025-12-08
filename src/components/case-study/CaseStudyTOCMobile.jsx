import * as React from 'react';
import { Box, Button, Divider, Drawer, IconButton, Link, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CaseStudyTOCMobile({ sections = [], toc = {} }) {
  const [open, setOpen] = React.useState(false);
  const sectionsById = React.useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section.id] = section;
        return acc;
      }, {}),
    [sections],
  );

  if (!toc?.enabled || !sections.length) return null;

  const availableIds = sections.map((section) => section.id);
  const sectionIds = toc.sectionIds?.length ? toc.sectionIds : availableIds;
  const filteredIds = sectionIds.filter((id) => availableIds.includes(id));

  if (!filteredIds.length) return null;

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <Button variant="outlined" size="small" onClick={() => setOpen(true)} aria-label="Open sections">
        Sections
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="bottom"
        transitionDuration={0}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { borderTopLeftRadius: 16, borderTopRightRadius: 16, p: 2 } }}
      >
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" color="text.primary">
              Sections
            </Typography>
            <IconButton aria-label="Close sections" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <Stack component="ul" spacing={1} sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {filteredIds.map((id) => (
              <Box component="li" key={id}>
                <Link
                  href={`#${id}`}
                  underline="hover"
                  color="primary"
                  sx={{ fontWeight: 600 }}
                  onClick={() => setOpen(false)}
                >
                  {sectionsById[id]?.title || id}
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}
