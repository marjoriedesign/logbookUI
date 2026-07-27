import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,R as n,W as r,r as i,w as a}from"./iframe-CnVZLGNt.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-C3rbEhY_.js";var u,d,f,p,m;e((()=>{i(),o(),u=t(),d=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],f={title:`Components/Checkbox`,component:r,decorators:[e=>(0,u.jsx)(l,{title:`Checkbox`,children:(0,u.jsx)(e,{})})],parameters:{controls:{disable:!0}}},p={render:e=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Default`,children:(0,u.jsx)(n,{control:(0,u.jsx)(r,{...e}),label:`Recevoir les notifications`})}),(0,u.jsx)(s,{title:`Colors`,children:(0,u.jsx)(a,{direction:`row`,spacing:2,children:d.map(e=>(0,u.jsx)(n,{control:(0,u.jsx)(r,{defaultChecked:!0,color:e}),label:e},e))})}),(0,u.jsx)(s,{title:`States`,children:(0,u.jsxs)(a,{direction:`row`,spacing:2,children:[(0,u.jsx)(n,{control:(0,u.jsx)(r,{}),label:`Non coché`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{defaultChecked:!0}),label:`Coché`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{indeterminate:!0}),label:`Indéterminé`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{disabled:!0}),label:`Désactivé`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{disabled:!0,defaultChecked:!0}),label:`Désactivé (coché)`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <FormControlLabel control={<Checkbox {...args} />} label="Recevoir les notifications" />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={2}>
          {colors.map(c => <FormControlLabel key={c} control={<Checkbox defaultChecked color={c} />} label={c} />)}
        </Stack>
      </Section>

      <Section title="States">
        <Stack direction="row" spacing={2}>
          <FormControlLabel control={<Checkbox />} label="Non coché" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Coché" />
          <FormControlLabel control={<Checkbox indeterminate />} label="Indéterminé" />
          <FormControlLabel control={<Checkbox disabled />} label="Désactivé" />
          <FormControlLabel control={<Checkbox disabled defaultChecked />} label="Désactivé (coché)" />
        </Stack>
      </Section>
    </Sections>
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};