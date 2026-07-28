import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,ct as n,n as r,r as i,t as a,w as o}from"./iframe-CE5Mt5Jr.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-DXSmYbJ8.js";var d,f,p,m,h;e((()=>{i(),s(),r(),d=t(),f=[`variant="subtle" est une extension custom (officiellement supportée par MUI), pas un variant natif — fond pastel + texte unifié sur text.secondary, pour les statuts discrets.`,`Strong error/warning partagent la même teinte (orange.800) et Strong info sort aussi du nuancier habituel (deeppurple.700) — écarts assumés par Marjorie pour tenir le contraste AA (4.64:1 / 4.64:1 / 9.17:1), à signaler si Figma doit reproduire ces teintes.`],p={title:`Components/Chip`,component:n,decorators:[e=>(0,d.jsx)(u,{title:`Chip`,notes:f,children:(0,d.jsx)(e,{})})],args:{label:`Default`}},m={render:e=>(0,d.jsxs)(l,{children:[(0,d.jsx)(c,{title:`Default`,children:(0,d.jsx)(n,{...e})}),(0,d.jsx)(c,{title:`Strong`,children:(0,d.jsxs)(o,{direction:`row`,spacing:1,children:[(0,d.jsx)(n,{label:`Primary`,color:`primary`}),(0,d.jsx)(n,{label:`Secondary`,color:`secondary`}),(0,d.jsx)(n,{label:`Succès`,color:`success`}),(0,d.jsx)(n,{label:`Attention`,color:`warning`}),(0,d.jsx)(n,{label:`Erreur`,color:`error`}),(0,d.jsx)(n,{label:`Info`,color:`info`})]})}),(0,d.jsx)(c,{title:`Subtle`,children:(0,d.jsxs)(o,{direction:`row`,spacing:1,children:[(0,d.jsx)(n,{label:`Non réalisée`,color:`secondary`,variant:`subtle`}),(0,d.jsx)(n,{label:`Rendue`,color:`success`,variant:`subtle`}),(0,d.jsx)(n,{label:`Autre`,color:`warning`,variant:`subtle`,sx:{backgroundColor:a.color.yellow[200]}}),(0,d.jsx)(n,{label:`Analysée`,color:`error`,variant:`subtle`,sx:{backgroundColor:a.color.orange[100]}}),(0,d.jsx)(n,{label:`Consultée`,color:`info`,variant:`subtle`})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Chip label="Erreur" color="error" />
          <Chip label="Info" color="info" />
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
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};