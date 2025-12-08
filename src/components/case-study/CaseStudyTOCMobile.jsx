import * as React from 'react';
import { Box, Button, Divider, Drawer, IconButton, Link, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CaseStudyTOCMobile({ sections = [], toc = {}, activeSectionId }) {
  const [open, setOpen] = React.useState(false);
  const isTOCEnabled = Boolean(toc?.enabled);
  const sectionsById = React.useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section.id] = section;
        return acc;
      }, {}),
    [sections],
  );

  const availableIds = React.useMemo(() => sections.map((section) => section.id), [sections]);
  const sectionIds = React.useMemo(
    () => (toc.sectionIds?.length ? toc.sectionIds : availableIds),
    [toc.sectionIds, availableIds],
  );
  const filteredIds = React.useMemo(
    () => sectionIds.filter((id) => availableIds.includes(id)),
    [sectionIds, availableIds],
  );

  if (!isTOCEnabled || !sections.length || !filteredIds.length) return null;

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
            {filteredIds.map((id) => {
              const isActive = id === activeSectionId;

              return (
                <Box component="li" key={id}>
                  <Link
                    href={`#${id}`}
                    underline="hover"
                    color={isActive ? 'text.primary' : 'primary'}
                    aria-current={isActive ? 'location' : undefined}
                    sx={(t) => ({
                      display: 'block',
                      fontWeight: isActive ? 700 : 600,
                      px: 0.5,
                      py: 0.75,
                      borderRadius: t.shape.borderRadius,
                      backgroundColor: isActive ? t.palette.action.hover : 'transparent',
                    })}
                    onClick={() => setOpen(false)}
                  >
                    {sectionsById[id]?.title || id}
                  </Link>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}
