import * as React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import ResumeSummary from './ResumeSummary.jsx';
import ResumeSkills from './ResumeSkills.jsx';
import ResumeTimeline from './ResumeTimeline.jsx';
import ResumeEducation from './ResumeEducation.jsx';
import ResumeFilters from './ResumeFilters.jsx';

const TABS = [
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

function getPanelComponent(tabId) {
  switch (tabId) {
    case 'summary':
      return ResumeSummary;
    case 'skills':
      return ResumeSkills;
    case 'experience':
      return ExperiencePanel;
    case 'education':
      return ResumeEducation;
    default:
      return () => null;
  }
}

export default function ResumeTabs({ resumeData }) {
  const [activeTab, setActiveTab] = React.useState('summary');

  const handleChange = (event, newValue) => {
    if (newValue !== null) setActiveTab(newValue);
  };

  return (
    <Box className="resume-tabs">
      <Tabs value={activeTab} onChange={handleChange} aria-label="Resume sections">
        {TABS.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            value={tab.id}
            id={`resume-tab-${tab.id}`}
            aria-controls={`resume-tabpanel-${tab.id}`}
          />
        ))}
      </Tabs>

      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const PanelComponent = getPanelComponent(tab.id);
        const panelProps = getPanelProps(tab.id, resumeData);

        return (
          <Box
            key={tab.id}
            role="tabpanel"
            id={`resume-tabpanel-${tab.id}`}
            aria-labelledby={`resume-tab-${tab.id}`}
            hidden={!isActive}
            className="resume-tabpanel"
            sx={{ display: isActive ? 'block' : 'none', mt: 2.5 }}
          >
            <PanelComponent {...panelProps} />
          </Box>
        );
      })}
    </Box>
  );
}

function getPanelProps(tabId, resumeData) {
  switch (tabId) {
    case 'summary':
      return { summary: resumeData.summary };
    case 'skills':
      return { skills: resumeData.skills };
    case 'experience':
      return { resumeData };
    case 'education':
      return { education: resumeData.education };
    default:
      return {};
  }
}

function ExperiencePanel({ resumeData }) {
  const roles = React.useMemo(
    () => resumeData?.experience?.roles || [],
    [resumeData]
  );
  const [activeEra, setActiveEra] = React.useState('all');

  const totalCounts = React.useMemo(
    () => ({
      all: roles.length,
      recent: roles.filter((role) => role.era === 'recent').length,
      mid: roles.filter((role) => role.era === 'mid').length,
      early: roles.filter((role) => role.era === 'early').length,
    }),
    [roles]
  );

  return (
    <Box component="section" aria-labelledby="resume-experience-heading">
      <Typography
        id="resume-experience-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Experience
      </Typography>

      <ResumeFilters
        activeEra={activeEra}
        onEraChange={setActiveEra}
        totalCounts={totalCounts}
      />

      <ResumeTimeline roles={roles} activeEraFilter={activeEra} />
    </Box>
  );
}
