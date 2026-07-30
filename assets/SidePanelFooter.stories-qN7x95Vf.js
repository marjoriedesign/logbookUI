import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ot as t,et as n,it as r,n as i,r as a,t as o}from"./iframe-DU6LKc4g.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-CYw2Slsf.js";function d({action:e,defaultColor:t}){return(0,p.jsx)(n,{variant:e.variant,color:e.color??t,size:`large`,disabled:e.disabled,startIcon:e.startIcon,endIcon:e.endIcon,onClick:e.onClick,sx:{flex:`1 1 auto`},children:e.label})}function f({primaryAction:e,secondaryAction:t}){return(0,p.jsxs)(r,{sx:{width:{xs:`100%`,sm:480},boxSizing:`border-box`,backgroundColor:o.color.background[`paper-elevation-0`],borderTop:`1px solid`,borderColor:`divider`,p:2,display:`flex`,gap:1},children:[t&&(0,p.jsx)(d,{action:t,defaultColor:`warning`}),(0,p.jsx)(d,{action:e})]})}var p,m=e((()=>{a(),i(),p=t(),f.__docgenInfo={description:``,methods:[],displayName:`LogbookSidePanelFooter`,props:{primaryAction:{required:!0,tsType:{name:`LogbookSidePanelFooterAction`},description:"Action principale, seule à droite si `secondaryAction` est fourni."},secondaryAction:{required:!1,tsType:{name:`LogbookSidePanelFooterAction`},description:`Action secondaire, affichée à gauche de la principale.`}}}})),h,g,_,v;e((()=>{m(),s(),h=t(),g={title:`Logbook/SidePanelFooter`,component:f,decorators:[e=>(0,h.jsx)(u,{title:`SidePanelFooter`,children:(0,h.jsx)(e,{})})],parameters:{controls:{disable:!0}}},_={render:()=>(0,h.jsxs)(l,{children:[(0,h.jsx)(c,{title:`Un seul bouton`,children:(0,h.jsx)(f,{primaryAction:{label:`Envoyer la correction`,onClick:()=>{}}})}),(0,h.jsx)(c,{title:`Deux boutons, libellés de longueur proche`,children:(0,h.jsx)(f,{primaryAction:{label:`Envoyer`,onClick:()=>{}},secondaryAction:{label:`Annuler`,onClick:()=>{}}})}),(0,h.jsx)(c,{title:`Deux boutons, un libellé plus long`,children:(0,h.jsx)(f,{primaryAction:{label:`Envoyer la correction`,onClick:()=>{}},secondaryAction:{label:`Annuler`,onClick:()=>{}}})}),(0,h.jsx)(c,{title:`Variant/couleur surchargés`,children:(0,h.jsx)(f,{primaryAction:{label:`Enregistrer`,onClick:()=>{}},secondaryAction:{label:`Supprimer le brouillon`,onClick:()=>{},variant:`outlined`,color:`error`}})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Un seul bouton">
        <LogbookSidePanelFooter primaryAction={{
        label: 'Envoyer la correction',
        onClick: () => {}
      }} />
      </Section>
      <Section title="Deux boutons, libellés de longueur proche">
        <LogbookSidePanelFooter primaryAction={{
        label: 'Envoyer',
        onClick: () => {}
      }} secondaryAction={{
        label: 'Annuler',
        onClick: () => {}
      }} />
      </Section>
      <Section title="Deux boutons, un libellé plus long">
        <LogbookSidePanelFooter primaryAction={{
        label: 'Envoyer la correction',
        onClick: () => {}
      }} secondaryAction={{
        label: 'Annuler',
        onClick: () => {}
      }} />
      </Section>
      <Section title="Variant/couleur surchargés">
        <LogbookSidePanelFooter primaryAction={{
        label: 'Enregistrer',
        onClick: () => {}
      }} secondaryAction={{
        label: 'Supprimer le brouillon',
        onClick: () => {},
        variant: 'outlined',
        color: 'error'
      }} />
      </Section>
    </Sections>
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};