import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ot as t,ot as n,r}from"./iframe-TPXZNWZT.js";import{d as i,i as a,n as o,o as s,r as c,t as l}from"./PageLayout-cjzwQrlO.js";import{n as u,t as d}from"./LogbookIconButton-ClXJSvWY.js";var f,p,m,h,g;e((()=>{r(),s(),a(),u(),f=t(),p=[`Pas d’override de thème dédié (MuiBadge absent de src/theme/components/index.ts) : Badge est 100% MUI natif, ses couleurs viennent directement de la palette globale (primary.main/contrastText, etc. — mêmes tokens que partout ailleurs, rien de spécifique à documenter côté Figma pour ce composant en particulier).`],m={title:`Components/Badge`,component:n,decorators:[e=>(0,f.jsx)(l,{title:`Badge`,notes:p,children:(0,f.jsx)(e,{})})],parameters:{controls:{disable:!0}}},h={render:()=>(0,f.jsxs)(c,{children:[(0,f.jsx)(o,{title:`Count`,children:(0,f.jsx)(n,{badgeContent:3,color:`primary`,children:(0,f.jsx)(d,{color:`primary`,"aria-label":`Corrections reçues`,children:(0,f.jsx)(i,{size:`1em`})})})}),(0,f.jsx)(o,{title:`Dot`,children:(0,f.jsx)(n,{variant:`dot`,color:`primary`,children:(0,f.jsx)(d,{color:`primary`,"aria-label":`Nouvelles corrections`,children:(0,f.jsx)(i,{size:`1em`})})})}),(0,f.jsx)(o,{title:`Max`,children:(0,f.jsx)(n,{badgeContent:120,max:99,color:`primary`,children:(0,f.jsx)(d,{color:`primary`,"aria-label":`Corrections reçues`,children:(0,f.jsx)(i,{size:`1em`})})})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Count">
        <Badge badgeContent={3} color="primary">
          <LogbookIconButton color="primary" aria-label="Corrections reçues">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>

      <Section title="Dot">
        <Badge variant="dot" color="primary">
          <LogbookIconButton color="primary" aria-label="Nouvelles corrections">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>

      <Section title="Max">
        <Badge badgeContent={120} max={99} color="primary">
          <LogbookIconButton color="primary" aria-label="Corrections reçues">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>
    </Sections>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};