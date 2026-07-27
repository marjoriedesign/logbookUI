import{i as e}from"./preload-helper-BdFrVu1K.js";import{B as t,Ct as n,E as r,O as i,P as a,r as o}from"./iframe-CnVZLGNt.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-C3rbEhY_.js";function d({error:e,disabled:n,label:o}){return(0,f.jsxs)(t,{sx:{minWidth:220},error:e,disabled:n,children:[o&&(0,f.jsx)(a,{id:`correction-type-label`,children:o}),(0,f.jsxs)(r,{labelId:o?`correction-type-label`:void 0,label:o,"aria-label":o?void 0:`Type de correction`,defaultValue:`oral`,children:[(0,f.jsx)(i,{value:`oral`,children:`Correction orale`}),(0,f.jsx)(i,{value:`ecrite`,children:`Correction écrite`}),(0,f.jsx)(i,{value:`mixte`,children:`Mixte`})]})]})}var f,p,m,h;e((()=>{o(),s(),f=n(),p={title:`Components/Select`,component:d,decorators:[e=>(0,f.jsx)(u,{title:`Select`,children:(0,f.jsx)(e,{})})],parameters:{controls:{disable:!0}}},m={render:()=>(0,f.jsxs)(l,{children:[(0,f.jsx)(c,{title:`Default`,children:(0,f.jsx)(d,{})}),(0,f.jsx)(c,{title:`WithLabel`,children:(0,f.jsx)(d,{label:`Type de correction`})}),(0,f.jsx)(c,{title:`Disabled`,children:(0,f.jsx)(d,{disabled:!0})}),(0,f.jsx)(c,{title:`ErrorState`,children:(0,f.jsx)(d,{error:!0})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};