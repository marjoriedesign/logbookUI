import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookVoicePlayer } from '../../components/LogbookVoicePlayer';
import { PageLayout, Sections, Section } from '../PageLayout';

const durationSeconds = 12;
const playbackRateSteps = [1, 1.25, 1.5, 2, 0.75];

// Story-only : porte l'état local (lecture, position, vitesse). Une vraie
// app branche un <audio> réel (currentTime/timeupdate) plutôt que ce
// minuteur simulé.
function VoicePlayerDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(3);
  const [playbackRateIndex, setPlaybackRateIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    let frameId: number;
    let lastTimestamp: number | null = null;

    // requestAnimationFrame + temps réel écoulé (fractions de seconde) plutôt
    // qu'un setInterval à +1s : incréments entiers toutes les secondes
    // produisaient des saccades visibles sur la LinearProgress (elle saute
    // puis reste figée), MUI ne pouvant lisser un pas aussi large avec sa
    // transition CSS de 0.4s.
    function tick(timestamp: number) {
      const deltaSeconds = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      setCurrentSeconds((s) => {
        const next = s + deltaSeconds;
        if (next >= durationSeconds) {
          setIsPlaying(false);
          return durationSeconds;
        }
        return next;
      });

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying]);

  return (
    <LogbookVoicePlayer
      isPlaying={isPlaying}
      currentSeconds={currentSeconds}
      durationSeconds={durationSeconds}
      playbackRate={playbackRateSteps[playbackRateIndex]}
      onPlayPause={() => setIsPlaying((prev) => !prev)}
      onSkipBack={() => setCurrentSeconds((s) => Math.max(0, s - 30))}
      onSkipForward={() => setCurrentSeconds((s) => Math.min(durationSeconds, s + 30))}
      onPlaybackRateClick={() => setPlaybackRateIndex((i) => (i + 1) % playbackRateSteps.length)}
      onTranscriptClick={() => {}}
    />
  );
}

const meta: Meta<typeof VoicePlayerDemo> = {
  title: 'Logbook/VoicePlayer',
  component: VoicePlayerDemo,
  decorators: [(Story) => (<PageLayout title="VoicePlayer"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof VoicePlayerDemo>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default (play/pause, ±30s, vitesse, transcription)">
        <VoicePlayerDemo />
      </Section>
    </Sections>
  ),
};
