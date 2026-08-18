import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{At as n,Q as r,dn as i,it as a,n as o,r as s,t as c,yt as l}from"./iframe-FSf6lMNw.js";import{i as u,n as d,o as f,r as p,s as m,t as h}from"./PageLayout-Dm7H9q-3.js";function g({label:e=`Sélectionner un document`,helperText:t=`Sujet, corrigé, grille d’évaluation...`,accept:n,multiple:i=!0,disabled:o=!1,onFilesSelected:s}){let u=(0,_.useRef)(null);function d(){o||u.current?.click()}function f(e){!e||e.length===0||s?.(Array.from(e))}function p(e){e.preventDefault(),o||f(e.dataTransfer.files)}function h(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),d())}return(0,v.jsxs)(r,{role:`button`,tabIndex:o?-1:0,"aria-disabled":o,onClick:d,onKeyDown:h,onDragOver:e=>e.preventDefault(),onDrop:p,sx:{width:`100%`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:1,p:2,borderStyle:`dashed`,cursor:o?`default`:`pointer`,opacity:o?.5:1,transition:`background-color 0.15s ease, border-color 0.15s ease`,...!o&&{"&:hover":{backgroundColor:c.color.secondary.subtle.background,borderColor:c.color.primary.main}}},children:[(0,v.jsx)(m,{size:32,color:c.color.purple[500]}),(0,v.jsx)(l,{variant:`h5`,color:`textPrimary`,children:e}),(0,v.jsx)(l,{variant:`subtitle2`,color:`textSecondary`,children:t}),(0,v.jsx)(a,{component:`input`,ref:u,type:`file`,accept:n,multiple:i,disabled:o,onChange:e=>f(e.target.files),onClick:e=>e.stopPropagation(),sx:{display:`none`}})]})}var _,v,y=e((()=>{_=t(i(),1),s(),f(),o(),v=n(),g.__docgenInfo={description:``,methods:[],displayName:`LogbookDropzone`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Sélectionner un document'`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Sujet, corrigé, grille d’évaluation...'`,computed:!1}},accept:{required:!1,tsType:{name:`string`},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onFilesSelected:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:``}}}})),b,x,S,C;e((()=>{s(),y(),u(),b=n(),x={title:`Logbook/Dropzone`,component:g,decorators:[e=>(0,b.jsx)(h,{title:`Dropzone`,children:(0,b.jsx)(e,{})})],parameters:{controls:{disable:!0}}},S={render:()=>(0,b.jsxs)(p,{children:[(0,b.jsx)(d,{title:`Default (clic ou glisser-déposer, 480px de large)`,children:(0,b.jsx)(a,{sx:{width:{xs:`100%`,sm:480}},children:(0,b.jsx)(g,{onFilesSelected:e=>console.log(`files`,e)})})}),(0,b.jsx)(d,{title:`Libellés personnalisés`,children:(0,b.jsx)(a,{sx:{width:{xs:`100%`,sm:480}},children:(0,b.jsx)(g,{label:`Déposer la grille d'évaluation`,helperText:`PDF, jusqu'à 10 Mo`,accept:`application/pdf`,multiple:!1})})}),(0,b.jsx)(d,{title:`Désactivé`,children:(0,b.jsx)(a,{sx:{width:{xs:`100%`,sm:480}},children:(0,b.jsx)(g,{disabled:!0})})})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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