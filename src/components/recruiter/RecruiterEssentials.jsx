import * as React from 'react';
import { Card, CardContent, Box, Grid, Typography } from '@mui/material';
import { recruiterEssentials } from '../../content/recruiterEssentials';
import IconRenderer from './IconRenderer';

export default function RecruiterEssentials() {
  const { title, description, sections } = recruiterEssentials;

  return (
    <Card
      component="section"
      aria-labelledby="recruiter-essentials-title"
      variant="outlined"
      className="recruiter-essentials-card resume-print-card"
      sx={{ borderRadius: 4 }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography id="recruiter-essentials-title" variant="overline" component="h3">
            {title}
          </Typography>

          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </Box>

        <Grid container spacing={4}>
          {sections?.map((section) => (
            <Grid item xs={12} sm={6} key={section.id}>
              <Section section={section} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

function Section({ section }) {
  const { label, icon, fields } = section;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        {icon && <IconRenderer iconName={icon} fontSize="small" sx={{ color: 'primary.main' }} />}

        {label && (
          <Typography
            variant="caption"
            component="h4"
            sx={{ textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.1em' }}
          >
            {label}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {fields?.map((field) => (
          <FieldRow key={field.id} field={field} />
        ))}
      </Box>
    </Box>
  );
}

function FieldRow({ field }) {
  const { label, icon, value } = field;
  if (!value) return null;

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
      {icon && <IconRenderer iconName={icon} fontSize="small" sx={{ color: 'text.secondary', mt: 0.25 }} />}

      <Box sx={{ flex: 1 }}>
        {label && (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>
            {label}
          </Typography>
        )}
        <Typography variant="body2">{value}</Typography>
      </Box>
    </Box>
  );
}
