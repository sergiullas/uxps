import * as React from 'react';
import { AppChip as Chip, AppIconButton as IconButton, AppStack as Stack, AppTooltip as Tooltip, AppTypography as Typography, appIcons } from '../ui';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import { resumeConfig } from '../../content/resume.js';

export default function ResumePronunciation() {
  const pronunciation = resumeConfig?.pronunciation;
  const enabled = pronunciation?.enabled;
  const sources = pronunciation?.sources || [];
  const prefersReducedMotion = usePrefersReducedMotion();

  const [activeSourceIndex, setActiveSourceIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const VolumeIcon = appIcons.volume;

  const hasSources = Boolean(sources.length);
  const activeSource = sources[activeSourceIndex] || sources[0];
  const activeLabel = activeSource?.label || 'name pronunciation';

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handlePlay = () => setIsPlaying(true);
    const handleEnd = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('ended', handleEnd);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('ended', handleEnd);
      audio.removeEventListener('pause', handlePause);
    };
  }, [activeSource?.src]);

  if (!enabled || !hasSources) return null;

  const handlePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const handleSelectSource = (index) => {
    setActiveSourceIndex(index);
    if (!prefersReducedMotion) {
      handlePlay();
    }
  };

  return (
    <Stack direction="row" spacing={1.25} alignItems="center" className="resume-pronunciation">
      <Tooltip title="Hear how to pronounce my name">
        <IconButton
          size="small"
          color={isPlaying ? 'primary' : 'default'}
          onClick={handlePlay}
          aria-label={`Play ${activeLabel}`}
        >
          <VolumeIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {sources.length > 1 ? (
        <Stack direction="row" spacing={0.75} aria-label="Pronunciation languages">
          {sources.map((source, index) => (
            <Chip
              key={source.src}
              label={source.flag || source.label || `Option ${index + 1}`}
              size="small"
              variant={index === activeSourceIndex ? 'filled' : 'outlined'}
              onClick={() => handleSelectSource(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSelectSource(index);
                }
              }}
              role="button"
              aria-pressed={index === activeSourceIndex}
            />
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Pronounce name
        </Typography>
      )}

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} aria-live="polite" key={activeSource?.src}>
        {activeSource ? <source src={activeSource.src} type={activeSource.type} /> : null}
      </audio>
    </Stack>
  );
}
