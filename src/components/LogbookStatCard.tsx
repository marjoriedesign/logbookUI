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
        // largeur du libellé : minWidth ramené à 100px (calé sur le
        // contenu le plus court, pas le plus long) et le libellé autorisé
        // à passer sur 2 lignes ("Travaux réalisés" notamment) plutôt que
        // forcé sur une seule (whiteSpace: nowrap réservé à sm+, où les
        // 3 cartes ont la place). Un calage précédent sur 114px + nowrap
        // ne tenait qu'à 390px pile — cassait déjà à 375px (iPhone
        // standard), repéré sur la démo publique en conditions réelles.
        // sm+ : valeurs inchangées.
        minWidth: { xs: 100, sm: 128 },
        p: { xs: 0.5, sm: 1 },
        gap: 2,
      }}
    >
      <Box component="img" src={icon} alt={iconAlt} sx={{ width: 48, height: 48 }} />
      {/* width: 100% sous xs, sinon `alignItems: center` du Card (nécessaire
          pour centrer l'icône/valeur) laisse ce Typography se dimensionner
          à son contenu (max-content) au lieu de se contraindre à la
          largeur de la carte — whiteSpace: normal seul ne suffit pas à
          déclencher un retour à la ligne sans cette contrainte de largeur. */}
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
