import{i as e}from"./preload-helper-BdFrVu1K.js";import{_t as t,b as n,ht as r,lt as i,r as a}from"./iframe-cU_snABm.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-DadSc7qV.js";var u,d,f,p;e((()=>{a(),o(),u=t(),d={title:`Components/Paper`,component:r,decorators:[e=>(0,u.jsx)(l,{title:`Paper`,children:(0,u.jsx)(e,{})})],parameters:{layout:`padded`}},f={render:()=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Elevations`,children:(0,u.jsx)(n,{direction:`row`,spacing:3,useFlexGap:!0,sx:{flexWrap:`wrap`,rowGap:`40px`},children:[0,1,3,6,12].map(e=>(0,u.jsx)(r,{elevation:e,sx:{p:2,width:140},children:(0,u.jsxs)(i,{variant:`body2`,children:[`elevation=`,e]})},e))})}),(0,u.jsx)(s,{title:`Outlined`,children:(0,u.jsx)(r,{variant:`outlined`,sx:{p:2,width:200},children:(0,u.jsx)(i,{variant:`body2`,children:`variant="outlined"`})})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};