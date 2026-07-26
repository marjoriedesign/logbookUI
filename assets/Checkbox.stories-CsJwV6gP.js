import{i as e}from"./preload-helper-BdFrVu1K.js";import{B as t,P as n,_t as r,b as i,r as a}from"./iframe-IM57FS_Y.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-CRwZLSXZ.js";var u,d,f,p,m;e((()=>{a(),o(),u=r(),d=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],f={title:`Components/Checkbox`,component:t,decorators:[e=>(0,u.jsx)(l,{title:`Checkbox`,children:(0,u.jsx)(e,{})})]},p={render:e=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Default`,children:(0,u.jsx)(n,{control:(0,u.jsx)(t,{...e}),label:`Recevoir les notifications`})}),(0,u.jsx)(s,{title:`Colors`,children:(0,u.jsx)(i,{direction:`row`,spacing:2,children:d.map(e=>(0,u.jsx)(n,{control:(0,u.jsx)(t,{defaultChecked:!0,color:e}),label:e},e))})}),(0,u.jsx)(s,{title:`States`,children:(0,u.jsxs)(i,{direction:`row`,spacing:2,children:[(0,u.jsx)(n,{control:(0,u.jsx)(t,{}),label:`Non coché`}),(0,u.jsx)(n,{control:(0,u.jsx)(t,{defaultChecked:!0}),label:`Coché`}),(0,u.jsx)(n,{control:(0,u.jsx)(t,{indeterminate:!0}),label:`Indéterminé`}),(0,u.jsx)(n,{control:(0,u.jsx)(t,{disabled:!0}),label:`Désactivé`}),(0,u.jsx)(n,{control:(0,u.jsx)(t,{disabled:!0,defaultChecked:!0}),label:`Désactivé (coché)`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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