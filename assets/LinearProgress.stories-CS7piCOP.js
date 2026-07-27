import{i as e}from"./preload-helper-BdFrVu1K.js";import{O as t,_t as n,b as r,lt as i,r as a}from"./iframe-DNmMHhpA.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-B7DbL660.js";var u,d,f,p;e((()=>{a(),o(),u=n(),d={title:`Components/LinearProgress`,component:t,decorators:[e=>(0,u.jsx)(l,{title:`LinearProgress`,children:(0,u.jsx)(e,{})})],parameters:{layout:`padded`}},f={render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Determinate`,children:(0,u.jsxs)(r,{spacing:1,sx:{width:280},children:[(0,u.jsx)(i,{id:`linear-progress-label`,variant:`body2`,color:`text.secondary`,children:`12 corrections sur 20 terminées`}),(0,u.jsx)(t,{variant:`determinate`,value:60,"aria-labelledby":`linear-progress-label`})]})}),(0,u.jsx)(s,{title:`Indeterminate`,children:(0,u.jsx)(r,{sx:{width:280},children:(0,u.jsx)(t,{"aria-label":`Chargement en cours`})})}),(0,u.jsx)(s,{title:`Colors`,children:(0,u.jsxs)(r,{spacing:2,sx:{width:280},children:[(0,u.jsx)(t,{variant:`determinate`,value:70,color:`primary`,"aria-label":`Progression (primary)`}),(0,u.jsx)(t,{variant:`determinate`,value:70,color:`secondary`,"aria-label":`Progression (secondary)`}),(0,u.jsx)(t,{variant:`determinate`,value:70,color:`success`,"aria-label":`Progression (success)`})]})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Determinate">
        <Stack spacing={1} sx={{
        width: 280
      }}>
          <Typography id="linear-progress-label" variant="body2" color="text.secondary">
            12 corrections sur 20 terminées
          </Typography>
          <LinearProgress variant="determinate" value={60} aria-labelledby="linear-progress-label" />
        </Stack>
      </Section>

      <Section title="Indeterminate">
        <Stack sx={{
        width: 280
      }}>
          <LinearProgress aria-label="Chargement en cours" />
        </Stack>
      </Section>

      <Section title="Colors">
        <Stack spacing={2} sx={{
        width: 280
      }}>
          <LinearProgress variant="determinate" value={70} color="primary" aria-label="Progression (primary)" />
          <LinearProgress variant="determinate" value={70} color="secondary" aria-label="Progression (secondary)" />
          <LinearProgress variant="determinate" value={70} color="success" aria-label="Progression (success)" />
        </Stack>
      </Section>
    </Sections>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};