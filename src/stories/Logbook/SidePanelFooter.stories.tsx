import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookSidePanelFooter } from '../../components/LogbookSidePanelFooter';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof LogbookSidePanelFooter> = {
  title: 'Logbook/SidePanelFooter',
  component: LogbookSidePanelFooter,
  decorators: [(Story) => (<PageLayout title="SidePanelFooter"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof LogbookSidePanelFooter>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Un seul bouton">
        <LogbookSidePanelFooter primaryAction={{ label: 'Envoyer la correction', onClick: () => {} }} />
      </Section>
      <Section title="Deux boutons, libellés de longueur proche">
        <LogbookSidePanelFooter
          primaryAction={{ label: 'Envoyer', onClick: () => {} }}
          secondaryAction={{ label: 'Annuler', onClick: () => {} }}
        />
      </Section>
      <Section title="Deux boutons, un libellé plus long">
        <LogbookSidePanelFooter
          primaryAction={{ label: 'Envoyer la correction', onClick: () => {} }}
          secondaryAction={{ label: 'Annuler', onClick: () => {} }}
        />
      </Section>
      <Section title="Variant/couleur surchargés">
        <LogbookSidePanelFooter
          primaryAction={{ label: 'Enregistrer', onClick: () => {} }}
          secondaryAction={{ label: 'Supprimer le brouillon', onClick: () => {}, variant: 'outlined', color: 'error' }}
        />
      </Section>
    </Sections>
  ),
};
