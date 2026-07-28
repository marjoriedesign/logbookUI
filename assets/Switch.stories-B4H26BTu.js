import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,R as n,S as r,r as i}from"./iframe-CIXJBCw9.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-DbhlXRb2.js";var l,u,d,f,p,m;e((()=>{i(),a(),l=t(),u=[{token:`color.secondary.main`,note:`piste à l’état off, et piste+rond à l’état désactivé`},{token:`color.primary.main`,note:`piste à l’état on (color="primary")`},{token:`color.primary.contrastText`,note:`rond (thumb), toujours blanc`}],d=[`Dimensions figées en dur (piste 36×22px, rond 16px) : aucun cran de spacing existant ne correspond — exception documentée dans Switch.ts.`,`État désactivé : piste transparente + contour secondary.main, rond secondary.main — logique de Secondary Outlined (Button) reprise manuellement, car "secondary" n’existe pas comme couleur native sur Switch.`,`opacity forcée à 1 sur toute la piste : MUI applique nativement 0.5 à l’état coché, ce qui délave primary.main à l’écran sans ce override.`],f={title:`Components/Switch`,component:r,decorators:[e=>(0,l.jsx)(c,{title:`Switch`,tokens:u,notes:d,children:(0,l.jsx)(e,{})})],args:{defaultChecked:!0}},p={render:e=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{title:`Default`,children:(0,l.jsx)(n,{control:(0,l.jsx)(r,{...e}),label:`Activité`})}),(0,l.jsx)(o,{title:`Disabled`,children:(0,l.jsx)(n,{control:(0,l.jsx)(r,{disabled:!0}),label:`Désactivé`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <FormControlLabel control={<Switch {...args} />} label="Activité" />
      </Section>

      <Section title="Disabled">
        <FormControlLabel control={<Switch disabled />} label="Désactivé" />
      </Section>
    </Sections>
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};