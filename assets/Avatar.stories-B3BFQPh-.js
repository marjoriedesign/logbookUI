import{i as e}from"./preload-helper-BdFrVu1K.js";import{E as t,Ot as n,_t as r,ct as i,it as a,n as o,r as s,t as c,ut as l}from"./iframe-C9EcFKKI.js";import{C as u,i as d,n as f,o as p,r as m,t as h}from"./PageLayout-DSn-iGAo.js";import{n as g,t as _}from"./Boy1-CgobQqwk.js";import{a as v,c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./Girl3-BOAy6O-O.js";import{a as E,i as D,n as O,o as k,r as A,t as j}from"./Girl4-BmaP4x6v.js";var M,N,P,F,I,L;e((()=>{s(),p(),d(),o(),g(),y(),k(),D(),S(),b(),x(),O(),M=n(),N=[{name:`Boy1`,src:_},{name:`Boy2`,src:w},{name:`Boy3`,src:E},{name:`Boy4`,src:A},{name:`Girl1`,src:v},{name:`Girl2`,src:C},{name:`Girl3`,src:T},{name:`Girl4`,src:j}],P=[`Fallback colorDefault corrigé à l’AA : le défaut MUI natif (#bdbdbd + texte blanc, 1.87:1) est hors nuancier et sous le seuil — remplacé par un fond pastel + text.secondary (8.42:1).`,`Les 4 teintes "Initials" ne sont pas des tokens de thème pour Avatar : elles sont posées directement en sx dans chaque story, à reproduire manuellement si utilisées ailleurs.`,`AvatarGroup : spacing="small" (chevauchement -16px au lieu de -8px par défaut) et un z-index inversé sur 10 niveaux (en dur, sans lien à un token) pour empiler les avatars de gauche à droite plutôt que l’ordre natif MUI.`],F={title:`Components/Avatar`,component:l,decorators:[e=>(0,M.jsx)(h,{title:`Avatar`,notes:P,children:(0,M.jsx)(e,{})})],parameters:{controls:{disable:!0}}},I={render:()=>(0,M.jsxs)(m,{children:[(0,M.jsx)(f,{title:`Initials`,children:(0,M.jsxs)(t,{direction:`row`,spacing:2,children:[(0,M.jsx)(l,{sx:{backgroundColor:c.color.orange[100],color:c.color.text.secondary},children:`CD`}),(0,M.jsx)(l,{sx:{backgroundColor:c.color.yellow[200],color:c.color.text.secondary},children:`CD`}),(0,M.jsx)(l,{sx:{backgroundColor:c.color.green[100],color:c.color.text.secondary},children:`CD`}),(0,M.jsx)(l,{sx:{backgroundColor:c.color.teal[100],color:c.color.text.secondary},children:`CD`})]})}),(0,M.jsx)(f,{title:`Icon`,children:(0,M.jsx)(l,{children:(0,M.jsx)(u,{size:20})})}),(0,M.jsx)(f,{title:`Illustrated`,children:(0,M.jsx)(t,{direction:`row`,spacing:2,useFlexGap:!0,sx:{flexWrap:`wrap`},children:N.map(({name:e,src:t})=>(0,M.jsxs)(a,{sx:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:.5},children:[(0,M.jsx)(l,{src:t,alt:e}),(0,M.jsx)(r,{variant:`caption`,color:`text.secondary`,children:e})]},e))})}),(0,M.jsx)(f,{title:`Sizes`,children:(0,M.jsxs)(t,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:[(0,M.jsx)(l,{src:_,alt:`Boy1`,sx:{width:24,height:24}}),(0,M.jsx)(l,{src:_,alt:`Boy1`}),(0,M.jsx)(l,{src:_,alt:`Boy1`,sx:{width:56,height:56}})]})}),(0,M.jsx)(f,{title:`AvatarGroup`,children:(0,M.jsxs)(i,{max:4,children:[(0,M.jsx)(l,{src:_,alt:`Boy1`}),(0,M.jsx)(l,{src:v,alt:`Girl1`}),(0,M.jsx)(l,{src:w,alt:`Boy2`}),(0,M.jsx)(l,{src:C,alt:`Girl2`}),(0,M.jsx)(l,{src:E,alt:`Boy3`})]})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Sections>
      <Section title="Initials">
        <Stack direction="row" spacing={2}>
          {/* Mêmes 4 teintes que les fonds des avatars illustrés (section
              Illustrated), remplacées par leur équivalent le plus proche du
              nuancier (orange.100/yellow.200/green.100/teal.100). */}
          <Avatar sx={{
          backgroundColor: designTokens.color.orange['100'],
          color: designTokens.color.text.secondary
        }}>
            CD
          </Avatar>
          <Avatar sx={{
          backgroundColor: designTokens.color.yellow['200'],
          color: designTokens.color.text.secondary
        }}>
            CD
          </Avatar>
          <Avatar sx={{
          backgroundColor: designTokens.color.green['100'],
          color: designTokens.color.text.secondary
        }}>
            CD
          </Avatar>
          <Avatar sx={{
          backgroundColor: designTokens.color.teal['100'],
          color: designTokens.color.text.secondary
        }}>
            CD
          </Avatar>
        </Stack>
      </Section>

      <Section title="Icon">
        <Avatar>
          <RiUserLine size={20} />
        </Avatar>
      </Section>

      <Section title="Illustrated">
        <Stack direction="row" spacing={2} useFlexGap sx={{
        flexWrap: 'wrap'
      }}>
          {avatarVisuals.map(({
          name,
          src
        }) => <Box key={name} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5
        }}>
              <Avatar src={src} alt={name} />
              <Typography variant="caption" color="text.secondary">
                {name}
              </Typography>
            </Box>)}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={2} sx={{
        alignItems: 'center'
      }}>
          <Avatar src={boy1} alt="Boy1" sx={{
          width: 24,
          height: 24
        }} />
          <Avatar src={boy1} alt="Boy1" />
          <Avatar src={boy1} alt="Boy1" sx={{
          width: 56,
          height: 56
        }} />
        </Stack>
      </Section>

      <Section title="AvatarGroup">
        <AvatarGroup max={4}>
          <Avatar src={boy1} alt="Boy1" />
          <Avatar src={girl1} alt="Girl1" />
          <Avatar src={boy2} alt="Boy2" />
          <Avatar src={girl2} alt="Girl2" />
          <Avatar src={boy3} alt="Boy3" />
        </AvatarGroup>
      </Section>
    </Sections>
}`,...I.parameters?.docs?.source}}},L=[`Default`]}))();export{I as Default,L as __namedExportsOrder,F as default};