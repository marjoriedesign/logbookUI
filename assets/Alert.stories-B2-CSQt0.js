import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Tt as n,_t as r,r as i}from"./iframe-D_dLIpmG.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-Bk6Yi5yR.js";var l,u,d,f,p,m,h;e((()=>{i(),a(),l=n(),u=[`success`,`warning`,`error`,`info`],d={success:`Correction envoyée avec succès.`,warning:`Cette correction contient des remarques à vérifier.`,error:`Échec de l'envoi de la correction.`,info:`Une nouvelle correction est disponible.`},f=[`Fond filled corrigé à l’AA : success/error passent à .dark (.main est trop pastel pour porter du texte blanc à 4.5:1) ; warning/info restent en .main, déjà lisibles avec leur contrastText (7.14–7.36:1).`,`Icône du variant filled non redéfinie : elle hérite de currentColor (= contrastText), comportement natif MUI, pas un oubli.`],p={title:`Components/Alert`,component:r,decorators:[e=>(0,l.jsx)(c,{title:`Alert`,notes:f,children:(0,l.jsx)(e,{})})],parameters:{controls:{disable:!0}}},m={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{title:`Standard`,children:(0,l.jsx)(t,{spacing:1,children:u.map(e=>(0,l.jsx)(r,{severity:e,children:d[e]},e))})}),(0,l.jsx)(o,{title:`Outlined`,children:(0,l.jsx)(t,{spacing:1,children:u.map(e=>(0,l.jsx)(r,{severity:e,variant:`outlined`,children:d[e]},e))})}),(0,l.jsx)(o,{title:`Filled`,children:(0,l.jsx)(t,{spacing:1,children:u.map(e=>(0,l.jsx)(r,{severity:e,variant:`filled`,children:d[e]},e))})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};