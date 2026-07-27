import{i as e}from"./preload-helper-BdFrVu1K.js";import{_t as t,b as n,dt as r,r as i}from"./iframe-cU_snABm.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-DadSc7qV.js";var l,u,d,f,p,m;e((()=>{i(),a(),l=t(),u=[`success`,`warning`,`error`,`info`],d={success:`Correction envoyée avec succès.`,warning:`Cette correction contient des remarques à vérifier.`,error:`Échec de l'envoi de la correction.`,info:`Une nouvelle correction est disponible.`},f={title:`Components/Alert`,component:r,decorators:[e=>(0,l.jsx)(c,{title:`Alert`,children:(0,l.jsx)(e,{})})]},p={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{title:`Standard`,children:(0,l.jsx)(n,{spacing:1,children:u.map(e=>(0,l.jsx)(r,{severity:e,children:d[e]},e))})}),(0,l.jsx)(o,{title:`Outlined`,children:(0,l.jsx)(n,{spacing:1,children:u.map(e=>(0,l.jsx)(r,{severity:e,variant:`outlined`,children:d[e]},e))})}),(0,l.jsx)(o,{title:`Filled`,children:(0,l.jsx)(n,{spacing:1,children:u.map(e=>(0,l.jsx)(r,{severity:e,variant:`filled`,children:d[e]},e))})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Standard">
        <Stack spacing={1}>
          {severities.map(severity => <Alert key={severity} severity={severity}>
              {messages[severity]}
            </Alert>)}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Stack spacing={1}>
          {severities.map(severity => <Alert key={severity} severity={severity} variant="outlined">
              {messages[severity]}
            </Alert>)}
        </Stack>
      </Section>

      <Section title="Filled">
        <Stack spacing={1}>
          {severities.map(severity => <Alert key={severity} severity={severity} variant="filled">
              {messages[severity]}
            </Alert>)}
        </Stack>
      </Section>
    </Sections>
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};