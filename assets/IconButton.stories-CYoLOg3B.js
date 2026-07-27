import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,_t as n,r,w as i}from"./iframe-CnVZLGNt.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-C3rbEhY_.js";import{d as l,n as u}from"./icons-Bn3_4_xp.js";import{n as d,t as f}from"./LogbookIconButton-DbIX_aMf.js";var p,m,h,g,_;e((()=>{r(),u(),a(),d(),p=t(),m=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],h={title:`Components/IconButton`,component:n,decorators:[e=>(0,p.jsx)(c,{title:`IconButton`,children:(0,p.jsx)(e,{})})],args:{"aria-label":`Démarrer l’enregistrement`,children:(0,p.jsx)(l,{size:`1em`})}},g={render:e=>(0,p.jsxs)(s,{children:[(0,p.jsx)(o,{title:`Default`,children:(0,p.jsx)(n,{...e})}),(0,p.jsx)(o,{title:`Colors`,children:(0,p.jsxs)(i,{direction:`row`,spacing:1,children:[(0,p.jsx)(n,{...e,color:`primary`}),(0,p.jsx)(n,{...e,color:`secondary`}),(0,p.jsx)(n,{...e,color:`default`})]})}),(0,p.jsx)(o,{title:`Filled`,children:(0,p.jsx)(i,{direction:`row`,spacing:1,children:m.map(t=>(0,p.jsx)(f,{...e,variant:`filled`,color:t},t))})}),(0,p.jsx)(o,{title:`Outlined`,children:(0,p.jsx)(i,{direction:`row`,spacing:1,children:m.map(t=>(0,p.jsx)(f,{...e,variant:`outlined`,color:t},t))})}),(0,p.jsx)(o,{title:`Sizes`,children:(0,p.jsxs)(i,{direction:`row`,spacing:1,sx:{alignItems:`center`},children:[(0,p.jsx)(n,{...e,size:`small`}),(0,p.jsx)(n,{...e,size:`medium`})]})}),(0,p.jsx)(o,{title:`Disabled`,children:(0,p.jsx)(n,{...e,disabled:!0})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};