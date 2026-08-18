import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Mt as n,_t as r,r as i,xt as a}from"./iframe-BqKnv7wQ.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-CH5lCpJ9.js";var u,d,f,p,m,h,g;e((()=>{i(),o(),u=n(),d=[`success`,`warning`,`error`,`info`],f={success:`Correction envoyée avec succès.`,warning:`Cette correction contient des remarques à vérifier.`,error:`Échec de l'envoi de la correction.`,info:`Une nouvelle correction est disponible.`},p=[`Fond filled corrigé à l’AA : success/error passent à .dark (.main est trop pastel pour porter du texte blanc à 4.5:1) ; warning/info restent en .main, déjà lisibles avec leur contrastText (6.12–7.36:1).`,`Icône du variant filled non redéfinie : elle hérite de currentColor (= contrastText), comportement natif MUI, pas un oubli.`,`AlertTitle : typography.alert.title (16/400/24, Zain) câblé pour la première fois — texte toujours en text.primary (noir), quels que soient variant/severity, pour ressortir davantage que le corps du message.`],m={title:`Components/Alert`,component:a,decorators:[e=>(0,u.jsx)(l,{title:`Alert`,notes:p,children:(0,u.jsx)(e,{})})],parameters:{controls:{disable:!0}}},h={render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Standard`,children:(0,u.jsx)(t,{spacing:1,children:d.map(e=>(0,u.jsx)(a,{severity:e,children:f[e]},e))})}),(0,u.jsx)(s,{title:`Outlined`,children:(0,u.jsx)(t,{spacing:1,children:d.map(e=>(0,u.jsx)(a,{severity:e,variant:`outlined`,children:f[e]},e))})}),(0,u.jsx)(s,{title:`Filled`,children:(0,u.jsx)(t,{spacing:1,children:d.map(e=>(0,u.jsx)(a,{severity:e,variant:`filled`,children:f[e]},e))})}),(0,u.jsx)(s,{title:`Avec AlertTitle`,children:(0,u.jsxs)(a,{severity:`info`,variant:`filled`,children:[(0,u.jsx)(r,{children:`Professeur de lycée en Île-de-France ?`}),`Vous pouvez désormais commander une licence Logbook sur le catalogue de la Région.`]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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

      <Section title="Avec AlertTitle">
        <Alert severity="info" variant="filled">
          <AlertTitle>Professeur de lycée en Île-de-France ?</AlertTitle>
          Vous pouvez désormais commander une licence Logbook sur le catalogue de la Région.
        </Alert>
      </Section>
    </Sections>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};