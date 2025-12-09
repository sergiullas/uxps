import * as React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LaunchIcon from '@mui/icons-material/Launch';

export default function CertificationCard({ certification }) {
  const { title, issuer, timeframeLabel, verificationUrl, isVerified, description } = certification;
  const showVerification = Boolean(verificationUrl || isVerified);

  const cardContent = (
    <CardContent>
      <Stack spacing={1}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography component="h3" variant="h6" color="text.primary">
            {title}
          </Typography>
          {showVerification ? (
            <Tooltip title={verificationUrl ? 'View verification' : 'Verified credential'}>
              <Chip
                icon={<VerifiedIcon color="primary" fontSize="small" />}
                size="small"
                label="Verified"
                color="primary"
                variant="outlined"
                clickable={Boolean(verificationUrl)}
                component={verificationUrl ? 'span' : 'div'}
                sx={{ borderRadius: 1.5 }}
              />
            </Tooltip>
          ) : null}
        </Box>

        <Typography variant="body2" color="text.secondary">
          {issuer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {timeframeLabel}
        </Typography>

        {description ? (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        ) : null}
      </Stack>
    </CardContent>
  );

  if (verificationUrl) {
    return (
      <Card
        variant="outlined"
        className="resume-print-card"
        sx={{ borderRadius: 2, transition: (t) => t.transitions.create(['box-shadow', 'transform'], { duration: t.transitions.duration.shorter }) }}
      >
        <CardActionArea
          component="a"
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ alignItems: 'stretch' }}
        >
          {cardContent}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pr: 2, pb: 2, gap: 0.5 }}>
            <LaunchIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              Verify credential
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card
      variant="outlined"
      className="resume-print-card"
      sx={{ borderRadius: 2, transition: (t) => t.transitions.create(['box-shadow', 'transform'], { duration: t.transitions.duration.shorter }) }}
    >
      {cardContent}
    </Card>
  );
}
