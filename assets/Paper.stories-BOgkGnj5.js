import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,E as n,Ot as r,_t as i,r as a}from"./iframe-DU6LKc4g.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-CYw2Slsf.js";var u,d,f,p,m;e((()=>{a(),o(),u=r(),d=[`Pas d’override de thème dédié : Paper est 100% MUI natif (ombres/rayon par défaut du thème global, pas de token Paper spécifique).`],f={title:`Components/Paper`,component:t,decorators:[e=>(0,u.jsx)(l,{title:`Paper`,notes:d,children:(0,u.jsx)(e,{})})],parameters:{layout:`padded`,controls:{disable:!0}}},p={render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Elevations`,children:(0,u.jsx)(n,{direction:`row`,spacing:3,useFlexGap:!0,sx:{flexWrap:`wrap`,rowGap:`40px`},children:[0,1,3,6,12].map(e=>(0,u.jsx)(t,{elevation:e,sx:{p:2,width:140},children:(0,u.jsxs)(i,{variant:`body2`,children:[`elevation=`,e]})},e))})}),(0,u.jsx)(s,{title:`Outlined`,children:(0,u.jsx)(t,{variant:`outlined`,sx:{p:2,width:200},children:(0,u.jsx)(i,{variant:`body2`,children:`variant="outlined"`})})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Elevations">
        <Stack direction="row" spacing={3} useFlexGap sx={{
        flexWrap: 'wrap',
        rowGap: '40px'
      }}>
          {[0, 1, 3, 6, 12].map(elevation => <Paper key={elevation} elevation={elevation} sx={{
          p: 2,
          width: 140
        }}>
              <Typography variant="body2">elevation={elevation}</Typography>
            </Paper>)}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Paper variant="outlined" sx={{
        p: 2,
        width: 200
      }}>
          <Typography variant="body2">variant="outlined"</Typography>
        </Paper>
      </Section>
    </Sections>
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};