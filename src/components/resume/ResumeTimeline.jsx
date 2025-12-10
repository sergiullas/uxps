import * as React from 'react';
import {
  alpha,
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn, SlideUpOnScroll, StaggerList } from '../../lib/motion/index.js';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import { formatDateRange } from '../../utils/date.js';

const MotionBox = motion.div;

function getInitialExpandedState(companies) {
  return companies.reduce((acc, company) => {
    const currentRoles = company.roles.filter((role) => role.isCurrent);
    if (currentRoles.length === 1) {
      acc[company.id] = [currentRoles[0].id];
    } else if (currentRoles.length > 1) {
      acc[company.id] = currentRoles.map((role) => role.id);
    } else if (company.roles.length) {
      acc[company.id] = [company.roles[0].id];
    } else {
      acc[company.id] = [];
    }
    return acc;
  }, {});
}

function RoleDetails({
  role,
  isExpanded,
  contentId,
  prefersReducedMotion,
  isPrintMode,
}) {
  if (isPrintMode) {
    return (
      <Box id={contentId} sx={{ mt: 1.5 }}>
        <RoleBody role={role} />
      </Box>
    );
  }

  if (prefersReducedMotion) {
    return isExpanded ? (
      <Box id={contentId} sx={{ mt: 1.5 }}>
        <RoleBody role={role} />
      </Box>
    ) : null;
  }

  return (
    <AnimatePresence initial={false}>
      {isExpanded ? (
        <MotionBox
          key={role.id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.24 }}
        >
          <FadeIn as={Box} id={contentId} sx={{ mt: 1.5 }}>
            <RoleBody role={role} />
          </FadeIn>
        </MotionBox>
      ) : null}
    </AnimatePresence>
  );
}

function RoleBody({ role }) {
  return (
    <Stack spacing={1.5} sx={{ pb: 0.5 }}>
      {role.summary ? (
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: { md: '70ch' } }}>
          {role.summary}
        </Typography>
      ) : null}

      {role.bullets?.length ? (
        <Box component="ul" sx={{ p: 0, m: 0, pl: 2.5, display: 'grid', gap: 0.75 }}>
          {role.bullets.map((item, index) => (
            <Box component="li" key={index}>
              <Typography variant="body2" color="text.secondary">
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : null}

      {role.tags?.length ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {role.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>
      ) : null}
    </Stack>
  );
}

function RoleNode({ isCurrent, isExpanded }) {
  const theme = useTheme();
  const outlineColor = theme.palette.primary.main;
  const haloColor = alpha(
    theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    theme.palette.mode === 'dark' ? 0.15 : 0.12
  );

  const size = isCurrent ? 16 : 12;

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2px solid ${outlineColor}`,
        backgroundColor: isCurrent ? haloColor : 'transparent',
        boxShadow: isCurrent && isExpanded ? `0 0 0 6px ${haloColor}` : 'none',
        transition: 'box-shadow 160ms ease, background-color 160ms ease',
      }}
      aria-hidden
    />
  );
}

function RoleItem({
  companyId,
  role,
  isExpanded,
  onToggle,
  isPrintMode,
  prefersReducedMotion,
}) {
  const contentId = `${companyId}-${role.id}-content`;
  const employmentLine = [role.employmentType, formatDateRange(role.startDate, role.endDate)]
    .filter(Boolean)
    .join(' • ');

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '28px 1fr', sm: '40px 1fr' },
        columnGap: { xs: 1.5, sm: 2.5 },
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 0.5 }} aria-hidden>
        <Box sx={{ mt: { xs: 0.5, sm: 0.75 } }}>
          <RoleNode isCurrent={role.isCurrent} isExpanded={isExpanded} />
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gap: 0.75 }}>
        <Stack direction="row" spacing={1} alignItems="flex-start" justifyContent="space-between">
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography component="h3" variant="h6" color="text.primary">
              {role.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {employmentLine}
              {role.location ? ` • ${role.location}` : ''}
            </Typography>
          </Box>

          <IconButton
            onClick={() => onToggle(role.id)}
            aria-expanded={isPrintMode ? true : isExpanded}
            aria-controls={contentId}
            aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
            sx={{
              alignSelf: 'flex-start',
              display: { print: 'none' },
            }}
          >
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Stack>

        <RoleDetails
          role={role}
          isExpanded={isPrintMode ? true : isExpanded}
          contentId={contentId}
          prefersReducedMotion={prefersReducedMotion}
          isPrintMode={isPrintMode}
        />
      </Box>
    </Box>
  );
}

function CompanyHeader({ company }) {
  const theme = useTheme();
  const dateRange = formatDateRange(company.startDate, company.endDate);
  const hasLogo = Boolean(company.companyLogo);

  return (
    <Stack direction="row" spacing={2.5} alignItems="flex-start" sx={{ mb: 2 }}>
      {hasLogo ? (
        <Avatar
          alt={`${company.companyName} logo`}
          src={company.companyLogo}
          variant="rounded"
          sx={{ width: 48, height: 48 }}
        />
      ) : (
        <Box
          aria-hidden
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1.25,
            border: `1px solid ${theme.palette.divider}`,
            display: 'grid',
            placeItems: 'center',
            color: 'text.secondary',
            fontWeight: 600,
            letterSpacing: '0.08em',
          }}
        >
          {company.companyName.slice(0, 2).toUpperCase()}
        </Box>
      )}

      <Stack spacing={0.75} sx={{ flex: 1, minWidth: 0 }}>
        <Typography component="h3" variant="h4" color="text.primary">
          {company.companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.location ? `${company.location} • ` : ''}
          {dateRange}
        </Typography>

        {company.currentEraLabel ? (
          <Chip
            label={`Current era: ${company.currentEraLabel}`}
            size="small"
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          />
        ) : null}

        {company.summary ? (
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: { md: '80ch' } }}>
            {company.summary}
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
}

export default function ResumeTimeline({ companies = [], activeEraFilter }) {
  const theme = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isPrintMode = useMediaQuery('print');
  const spineColor = React.useMemo(
    () =>
      alpha(
        theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        theme.palette.mode === 'dark' ? 0.15 : 0.12
      ),
    [theme]
  );

  const filteredCompanies = React.useMemo(() => {
    return companies
      .map((company) => ({
        ...company,
        roles:
          activeEraFilter === 'all'
            ? company.roles
            : company.roles.filter((role) => role.era === activeEraFilter),
      }))
      .filter((company) => company.roles.length > 0);
  }, [companies, activeEraFilter]);

  const [expandedByCompany, setExpandedByCompany] = React.useState(() =>
    getInitialExpandedState(filteredCompanies)
  );

  React.useEffect(() => {
    setExpandedByCompany(getInitialExpandedState(filteredCompanies));
  }, [filteredCompanies]);

  const handleToggle = (companyId, roleId) => {
    setExpandedByCompany((prev) => {
      const current = prev[companyId] || [];
      const isOpen = current.includes(roleId);
      const next = isOpen ? current.filter((id) => id !== roleId) : [...current, roleId];
      return { ...prev, [companyId]: next };
    });
  };

  if (!filteredCompanies.length) {
    return (
      <Typography variant="body2" color="text.secondary">
        No roles to show yet.
      </Typography>
    );
  }

  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      {filteredCompanies.map((company) => {
        const expandedRoles = expandedByCompany[company.id] || [];
        const spineOffset = { xs: 14, sm: 20 };

        return (
          <SlideUpOnScroll key={company.id}>
            <Box
              component="article"
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                position: 'relative',
                overflow: 'hidden',
                '@media print': {
                  boxShadow: 'none',
                  borderColor: theme.palette.text.secondary,
                },
              }}
            >
              <CompanyHeader company={company} />

              <Box sx={{ position: 'relative', mt: 1 }}>
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: { xs: `${spineOffset.xs}px`, sm: `${spineOffset.sm}px` },
                    width: '2px',
                    backgroundColor: spineColor,
                    borderRadius: 1,
                    pointerEvents: 'none',
                    '@media print': {
                      backgroundColor: theme.palette.text.secondary,
                    },
                  }}
                />

                <StaggerList as={Box} sx={{ display: 'grid', rowGap: { xs: 2.5, sm: 3 } }}>
                  {company.roles.map((role) => (
                    <RoleItem
                      key={role.id}
                      companyId={company.id}
                      role={role}
                      isExpanded={isPrintMode ? true : expandedRoles.includes(role.id)}
                      onToggle={(roleId) => handleToggle(company.id, roleId)}
                      isPrintMode={isPrintMode}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  ))}
                </StaggerList>
              </Box>
            </Box>
          </SlideUpOnScroll>
        );
      })}
    </Stack>
  );
}
