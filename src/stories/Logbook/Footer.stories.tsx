import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookFooter } from '../../components/LogbookFooter';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof LogbookFooter> = {
  title: 'Logbook/Footer',
  component: LogbookFooter,
  decorators: [(Story) => (<PageLayout title="Footer"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof LogbookFooter>;

const legalLinks = [
  { label: 'CGU', onClick: () => {} },
  { label: 'Mentions Légales', onClick: () => {} },
  { label: 'Confidentialité', onClick: () => {} },
];

export const Default: Story = {
  render: () => (
    <Sections>
      {/* Basculer le viewport (toolbar Storybook) pour voir la disposition
          mobile (deux lignes) sous le seuil sm/600px. */}
      <Section title="Footer produit">
        <LogbookFooter
          legalLinks={legalLinks}
          copyrightYear={2026}
          instagram={{ label: 'Suivez nos actualités', onClick: () => {} }}
          facebook={{ label: "Rejoignez le groupe d'échange", onClick: () => {} }}
        />
      </Section>
    </Sections>
  ),
};
