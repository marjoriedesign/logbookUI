import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,R as n,W as r,r as i,w as a}from"./iframe-CIXJBCw9.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-DbhlXRb2.js";var u,d,f,p,m,h,g;e((()=>{i(),o(),u=t(),d=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],f=[{token:`color.secondary/warning.contrastText, success/error/info.dark`,note:`couleur de la coche cochée/indéterminée par color`}],p=[`Substitution nécessaire : color.{X}.main (couleur native MUI pour la coche) est trop pastel pour tenir 3:1 sur fond blanc en secondary/success/warning/error/info — remplacé par la teinte la plus foncée déjà retenue ailleurs (.dark, ou .contrastText si .dark reste trop clair).`,`Limitation connue, pas un bug du thème : Checkbox indeterminate déclenche une alerte axe-core (aria-conditional-attr) — MUI pose lui-même aria-checked="mixed" sur l’input natif, un choix délibéré pour l’accessibilité lecteur d’écran. Documenté dans SKILL.md.`],m={title:`Components/Checkbox`,component:r,decorators:[e=>(0,u.jsx)(l,{title:`Checkbox`,tokens:f,notes:p,children:(0,u.jsx)(e,{})})],parameters:{controls:{disable:!0}}},h={render:e=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Default`,children:(0,u.jsx)(n,{control:(0,u.jsx)(r,{...e}),label:`Recevoir les notifications`})}),(0,u.jsx)(s,{title:`Colors`,children:(0,u.jsx)(a,{direction:`row`,spacing:2,children:d.map(e=>(0,u.jsx)(n,{control:(0,u.jsx)(r,{defaultChecked:!0,color:e}),label:e},e))})}),(0,u.jsx)(s,{title:`States`,children:(0,u.jsxs)(a,{direction:`row`,spacing:2,children:[(0,u.jsx)(n,{control:(0,u.jsx)(r,{}),label:`Non coché`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{defaultChecked:!0}),label:`Coché`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{indeterminate:!0}),label:`Indéterminé`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{disabled:!0}),label:`Désactivé`}),(0,u.jsx)(n,{control:(0,u.jsx)(r,{disabled:!0,defaultChecked:!0}),label:`Désactivé (coché)`})]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};