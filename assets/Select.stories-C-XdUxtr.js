import{i as e}from"./preload-helper-BdFrVu1K.js";import{B as t,Ct as n,E as r,O as i,P as a,r as o}from"./iframe-CE5Mt5Jr.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-DXSmYbJ8.js";function d({error:e,disabled:n,label:o}){return(0,f.jsxs)(t,{sx:{minWidth:220},error:e,disabled:n,children:[o&&(0,f.jsx)(a,{id:`correction-type-label`,children:o}),(0,f.jsxs)(r,{labelId:o?`correction-type-label`:void 0,label:o,"aria-label":o?void 0:`Type de correction`,defaultValue:`oral`,children:[(0,f.jsx)(i,{value:`oral`,children:`Correction orale`}),(0,f.jsx)(i,{value:`ecrite`,children:`Correction écrite`}),(0,f.jsx)(i,{value:`mixte`,children:`Mixte`})]})]})}var f,p,m,h,g;e((()=>{o(),s(),f=n(),p=[`Fond au survol volontairement léger (beige quasi blanc) plutôt qu’un remplissage plein comme Button Secondary Outlined : un Select reste un champ de formulaire, pas une action — un survol trop appuyé serait perçu comme un état pressé.`,`Contour au survol figé explicitement sur secondary.main (même teinte qu’au repos) : sans ce override, MUI assombrit nativement le contour vers le noir au survol.`,`Pas d’intitulé par défaut dans la démo : sans InputLabel visible, un aria-label est posé pour rester conforme AA.`],m={title:`Components/Select`,component:d,decorators:[e=>(0,f.jsx)(u,{title:`Select`,notes:p,children:(0,f.jsx)(e,{})})],parameters:{controls:{disable:!0}}},h={render:()=>(0,f.jsxs)(l,{children:[(0,f.jsx)(c,{title:`Default`,children:(0,f.jsx)(d,{})}),(0,f.jsx)(c,{title:`WithLabel`,children:(0,f.jsx)(d,{label:`Type de correction`})}),(0,f.jsx)(c,{title:`Disabled`,children:(0,f.jsx)(d,{disabled:!0})}),(0,f.jsx)(c,{title:`ErrorState`,children:(0,f.jsx)(d,{error:!0})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Default">
        <CorrectionTypeSelect />
      </Section>

      <Section title="WithLabel">
        <CorrectionTypeSelect label="Type de correction" />
      </Section>

      <Section title="Disabled">
        <CorrectionTypeSelect disabled />
      </Section>

      <Section title="ErrorState">
        <CorrectionTypeSelect error />
      </Section>
    </Sections>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};