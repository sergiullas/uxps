import * as React from 'react';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

export default function AccessGate({
  enabled = false,
  unlocked = true,
  onAttempt,
  title = 'This case study is available by request',
  description = 'Please enter the access phrase provided to you to continue.',
  hint,
  children,
}) {
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!onAttempt) return;

    const success = await onAttempt(password);
    if (!success) {
      setError('The password you entered is incorrect.');
      return;
    }

    setError('');
    setPassword('');
  };

  const showDialog = enabled && !unlocked;

  return (
    <>
      <Box
        aria-hidden={showDialog}
        sx={{
          filter: showDialog ? 'blur(2px)' : 'none',
          pointerEvents: showDialog ? 'none' : 'auto',
          transition: prefersReducedMotion ? 'none' : 'filter 160ms ease',
        }}
      >
        {children}
      </Box>
      <Dialog
        open={showDialog}
        disableEscapeKeyDown
        aria-modal="true"
        role="dialog"
        aria-labelledby="gate-title"
        aria-describedby="gate-description"
        transitionDuration={prefersReducedMotion ? 0 : undefined}
        slotProps={{
          backdrop: {
            transitionDuration: prefersReducedMotion ? 0 : undefined,
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <DialogTitle id="gate-title">{title}</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <Typography id="gate-description" variant="body1" color="text.secondary">
                {description}
              </Typography>

              {hint ? (
                <Alert severity="info" variant="outlined">
                  {hint}
                </Alert>
              ) : null}

              <TextField
                autoFocus
                fullWidth
                label="Access password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-describedby="gate-error"
                required
              />

              <Typography
                id="gate-error"
                variant="body2"
                color="error"
                role="status"
                aria-live="polite"
              >
                {error}
              </Typography>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Unlock case study
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
