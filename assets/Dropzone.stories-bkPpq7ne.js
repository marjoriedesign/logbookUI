import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{Ot as n,Q as r,_t as i,it as a,ln as o,n as s,r as c,t as l}from"./iframe-ysG3eQCz.js";import{i as u,n as d,o as f,r as p,s as m,t as h}from"./PageLayout-BEUov2xu.js";function g({label:e=`Sélectionner un document`,helperText:t=`Sujet, corrigé, grille d’évaluation...`,accept:n,multiple:o=!0,disabled:s=!1,onFilesSelected:c}){let u=(0,_.useRef)(null);function d(){s||u.current?.click()}function f(e){!e||e.length===0||c?.(Array.from(e))}function p(e){e.preventDefault(),s||f(e.dataTransfer.files)}function h(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),d())}return(0,v.jsxs)(r,{role:`button`,tabIndex:s?-1:0,"aria-disabled":s,onClick:d,onKeyDown:h,onDragOver:e=>e.preventDefault(),onDrop:p,sx:{width:`100%`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:1,p:2,borderStyle:`dashed`,cursor:s?`default`:`pointer`,opacity:s?.5:1,transition:`background-color 0.15s ease, border-color 0.15s ease`,...!s&&{"&:hover":{backgroundColor:l.color.secondary.subtle.background,borderColor:l.color.primary.main}}},children:[(0,v.jsx)(m,{size:32,color:l.color.purple[500]}),(0,v.jsx)(i,{variant:`h5`,color:`textPrimary`,children:e}),(0,v.jsx)(i,{variant:`subtitle2`,color:`textSecondary`,children:t}),(0,v.jsx)(a,{component:`input`,ref:u,type:`file`,accept:n,multiple:o,disabled:s,onChange:e=>f(e.target.files),onClick:e=>e.stopPropagation(),sx:{display:`none`}})]})}var _,v,y=e((()=>{_=t(o(),1),c(),f(),s(),v=n(),g.__docgenInfo={description:``,methods:[],displayName:`LogbookDropzone`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Sélectionner un document'`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Sujet, corrigé, grille d’évaluation...'`,computed:!1}},accept:{required:!1,tsType:{name:`string`},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onFilesSelected:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:``}}}})),b,x,S,C;e((()=>{c(),y(),u(),b=n(),x={title:`Logbook/Dropzone`,component:g,decorators:[e=>(0,b.jsx)(h,{title:`Dropzone`,children:(0,b.jsx)(e,{})})],parameters:{controls:{disable:!0}}},S={render:()=>(0,b.jsxs)(p,{children:[(0,b.jsx)(d,{title:`Default (clic ou glisser-déposer, 480px de large)`,children:(0,b.jsx)(a,{sx:{width:{xs:`100%`,sm:480}},children:(0,b.jsx)(g,{onFilesSelected:e=>console.log(`files`,e)})})}),(0,b.jsx)(d,{title:`Libellés personnalisés`,children:(0,b.jsx)(a,{sx:{width:{xs:`100%`,sm:480}},children:(0,b.jsx)(g,{label:`Déposer la grille d'évaluation`,helperText:`PDF, jusqu'à 10 Mo`,accept:`application/pdf`,multiple:!1})})}),(0,b.jsx)(d,{title:`Désactivé`,children:(0,b.jsx)(a,{sx:{width:{xs:`100%`,sm:480}},children:(0,b.jsx)(g,{disabled:!0})})})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Default (clic ou glisser-déposer, 480px de large)">
        <Box sx={{
        width: {
          xs: '100%',
          sm: 480
        }
      }}>
          <LogbookDropzone onFilesSelected={files => console.log('files', files)} />
        </Box>
      </Section>
      <Section title="Libellés personnalisés">
        <Box sx={{
        width: {
          xs: '100%',
          sm: 480
        }
      }}>
          <LogbookDropzone label="Déposer la grille d'évaluation" helperText="PDF, jusqu'à 10 Mo" accept="application/pdf" multiple={false} />
        </Box>
      </Section>
      <Section title="Désactivé">
        <Box sx={{
        width: {
          xs: '100%',
          sm: 480
        }
      }}>
          <LogbookDropzone disabled />
        </Box>
      </Section>
    </Sections>
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,x as default};