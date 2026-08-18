import { Box, Card, Typography } from '@mui/material';

export interface LogbookStatCardProps {
  /** Illustration Logbook (import SVG depuis src/assets/illustrations). */
  icon: string;
  iconAlt?: string;
  label: string;
  value: string | number;
  /** Ex. "/20" — rendu dans un style plus discret que `value`. */
  suffix?: string;
}

export function LogbookStatCard({ icon, iconAlt = '', label, value, suffix }: LogbookStatCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        // Sous sm, 3 cartes tiennent sur une ligne quelle que soit la
        // largeur du libellé : width (pas minWidth) fixée à 100px — une
        // largeur définie, pas laissée à l'auto-sizing shrink-to-fit du
        // flex item, sans quoi le pourcentage du Typography ci-dessous ne
        // se résout pas correctement (cf. son commentaire) — et le
        // libellé autorisé à passer sur 2 lignes ("Travaux réalisés"
        // notamment) plutôt que forcé sur une seule (whiteSpace: nowrap
        // réservé à sm+, où les 3 cartes ont la place). flexShrink: 0 pour
        // ne pas laisser le flex row rétrécir la carte sous cette largeur.
        // Un calage précédent sur 114px + nowrap ne tenait qu'à 390px
        // pile — cassait déjà à 375px (iPhone standard) ; un calage
        // suivant sur minWidth + whiteSpace:normal ne suffisait toujours
        // pas à 360px (le libellé le plus long ne se contraignait pas à
        // la largeur de la carte). Les deux repérés en testant réellement
        // sur la démo publique. sm+ : valeurs inchangées.
        width: { xs: 100, sm: 'auto' },
        minWidth: { xs: 'auto', sm: 128 },
        flexShrink: { xs: 0, sm: 1 },
        p: { xs: 0.5, sm: 1 },
        gap: 2,
      }}
    >
      <Box component="img" src={icon} alt={iconAlt} sx={{ width: 48, height: 48 }} />
      {/* width: 100% sous xs : maintenant que la Card a une largeur fixe
          (définie) plutôt qu'auto, ce pourcentage se résout correctement
          et contraint le Typography à la largeur de la carte, ce qui
          déclenche le retour à la ligne (whiteSpace: normal seul ne
          suffit pas — sans contrainte de largeur, ce Typography se
          dimensionne à son contenu (max-content) via `alignItems: center`
          du Card, nécessaire par ailleurs pour centrer l'icône/valeur). */}
      <Typography
        variant="h5"
        color="textPrimary"
        sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' }, width: { xs: '100%', sm: 'auto' } }}
      >
        {label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
        {suffix && (
          <Typography variant="subtitle2" color="primary">
            {suffix}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
