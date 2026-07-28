import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,M as n,pt as r,r as i,w as a}from"./iframe-CE5Mt5Jr.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-DXSmYbJ8.js";var u,d,f,p,m;e((()=>{i(),o(),u=t(),d=[`Pas d’override de thème dédié : LinearProgress est 100% MUI natif, ses couleurs viennent directement de la palette globale (primary/secondary/success.main).`,`Pour la progression d’écoute audio spécifique à Logbook (silhouette de barres façon égaliseur), voir Logbook/ListenProgress — un composant custom séparé, pas une variante de LinearProgress.`],f={title:`Components/LinearProgress`,component:n,decorators:[e=>(0,u.jsx)(l,{title:`LinearProgress`,notes:d,children:(0,u.jsx)(e,{})})],parameters:{layout:`padded`,controls:{disable:!0}}},p={render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Determinate`,children:(0,u.jsxs)(a,{spacing:1,sx:{width:280},children:[(0,u.jsx)(r,{id:`linear-progress-label`,variant:`body2`,color:`text.secondary`,children:`12 corrections sur 20 terminées`}),(0,u.jsx)(n,{variant:`determinate`,value:60,"aria-labelledby":`linear-progress-label`})]})}),(0,u.jsx)(s,{title:`Indeterminate`,children:(0,u.jsx)(a,{sx:{width:280},children:(0,u.jsx)(n,{"aria-label":`Chargement en cours`})})}),(0,u.jsx)(s,{title:`Colors`,children:(0,u.jsxs)(a,{spacing:2,sx:{width:280},children:[(0,u.jsx)(n,{variant:`determinate`,value:70,color:`primary`,"aria-label":`Progression (primary)`}),(0,u.jsx)(n,{variant:`determinate`,value:70,color:`secondary`,"aria-label":`Progression (secondary)`}),(0,u.jsx)(n,{variant:`determinate`,value:70,color:`success`,"aria-label":`Progression (success)`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};