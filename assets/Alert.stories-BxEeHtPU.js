import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,ht as n,r,w as i}from"./iframe-CIXJBCw9.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-DbhlXRb2.js";var l,u,d,f,p,m,h,g;e((()=>{r(),a(),l=t(),u=[`success`,`warning`,`error`,`info`],d={success:`Correction envoyée avec succès.`,warning:`Cette correction contient des remarques à vérifier.`,error:`Échec de l'envoi de la correction.`,info:`Une nouvelle correction est disponible.`},f=[{token:`color.{severity}.light`,note:`fond du variant standard`},{token:`color.{severity}.dark (success/error/info), warning.contrastText`,note:`icône + contour du variant outlined`},{token:`color.success/error.dark, warning/info.main`,note:`fond du variant filled — corrigé à l’AA pour success/error (voir notes)`},{token:`color.{severity}.contrastText`,note:`texte du variant filled`},{token:`color.text.secondary`,note:`texte des variants standard/outlined`},{token:`designTokens.borderRadius.md`,note:`rayon`}],p=[`Fond filled corrigé à l’AA : success/error passent à .dark (.main est trop pastel pour porter du texte blanc à 4.5:1) ; warning/info restent en .main, déjà lisibles avec leur contrastText (7.14–7.36:1).`,`Icône du variant filled non redéfinie : elle hérite de currentColor (= contrastText), comportement natif MUI, pas un oubli.`],m={title:`Components/Alert`,component:n,decorators:[e=>(0,l.jsx)(c,{title:`Alert`,tokens:f,notes:p,children:(0,l.jsx)(e,{})})],parameters:{controls:{disable:!0}}},h={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{title:`Standard`,children:(0,l.jsx)(i,{spacing:1,children:u.map(e=>(0,l.jsx)(n,{severity:e,children:d[e]},e))})}),(0,l.jsx)(o,{title:`Outlined`,children:(0,l.jsx)(i,{spacing:1,children:u.map(e=>(0,l.jsx)(n,{severity:e,variant:`outlined`,children:d[e]},e))})}),(0,l.jsx)(o,{title:`Filled`,children:(0,l.jsx)(i,{spacing:1,children:u.map(e=>(0,l.jsx)(n,{severity:e,variant:`filled`,children:d[e]},e))})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};