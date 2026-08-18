import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Mt as n,Q as r,it as i,r as a,yt as o}from"./iframe-BqKnv7wQ.js";import{i as s,n as c,r as l,t as u}from"./PageLayout-CH5lCpJ9.js";import{i as d,n as f,r as p,t as m}from"./Growth-CRmKH4we.js";function h({icon:e,iconAlt:t=``,label:n,value:a,suffix:s}){return(0,g.jsxs)(r,{sx:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`,width:{xs:100,sm:`auto`},minWidth:{xs:`auto`,sm:128},flexShrink:{xs:0,sm:1},p:{xs:.5,sm:1},gap:2},children:[(0,g.jsx)(i,{component:`img`,src:e,alt:t,sx:{width:48,height:48}}),(0,g.jsx)(o,{variant:`h5`,color:`textPrimary`,sx:{whiteSpace:{xs:`normal`,sm:`nowrap`},width:{xs:`100%`,sm:`auto`}},children:n}),(0,g.jsxs)(i,{sx:{display:`flex`,alignItems:`baseline`,gap:.5},children:[(0,g.jsx)(o,{variant:`h4`,color:`primary`,children:a}),s&&(0,g.jsx)(o,{variant:`subtitle2`,color:`primary`,children:s})]})]})}var g,_=e((()=>{a(),g=n(),h.__docgenInfo={description:``,methods:[],displayName:`LogbookStatCard`,props:{icon:{required:!0,tsType:{name:`string`},description:`Illustration Logbook (import SVG depuis src/assets/illustrations).`},iconAlt:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},suffix:{required:!1,tsType:{name:`string`},description:'Ex. "/20" — rendu dans un style plus discret que `value`.'}}}})),v,y,b,x;e((()=>{a(),_(),s(),d(),f(),v=n(),y={title:`Logbook/StatCard`,component:h,decorators:[e=>(0,v.jsx)(u,{title:`StatCard`,children:(0,v.jsx)(e,{})})],args:{icon:p,iconAlt:`Certification`,label:`Moyenne`,value:0,suffix:`/20`}},b={render:e=>(0,v.jsxs)(l,{children:[(0,v.jsx)(c,{title:`Default`,children:(0,v.jsx)(h,{...e})}),(0,v.jsx)(c,{title:`Examples`,children:(0,v.jsxs)(t,{direction:`row`,spacing:2,children:[(0,v.jsx)(h,{icon:p,iconAlt:`Certification`,label:`Moyenne`,value:16,suffix:`/20`}),(0,v.jsx)(h,{icon:m,iconAlt:`Croissance`,label:`Progression`,value:`+12`,suffix:`%`})]})}),(0,v.jsx)(c,{title:`Groupe aligné sur la carte la plus large`,children:(0,v.jsxs)(t,{sx:{display:`grid`,gridAutoFlow:`column`,gridAutoColumns:`1fr`,gap:2},children:[(0,v.jsx)(h,{icon:p,iconAlt:`Certification`,label:`Correction`,value:16,suffix:`%`}),(0,v.jsx)(h,{icon:m,iconAlt:`Croissance`,label:`Temps moyen d'un audio`,value:`0min10s`})]})})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <LogbookStatCard {...args} />
      </Section>

      <Section title="Examples">
        <Stack direction="row" spacing={2}>
          <LogbookStatCard icon={certification} iconAlt="Certification" label="Moyenne" value={16} suffix="/20" />
          <LogbookStatCard icon={growth} iconAlt="Croissance" label="Progression" value="+12" suffix="%" />
        </Stack>
      </Section>

      <Section title="Groupe aligné sur la carte la plus large">
        {/* minWidth (pas width) sur la Card + colonnes de grille 1fr égales :
            toutes les cartes s'élargissent au niveau de la plus large plutôt
            que de laisser un libellé long passer sur 2 lignes. */}
        <Stack sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: '1fr',
        gap: 2
      }}>
          <LogbookStatCard icon={certification} iconAlt="Certification" label="Correction" value={16} suffix="%" />
          <LogbookStatCard icon={growth} iconAlt="Croissance" label="Temps moyen d'un audio" value="0min10s" />
        </Stack>
      </Section>
    </Sections>
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};