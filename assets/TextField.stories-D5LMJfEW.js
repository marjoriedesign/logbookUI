import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,o as n,r}from"./iframe-CIXJBCw9.js";import{i,n as a,r as o,t as s}from"./PageLayout-DbhlXRb2.js";var c,l,u,d,f,p;e((()=>{r(),i(),c=t(),l=[{token:`color.secondary.main`,note:`contour au repos (MuiOutlinedInput — partagé avec Select)`},{token:`color.error.dark`,note:`contour + label + helperText à l’état error`},{token:`designTokens.borderRadius.sm`,note:`rayon (sm, différent du md utilisé par Select)`}],u=[`Contour par défaut en secondary.main (beige) malgré un contraste de 1.30:1 contre blanc, sous le seuil AA recommandé de 3:1 — même exception assumée que Secondary Outlined sur Button.`,`error.main natif MUI (#ff7940, 2.61:1) est sous l’AA : le thème le remplace par error.dark (5.25:1) pour le contour/label/helperText.`],d={title:`Components/TextField`,component:n,decorators:[e=>(0,c.jsx)(s,{title:`TextField`,tokens:l,notes:u,children:(0,c.jsx)(e,{})})],args:{label:`Nom de l’élève`,placeholder:`Ex: Camille Dupont`}},f={render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(a,{title:`Default`,children:(0,c.jsx)(n,{...e})}),(0,c.jsx)(a,{title:`HelperText`,children:(0,c.jsx)(n,{...e,helperText:`Tel qu’il apparaît dans le registre de classe`})}),(0,c.jsx)(a,{title:`ErrorState`,children:(0,c.jsx)(n,{...e,error:!0,helperText:`Ce champ est requis`})}),(0,c.jsx)(a,{title:`Disabled`,children:(0,c.jsx)(n,{...e,disabled:!0})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <TextField {...args} />
      </Section>

      <Section title="HelperText">
        <TextField {...args} helperText="Tel qu’il apparaît dans le registre de classe" />
      </Section>

      <Section title="ErrorState">
        <TextField {...args} error helperText="Ce champ est requis" />
      </Section>

      <Section title="Disabled">
        <TextField {...args} disabled />
      </Section>
    </Sections>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};