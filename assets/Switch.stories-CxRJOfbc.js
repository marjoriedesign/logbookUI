import{i as e}from"./preload-helper-BdFrVu1K.js";import{B as t,Tt as n,r,w as i}from"./iframe-CfbRJzGa.js";import{i as a,n as o,r as s,t as c}from"./PageLayout-CnppISLX.js";var l,u,d,f,p;e((()=>{r(),a(),l=n(),u=[`Dimensions figées en dur (piste 36×22px, rond 16px) : aucun cran de spacing existant ne correspond — exception documentée dans Switch.ts.`,`État désactivé : piste transparente + contour secondary.main, rond secondary.main — logique de Secondary Outlined (Button) reprise manuellement, car "secondary" n’existe pas comme couleur native sur Switch.`,`opacity forcée à 1 sur toute la piste : MUI applique nativement 0.5 à l’état coché, ce qui délave primary.main à l’écran sans ce override.`],d={title:`Components/Switch`,component:i,decorators:[e=>(0,l.jsx)(c,{title:`Switch`,notes:u,children:(0,l.jsx)(e,{})})],args:{defaultChecked:!0}},f={render:e=>(0,l.jsxs)(s,{children:[(0,l.jsx)(o,{title:`Default`,children:(0,l.jsx)(t,{control:(0,l.jsx)(i,{...e}),label:`Activité`})}),(0,l.jsx)(o,{title:`Disabled`,children:(0,l.jsx)(t,{control:(0,l.jsx)(i,{disabled:!0}),label:`Désactivé`})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <FormControlLabel control={<Switch {...args} />} label="Activité" />
      </Section>

      <Section title="Disabled">
        <FormControlLabel control={<Switch disabled />} label="Désactivé" />
      </Section>
    </Sections>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};