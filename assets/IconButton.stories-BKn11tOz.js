import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,_t as n,r,w as i}from"./iframe-CIXJBCw9.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-DbhlXRb2.js";import{d as l,n as u}from"./icons-Cy_oSK-a.js";import{n as d,t as f}from"./LogbookIconButton-CNdDhdmd.js";var p,m,h,g,_,v,y;e((()=>{r(),u(),a(),d(),p=t(),m=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],h=[{token:`color.secondary/warning.contrastText, success/error/info.dark`,note:`couleur de l’icône par color, sur IconButton natif (sans variant)`},{token:`designTokens.borderRadius.md`,note:`rayon des variants filled/outlined (LogbookIconButton)`}],g=["IconButton MUI natif n’a pas de prop `variant` (contrairement à Button/Chip) : impossible à étendre via theme.components.MuiIconButton.variants. Les variants filled/outlined vivent dans le wrapper src/components/LogbookIconButton.tsx, pas dans le thème.",`Tailles d’icône (20px small, 24px medium/large) et padding figés en dur dans IconButton.ts : aucun cran de spacing existant ne correspond — exception documentée.`,`⚠️ Filled primary, survol : color.primary.dark (#4ad09a) est un vert, pas une nuance de teal — incohérence connue du nuancier, reproduite à l’identique (déjà présente sur Button Primary Contained), signalée pour arbitrage plutôt que corrigée en douce.`],_={title:`Components/IconButton`,component:n,decorators:[e=>(0,p.jsx)(c,{title:`IconButton`,tokens:h,notes:g,children:(0,p.jsx)(e,{})})],args:{"aria-label":`Démarrer l’enregistrement`,children:(0,p.jsx)(l,{size:`1em`})}},v={render:e=>(0,p.jsxs)(s,{children:[(0,p.jsx)(o,{title:`Default`,children:(0,p.jsx)(n,{...e})}),(0,p.jsx)(o,{title:`Colors`,children:(0,p.jsxs)(i,{direction:`row`,spacing:1,children:[(0,p.jsx)(n,{...e,color:`primary`}),(0,p.jsx)(n,{...e,color:`secondary`}),(0,p.jsx)(n,{...e,color:`default`})]})}),(0,p.jsx)(o,{title:`Filled`,children:(0,p.jsx)(i,{direction:`row`,spacing:1,children:m.map(t=>(0,p.jsx)(f,{...e,variant:`filled`,color:t},t))})}),(0,p.jsx)(o,{title:`Outlined`,children:(0,p.jsx)(i,{direction:`row`,spacing:1,children:m.map(t=>(0,p.jsx)(f,{...e,variant:`outlined`,color:t},t))})}),(0,p.jsx)(o,{title:`Sizes`,children:(0,p.jsxs)(i,{direction:`row`,spacing:1,sx:{alignItems:`center`},children:[(0,p.jsx)(n,{...e,size:`small`}),(0,p.jsx)(n,{...e,size:`medium`})]})}),(0,p.jsx)(o,{title:`Disabled`,children:(0,p.jsx)(n,{...e,disabled:!0})})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <IconButton {...args} />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={1}>
          <IconButton {...args} color="primary" />
          <IconButton {...args} color="secondary" />
          <IconButton {...args} color="default" />
        </Stack>
      </Section>

      <Section title="Filled">
        <Stack direction="row" spacing={1}>
          {semanticColors.map(c => <LogbookIconButton key={c} {...args} variant="filled" color={c} />)}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Stack direction="row" spacing={1}>
          {semanticColors.map(c => <LogbookIconButton key={c} {...args} variant="outlined" color={c} />)}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={1} sx={{
        alignItems: 'center'
      }}>
          <IconButton {...args} size="small" />
          <IconButton {...args} size="medium" />
        </Stack>
      </Section>

      <Section title="Disabled">
        <IconButton {...args} disabled />
      </Section>
    </Sections>
}`,...v.parameters?.docs?.source}}},y=[`Default`]}))();export{v as Default,y as __namedExportsOrder,_ as default};