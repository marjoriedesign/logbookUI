import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Tt as n,r,ut as i}from"./iframe-BHz4cHCR.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-CXZ1CmRm.js";var l,u,d,f,p;e((()=>{r(),a(),l=n(),u=[`variant="subtle" est une extension custom (officiellement supportée par MUI), pas un variant natif — fond pastel + texte unifié sur text.secondary, pour les statuts discrets.`,`Strong error/warning partagent la même teinte (orange.800), hors nuancier error/warning habituel — écart assumé par Marjorie pour tenir le contraste AA (4.64:1). Strong info (purple.700) reste dans la palette info habituelle (= info.dark), 7.94:1.`],d={title:`Components/Chip`,component:i,decorators:[e=>(0,l.jsx)(c,{title:`Chip`,notes:u,children:(0,l.jsx)(e,{})})],args:{label:`Default`}},f={render:e=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{title:`Default`,children:(0,l.jsx)(i,{...e})}),(0,l.jsx)(o,{title:`Strong`,children:(0,l.jsxs)(t,{direction:`row`,spacing:1,children:[(0,l.jsx)(i,{label:`Primary`,color:`primary`}),(0,l.jsx)(i,{label:`Secondary`,color:`secondary`}),(0,l.jsx)(i,{label:`Succès`,color:`success`}),(0,l.jsx)(i,{label:`Attention`,color:`warning`}),(0,l.jsx)(i,{label:`Erreur`,color:`error`}),(0,l.jsx)(i,{label:`Info`,color:`info`})]})}),(0,l.jsx)(o,{title:`Subtle`,children:(0,l.jsxs)(t,{direction:`row`,spacing:1,children:[(0,l.jsx)(i,{label:`Non réalisée`,color:`secondary`,variant:`subtle`}),(0,l.jsx)(i,{label:`Rendue`,color:`success`,variant:`subtle`}),(0,l.jsx)(i,{label:`Autre`,color:`warning`,variant:`subtle`}),(0,l.jsx)(i,{label:`Analysée`,color:`error`,variant:`subtle`}),(0,l.jsx)(i,{label:`Consultée`,color:`info`,variant:`subtle`})]})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
            orange.100/yellow.200/green.100/purple.100 — toutes via
            color.{X}.subtle.background (cf. tokens/semantic.json), sans sx
            dédié : Non réalisée=grey.200, Rendue=green.100 (success),
            Autre=yellow.200 (warning), Analysée=orange.100 (error),
            Consultée=purple.100 (info). */}
        <Stack direction="row" spacing={1}>
          <Chip label="Non réalisée" color="secondary" variant="subtle" />
          <Chip label="Rendue" color="success" variant="subtle" />
          <Chip label="Autre" color="warning" variant="subtle" />
          <Chip label="Analysée" color="error" variant="subtle" />
          <Chip label="Consultée" color="info" variant="subtle" />
        </Stack>
      </Section>
    </Sections>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};