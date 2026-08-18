import{i as e}from"./preload-helper-BdFrVu1K.js";import{At as t,it as n,r,yt as i}from"./iframe-FSf6lMNw.js";import{i as a,t as o}from"./PageLayout-Dm7H9q-3.js";var s,c,l,u,d;e((()=>{r(),a(),s=t(),c=["Pas d’override de thème dédié : Box est un conteneur générique sans styling propre, tout passe par sa prop `sx`, qui lit le thème global (palette, theme.spacing, shape.borderRadius) au cas par cas — rien à reproduire côté Figma en dehors des Foundations."],l={title:`Components/Box`,component:n,decorators:[e=>(0,s.jsx)(o,{title:`Box`,notes:c,children:(0,s.jsx)(e,{})})],parameters:{controls:{disable:!0}}},u={render:()=>(0,s.jsx)(n,{sx:{p:3,borderRadius:2,border:`1px solid`,borderColor:`divider`,backgroundColor:`background.paper`},children:(0,s.jsxs)(i,{variant:`body2`,children:[`Box est le conteneur de base — toute mise en forme passe par la prop`,` `,(0,s.jsx)(`code`,{children:`sx`}),`, qui lit le thème (couleurs, spacing, radius).`]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 3,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper'
  }}>
      <Typography variant="body2">
        Box est le conteneur de base — toute mise en forme passe par la prop{' '}
        <code>sx</code>, qui lit le thème (couleurs, spacing, radius).
      </Typography>
    </Box>
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};