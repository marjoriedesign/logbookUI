import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,ct as n,n as r,r as i,t as a,w as o}from"./iframe-CIXJBCw9.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-DbhlXRb2.js";var d,f,p,m,h,g;e((()=>{i(),s(),r(),d=t(),f=[{token:`color.{X}.main/contrastText`,note:`fond/texte du variant filled (Strong)`},{token:`color.secondary.subtle.background, text.secondary`,note:`fond/texte du variant subtle — texte toujours unifié sur text.secondary`},{token:`typography.chip.label`,note:`fontSize(13)/fontWeight(400)/lineHeight(18) — token composite dédié`},{token:`designTokens.borderRadius.md`,note:`rayon (8px, pas pill)`}],p=[`variant="subtle" est une extension custom (officiellement supportée par MUI), pas un variant natif — fond pastel + texte unifié sur text.secondary, pour les statuts discrets.`,`Strong Info et Erreur sortent du nuancier standard : orange.800/deeppurple.700 posés en dur (sx, pas token) pour tenir le contraste AA (4.64:1 / 9.17:1) — à signaler si Figma doit reproduire ces deux teintes.`],m={title:`Components/Chip`,component:n,decorators:[e=>(0,d.jsx)(u,{title:`Chip`,tokens:f,notes:p,children:(0,d.jsx)(e,{})})],args:{label:`Default`}},h={render:e=>(0,d.jsxs)(l,{children:[(0,d.jsx)(c,{title:`Default`,children:(0,d.jsx)(n,{...e})}),(0,d.jsx)(c,{title:`Strong`,children:(0,d.jsxs)(o,{direction:`row`,spacing:1,children:[(0,d.jsx)(n,{label:`Primary`,color:`primary`}),(0,d.jsx)(n,{label:`Secondary`,color:`secondary`}),(0,d.jsx)(n,{label:`Succès`,color:`success`}),(0,d.jsx)(n,{label:`Attention`,color:`warning`})]})}),(0,d.jsx)(c,{title:`Subtle`,children:(0,d.jsxs)(o,{direction:`row`,spacing:1,children:[(0,d.jsx)(n,{label:`Non réalisée`,color:`secondary`,variant:`subtle`}),(0,d.jsx)(n,{label:`Rendue`,color:`success`,variant:`subtle`}),(0,d.jsx)(n,{label:`Autre`,color:`warning`,variant:`subtle`,sx:{backgroundColor:a.color.yellow[200]}}),(0,d.jsx)(n,{label:`Analysée`,color:`error`,variant:`subtle`,sx:{backgroundColor:a.color.orange[100]}}),(0,d.jsx)(n,{label:`Consultée`,color:`info`,variant:`subtle`})]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <Chip {...args} />
      </Section>

      <Section title="Strong">
        <Stack direction="row" spacing={1}>
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Succès" color="success" />
          <Chip label="Attention" color="warning" />
        </Stack>
      </Section>

      <Section title="Subtle">
        {/* Rendue/Autre/Analysée/Consultée reprennent les 4 mêmes teintes que
            les avatars illustrés et les Initials (Components/Avatar) :
            orange.100/yellow.200/green.100/teal.100. Rendue (success.light)
            et Consultée (info.main) reprennent ces teintes directement via
            les tokens (cf. tokens/semantic.json), sans sx dédié ; Autre et
            Analysée gardent un sx car warning/error.subtle.background ne
            correspondent pas à yellow.200/orange.100. */}
        <Stack direction="row" spacing={1}>
          <Chip label="Non réalisée" color="secondary" variant="subtle" />
          <Chip label="Rendue" color="success" variant="subtle" />
          <Chip label="Autre" color="warning" variant="subtle" sx={{
          backgroundColor: designTokens.color.yellow['200']
        }} />
          <Chip label="Analysée" color="error" variant="subtle" sx={{
          backgroundColor: designTokens.color.orange['100']
        }} />
          <Chip label="Consultée" color="info" variant="subtle" />
        </Stack>
      </Section>
    </Sections>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};