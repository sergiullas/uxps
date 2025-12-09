import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

function isExpanded(id, expandedIds) {
  return expandedIds.includes(id);
}

function toggleExpanded(id, expandedIds) {
  return isExpanded(id, expandedIds)
    ? expandedIds.filter((item) => item !== id)
    : [...expandedIds, id];
}

export default function ResumeTimeline({ roles, activeEraFilter }) {
  const [expandedIds, setExpandedIds] = React.useState([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const filteredRoles = React.useMemo(
    () =>
      roles.filter((role) =>
        activeEraFilter === 'all' ? true : role.era === activeEraFilter
      ),
    [roles, activeEraFilter]
  );

  const handleToggle = (id) => {
    setExpandedIds((prev) => toggleExpanded(id, prev));
  };

  const handleExpandAll = () => {
    setExpandedIds(filteredRoles.map((role) => role.id));
  };

  const handleCollapseAll = () => {
    setExpandedIds([]);
  };

  const collapseTimeout = prefersReducedMotion ? 0 : 'auto';

  return (
    <Box>
      <Box
        className="timeline-controls"
        sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}
      >
        <Button onClick={handleExpandAll}>Expand all</Button>
        <Button onClick={handleCollapseAll}>Collapse all</Button>
      </Box>

      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 2 }}>
        {filteredRoles.map((role) => {
          const open = isExpanded(role.id, expandedIds);
          const contentId = `resume-role-content-${role.id}`;
          return (
            <Box key={role.id} component="li">
              <Card className="resume-print-card" sx={{ overflow: 'hidden' }}>
                <CardHeader
                  title={
                    <Typography component="h3" variant="h6" color="text.primary">
                      {role.title} · {role.company}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {role.timeframeLabel} · {role.location}
                    </Typography>
                  }
                  action={
                    <IconButton
                      onClick={() => handleToggle(role.id)}
                      aria-expanded={open}
                      aria-controls={contentId}
                      aria-label={open ? 'Collapse role details' : 'Expand role details'}
                    >
                      {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  }
                />
                <Collapse in={open} timeout={collapseTimeout} collapsedSize={0}>
                  <CardContent id={contentId}>
                    <Box component="ul" sx={{ pl: 2.75, m: 0, display: 'grid', gap: 0.75 }}>
                      {role.bullets.map((item, index) => (
                        <Box component="li" key={index}>
                          <Typography variant="body2" color="text.secondary">
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {role.tags?.length ? (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {role.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" variant="outlined" />
                        ))}
                      </Box>
                    ) : null}
                  </CardContent>
                </Collapse>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
