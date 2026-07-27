import{i as e}from"./preload-helper-BdFrVu1K.js";import{_t as t,b as n,it as r,n as i,r as a,t as o}from"./iframe-DNmMHhpA.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-B7DbL660.js";var d,f,p,m;e((()=>{a(),s(),i(),d=t(),f={title:`Components/Chip`,component:r,decorators:[e=>(0,d.jsx)(u,{title:`Chip`,children:(0,d.jsx)(e,{})})],args:{label:`Default`}},p={render:e=>(0,d.jsxs)(l,{children:[(0,d.jsx)(c,{title:`Default`,children:(0,d.jsx)(r,{...e})}),(0,d.jsx)(c,{title:`Strong`,children:(0,d.jsxs)(n,{direction:`row`,spacing:1,children:[(0,d.jsx)(r,{label:`Primary`,color:`primary`}),(0,d.jsx)(r,{label:`Secondary`,color:`secondary`}),(0,d.jsx)(r,{label:`Succès`,color:`success`}),(0,d.jsx)(r,{label:`Attention`,color:`warning`})]})}),(0,d.jsx)(c,{title:`Subtle`,children:(0,d.jsxs)(n,{direction:`row`,spacing:1,children:[(0,d.jsx)(r,{label:`Non réalisée`,color:`secondary`,variant:`subtle`}),(0,d.jsx)(r,{label:`Rendue`,color:`success`,variant:`subtle`}),(0,d.jsx)(r,{label:`Autre`,color:`warning`,variant:`subtle`,sx:{backgroundColor:o.color.yellow[200]}}),(0,d.jsx)(r,{label:`Analysée`,color:`error`,variant:`subtle`,sx:{backgroundColor:o.color.orange[100]}}),(0,d.jsx)(r,{label:`Consultée`,color:`info`,variant:`subtle`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};