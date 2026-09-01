import type { ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { Box, ButtonBase, Divider, IconButton, Typography } from '@mui/material';
import { RiCopyrightLine, RiFacebookCircleFill, RiInstagramFill } from '../icons';
import { designTokens } from '../theme/generated/tokens';
import franceFlag from '../assets/flags/France.svg';

export interface LogbookFooterLink {
  label: string;
  onClick?: () => void;
}

export interface LogbookFooterSocialLink {
  /** Affiché à côté de l'icône en desktop ; sert aussi d'aria-label en mobile (icône seule). */
  label: string;
  onClick?: () => void;
}

export interface LogbookFooterProps {
  /** Ex. CGU, Mentions Légales, Confidentialité. */
  legalLinks: LogbookFooterLink[];
  /** Ex. 2026. */
  copyrightYear: number | string;
  instagram?: LogbookFooterSocialLink;
  facebook?: LogbookFooterSocialLink;
}

function SocialLink({ icon, link }: { icon: ReactNode; link: LogbookFooterSocialLink }) {
  return (
    <ButtonBase
      onClick={link.onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: `${designTokens.spacing.xs}px`,
        borderRadius: `${designTokens.borderRadius.sm}px`,
        whiteSpace: 'nowrap',
      }}
    >
      {icon}
      <Typography variant="button" color="textSecondary">
        {link.label}
      </Typography>
    </ButtonBase>
  );
}

function SocialIconButton({ icon, link }: { icon: ReactNode; link: LogbookFooterSocialLink }) {
  return (
    <IconButton aria-label={link.label} onClick={link.onClick}>
      {icon}
    </IconButton>
  );
}

function FooterLinkText({ label, onClick }: LogbookFooterLink) {
  return (
    <ButtonBase onClick={onClick} sx={{ borderRadius: `${designTokens.borderRadius.sm}px`, whiteSpace: 'nowrap' }}>
      <Typography variant="button" color="textSecondary">
        {label}
      </Typography>
    </ButtonBase>
  );
}

function FlagBadge() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing['2xs']}px`, whiteSpace: 'nowrap' }}>
      <Box component="img" src={franceFlag} alt="" width={20} height={20} />
      <Typography variant="button" color="textSecondary">
        France
      </Typography>
    </Box>
  );
}

function Copyright({ year }: { year: number | string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing['3xs']}px`, whiteSpace: 'nowrap' }}>
      <RiCopyrightLine size="1em" style={{ color: designTokens.color.text.secondary }} />
      <Typography variant="button" color="textSecondary">
        {year} Logbook
      </Typography>
    </Box>
  );
}

interface DesktopRowContentProps {
  legalLinks: LogbookFooterLink[];
  copyrightYear: number | string;
  instagram?: LogbookFooterSocialLink;
  facebook?: LogbookFooterSocialLink;
}

// Contenu de la ligne desktop, factorisé pour être rendu deux fois à
// l'identique : une fois visible, une fois dans la sonde invisible de
// useFitsOnOneLine ci-dessous (même contenu que ce qui sera affiché, sinon
// la mesure ne serait pas fiable).
function DesktopRowContent({ legalLinks, copyrightYear, instagram, facebook }: DesktopRowContentProps) {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.md}px` }}>
        {instagram && (
          <SocialLink icon={<RiInstagramFill size={20} color={designTokens.color.primary.main} />} link={instagram} />
        )}
        {facebook && (
          <SocialLink
            icon={<RiFacebookCircleFill size={20} color={designTokens.color.primary.main} />}
            link={facebook}
          />
        )}
        <Divider orientation="vertical" flexItem />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.md}px` }}>
        {legalLinks.map((link) => (
          <FooterLinkText key={link.label} {...link} />
        ))}
        <Copyright year={copyrightYear} />
        <FlagBadge />
      </Box>
    </>
  );
}

// Le seuil mobile/desktop ne peut pas être un cran de breakpoint fixe (à la
// NAVBAR_DESKTOP_BREAKPOINT de LogbookNavbar) : contrairement à la navbar,
// les libellés (legalLinks, instagram, facebook) sont fournis par l'app
// consommatrice, donc de longueur imprévisible — un seuil figé finirait
// forcément par laisser un libellé retomber sur 2 lignes dans la ligne
// desktop pour un jeu de libellés plus long que celui testé ici. On mesure
// donc la largeur réelle nécessaire au contenu (sonde hors-écran, jamais
// affichée ni exposée à l'accessibilité) et on la compare à la largeur
// réellement disponible dans le footer (observée en continu) : dès que le
// contenu ne tiendrait plus sur une ligne, bascule vers la version mobile.
// `contentKey` : signature texte du contenu affiché (labels des liens,
// année) — sert uniquement à redéclencher la mesure quand le contenu
// change (pas la largeur du footer, déjà suivie en continu par le
// ResizeObserver). Une simple chaîne plutôt que le ReactNode rendu, dont
// l'identité change à chaque rendu et redéclencherait l'effet en boucle.
function useFitsOnOneLine(contentKey: string) {
  const footerRef = useRef<HTMLElement>(null);
  const probeRef = useRef<HTMLDivElement>(null);
  const [fits, setFits] = useState(true);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    const probe = probeRef.current;
    if (!footer || !probe) return;

    const check = () => {
      const style = getComputedStyle(footer);
      const available = footer.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      setFits(probe.scrollWidth <= available);
    };

    check();
    const observer = new ResizeObserver(check);
    observer.observe(footer);
    return () => observer.disconnect();
  }, [contentKey]);

  return { footerRef, probeRef, fits };
}

// Pied de page présent sur l'ensemble des pages du produit : réseaux
// sociaux (icône + libellé) à gauche, liens légaux + copyright + pays à
// droite, sur une seule ligne en desktop. En dessous, le regroupement
// change (le copyright rejoint les réseaux sociaux plutôt que les liens
// légaux) et pas seulement leur ordre — deux blocs distincts, un seul
// affiché à la fois selon que le contenu desktop tient ou non sur une
// ligne (cf. useFitsOnOneLine), plutôt qu'une unique ligne réordonnée en
// CSS ou qu'un seuil de breakpoint fixe.
export function LogbookFooter({ legalLinks, copyrightYear, instagram, facebook }: LogbookFooterProps) {
  const rowContent = (
    <DesktopRowContent
      legalLinks={legalLinks}
      copyrightYear={copyrightYear}
      instagram={instagram}
      facebook={facebook}
    />
  );
  const contentKey = [
    ...legalLinks.map((link) => link.label),
    instagram?.label ?? '',
    facebook?.label ?? '',
    String(copyrightYear),
  ].join('|');
  const { footerRef, probeRef, fits } = useFitsOnOneLine(contentKey);

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        paddingInline: { xs: `${designTokens.spacing.sm}px`, sm: `${designTokens.spacing.xl}px` },
        paddingBlock: `${designTokens.spacing.sm}px`,
      }}
    >
      {/* Sonde de mesure : rend le même contenu que la ligne desktop, hors
          écran et invisible (jamais peinte, jamais atteignable au clavier,
          exclue de l'arbre d'accessibilité), uniquement pour connaître sa
          largeur naturelle sans contrainte de conteneur. */}
      <Box
        ref={probeRef}
        aria-hidden="true"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          visibility: 'hidden',
          display: 'flex',
          alignItems: 'center',
          gap: `${designTokens.spacing.md}px`,
          pointerEvents: 'none',
        }}
      >
        {rowContent}
      </Box>

      {fits ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: `${designTokens.spacing.md}px` }}>
          {rowContent}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: `${designTokens.spacing.sm}px` }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: `${designTokens.spacing.sm}px`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.sm}px`, flexWrap: 'wrap' }}>
              {legalLinks.map((link) => (
                <FooterLinkText key={link.label} {...link} />
              ))}
            </Box>
            <FlagBadge />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.sm}px` }}>
              {instagram && (
                <SocialIconButton
                  icon={<RiInstagramFill size="1em" color={designTokens.color.primary.main} />}
                  link={instagram}
                />
              )}
              {facebook && (
                <SocialIconButton
                  icon={<RiFacebookCircleFill size="1em" color={designTokens.color.primary.main} />}
                  link={facebook}
                />
              )}
            </Box>
            <Copyright year={copyrightYear} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
