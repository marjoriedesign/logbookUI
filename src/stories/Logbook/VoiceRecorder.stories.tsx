import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookVoiceRecorder, type LogbookVoiceRecorderStatus } from '../../components/LogbookVoiceRecorder';
import { PageLayout, Sections, Section } from '../PageLayout';

// Story-only : porte l'état local (statut + minuteur) et le raccourci
// clavier espace pour démontrer l'interaction. Une vraie app branche
// l'enregistrement audio réel (MediaRecorder, minuteur serveur...) plutôt
// que de le court-circuiter comme ici.
function VoiceRecorderDemo() {
  const [status, setStatus] = useState<LogbookVoiceRecorderStatus>('idle');
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  function toggle() {
    setStatus((prev) => (prev === 'idle' ? 'recording' : 'idle'));
  }

  useEffect(() => {
    if (status !== 'recording') return;
    const id = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.code === 'Space') {
        event.preventDefault();
        toggle();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return <LogbookVoiceRecorder status={status} elapsedSeconds={elapsedSeconds} onToggle={toggle} />;
}

const meta: Meta<typeof VoiceRecorderDemo> = {
  title: 'Logbook/VoiceRecorder',
  component: VoiceRecorderDemo,
  decorators: [(Story) => (<PageLayout title="VoiceRecorder"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof VoiceRecorderDemo>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default (cliquer ou espace pour démarrer/arrêter)">
        <VoiceRecorderDemo />
      </Section>
    </Sections>
  ),
};
