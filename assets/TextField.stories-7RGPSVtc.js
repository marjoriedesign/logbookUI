import{i as e}from"./preload-helper-BdFrVu1K.js";import{Tt as t,o as n,r}from"./iframe-D_dLIpmG.js";import{i,n as a,r as o,t as s}from"./PageLayout-Bk6Yi5yR.js";var c,l,u,d,f;e((()=>{r(),i(),c=t(),l=[`Contour par défaut en secondary.main (beige) malgré un contraste de 1.30:1 contre blanc, sous le seuil AA recommandé de 3:1 — même exception assumée que Secondary Outlined sur Button.`,`error.main natif MUI (#ff7940, 2.61:1) est sous l’AA : le thème le remplace par error.dark (5.25:1) pour le contour/label/helperText.`],u={title:`Components/TextField`,component:n,decorators:[e=>(0,c.jsx)(s,{title:`TextField`,notes:l,children:(0,c.jsx)(e,{})})],args:{label:`Nom de l’élève`,placeholder:`Ex: Camille Dupont`}},d={render:e=>(0,c.jsxs)(o,{children:[(0,c.jsx)(a,{title:`Default`,children:(0,c.jsx)(n,{...e})}),(0,c.jsx)(a,{title:`HelperText`,children:(0,c.jsx)(n,{...e,helperText:`Tel qu’il apparaît dans le registre de classe`})}),(0,c.jsx)(a,{title:`ErrorState`,children:(0,c.jsx)(n,{...e,error:!0,helperText:`Ce champ est requis`})}),(0,c.jsx)(a,{title:`Disabled`,children:(0,c.jsx)(n,{...e,disabled:!0})})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};