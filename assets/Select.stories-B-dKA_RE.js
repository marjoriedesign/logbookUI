import{i as e}from"./preload-helper-BdFrVu1K.js";import{B as t,Ct as n,E as r,O as i,P as a,r as o}from"./iframe-CIXJBCw9.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-DbhlXRb2.js";function d({error:e,disabled:n,label:o}){return(0,f.jsxs)(t,{sx:{minWidth:220},error:e,disabled:n,children:[o&&(0,f.jsx)(a,{id:`correction-type-label`,children:o}),(0,f.jsxs)(r,{labelId:o?`correction-type-label`:void 0,label:o,"aria-label":o?void 0:`Type de correction`,defaultValue:`oral`,children:[(0,f.jsx)(i,{value:`oral`,children:`Correction orale`}),(0,f.jsx)(i,{value:`ecrite`,children:`Correction écrite`}),(0,f.jsx)(i,{value:`mixte`,children:`Mixte`})]})]})}var f,p,m,h,g,_;e((()=>{o(),s(),f=n(),p=[{token:`color.primary.main`,note:`couleur du texte sélectionné`},{token:`color.secondary.main`,note:`contour au repos et au survol (MuiOutlinedInput — partagé avec TextField)`},{token:`color.action.hover`,note:`fond au survol — beige quasi blanc (grey.50, #fdfaf3), même teinte que le header de Table`},{token:`color.action.disabled`,note:`contour au survol d’un Select désactivé`},{token:`designTokens.borderRadius.md`,note:`rayon du root Select (md, différent du sm partagé TextField)`}],m=[`Fond au survol volontairement léger (beige quasi blanc) plutôt qu’un remplissage plein comme Button Secondary Outlined : un Select reste un champ de formulaire, pas une action — un survol trop appuyé serait perçu comme un état pressé.`,`Contour au survol figé explicitement sur secondary.main (même teinte qu’au repos) : sans ce override, MUI assombrit nativement le contour vers le noir au survol.`,`Pas d’intitulé par défaut dans la démo : sans InputLabel visible, un aria-label est posé pour rester conforme AA.`],h={title:`Components/Select`,component:d,decorators:[e=>(0,f.jsx)(u,{title:`Select`,tokens:p,notes:m,children:(0,f.jsx)(e,{})})],parameters:{controls:{disable:!0}}},g={render:()=>(0,f.jsxs)(l,{children:[(0,f.jsx)(c,{title:`Default`,children:(0,f.jsx)(d,{})}),(0,f.jsx)(c,{title:`WithLabel`,children:(0,f.jsx)(d,{label:`Type de correction`})}),(0,f.jsx)(c,{title:`Disabled`,children:(0,f.jsx)(d,{disabled:!0})}),(0,f.jsx)(c,{title:`ErrorState`,children:(0,f.jsx)(d,{error:!0})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};