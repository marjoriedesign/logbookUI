import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Tt as n,r,yt as i}from"./iframe-D_dLIpmG.js";import{_ as a,i as o,n as s,o as c,r as l,t as u}from"./PageLayout-Bk6Yi5yR.js";import{n as d,t as f}from"./LogbookIconButton-DULvsXp7.js";var p,m,h,g,_,v;e((()=>{r(),c(),o(),d(),p=n(),m=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],h=["IconButton MUI natif n’a pas de prop `variant` (contrairement à Button/Chip) : impossible à étendre via theme.components.MuiIconButton.variants. Les variants filled/outlined vivent dans le wrapper src/components/LogbookIconButton.tsx, pas dans le thème.",`Tailles d’icône (20px small, 24px medium/large) et padding figés en dur dans IconButton.ts : aucun cran de spacing existant ne correspond — exception documentée.`,`⚠️ Filled primary, survol : color.primary.dark (#4ad09a) est un vert, pas une nuance de teal — incohérence connue du nuancier, reproduite à l’identique (déjà présente sur Button Primary Contained), signalée pour arbitrage plutôt que corrigée en douce.`],g={title:`Components/IconButton`,component:i,decorators:[e=>(0,p.jsx)(u,{title:`IconButton`,notes:h,children:(0,p.jsx)(e,{})})],args:{"aria-label":`Démarrer l’enregistrement`,children:(0,p.jsx)(a,{size:`1em`})}},_={render:e=>(0,p.jsxs)(l,{children:[(0,p.jsx)(s,{title:`Default`,children:(0,p.jsx)(i,{...e})}),(0,p.jsx)(s,{title:`Colors`,children:(0,p.jsxs)(t,{direction:`row`,spacing:1,children:[(0,p.jsx)(i,{...e,color:`primary`}),(0,p.jsx)(i,{...e,color:`secondary`}),(0,p.jsx)(i,{...e,color:`default`})]})}),(0,p.jsx)(s,{title:`Filled`,children:(0,p.jsx)(t,{direction:`row`,spacing:1,children:m.map(t=>(0,p.jsx)(f,{...e,variant:`filled`,color:t},t))})}),(0,p.jsx)(s,{title:`Outlined`,children:(0,p.jsx)(t,{direction:`row`,spacing:1,children:m.map(t=>(0,p.jsx)(f,{...e,variant:`outlined`,color:t},t))})}),(0,p.jsx)(s,{title:`Sizes`,children:(0,p.jsxs)(t,{direction:`row`,spacing:1,sx:{alignItems:`center`},children:[(0,p.jsx)(i,{...e,size:`small`}),(0,p.jsx)(i,{...e,size:`medium`})]})}),(0,p.jsx)(s,{title:`Disabled`,children:(0,p.jsx)(i,{...e,disabled:!0})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};