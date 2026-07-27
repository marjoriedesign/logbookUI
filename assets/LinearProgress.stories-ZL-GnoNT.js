import{i as e}from"./preload-helper-BdFrVu1K.js";import{O as t,_t as n,b as r,lt as i,r as a}from"./iframe-cU_snABm.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-DadSc7qV.js";var u,d,f,p;e((()=>{a(),o(),u=n(),d={title:`Components/LinearProgress`,component:t,decorators:[e=>(0,u.jsx)(l,{title:`LinearProgress`,children:(0,u.jsx)(e,{})})],parameters:{layout:`padded`}},f={render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Determinate`,children:(0,u.jsxs)(r,{spacing:1,sx:{width:280},children:[(0,u.jsx)(i,{variant:`body2`,color:`text.secondary`,children:`12 corrections sur 20 terminées`}),(0,u.jsx)(t,{variant:`determinate`,value:60})]})}),(0,u.jsx)(s,{title:`Indeterminate`,children:(0,u.jsx)(r,{sx:{width:280},children:(0,u.jsx)(t,{})})}),(0,u.jsx)(s,{title:`Colors`,children:(0,u.jsxs)(r,{spacing:2,sx:{width:280},children:[(0,u.jsx)(t,{variant:`determinate`,value:70,color:`primary`}),(0,u.jsx)(t,{variant:`determinate`,value:70,color:`secondary`}),(0,u.jsx)(t,{variant:`determinate`,value:70,color:`success`})]})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Determinate">
        <Stack spacing={1} sx={{
        width: 280
      }}>
          <Typography variant="body2" color="text.secondary">
            12 corrections sur 20 terminées
          </Typography>
          <LinearProgress variant="determinate" value={60} />
        </Stack>
      </Section>

      <Section title="Indeterminate">
        <Stack sx={{
        width: 280
      }}>
          <LinearProgress />
        </Stack>
      </Section>

      <Section title="Colors">
        <Stack spacing={2} sx={{
        width: 280
      }}>
          <LinearProgress variant="determinate" value={70} color="primary" />
          <LinearProgress variant="determinate" value={70} color="secondary" />
          <LinearProgress variant="determinate" value={70} color="success" />
        </Stack>
      </Section>
    </Sections>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};