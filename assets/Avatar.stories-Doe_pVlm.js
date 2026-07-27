import{i as e}from"./preload-helper-BdFrVu1K.js";import{X as t,_t as n,b as r,et as i,lt as a,n as o,nt as s,r as c,t as l}from"./iframe-cU_snABm.js";import{i as u,n as d,r as f,t as p}from"./PageLayout-DadSc7qV.js";import{d as m,n as h}from"./icons-CHfzGdaC.js";import{a as g,c as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./Girl3-BWYlNjl2.js";import{a as w,c as T,i as E,n as D,o as O,r as k,s as A,t as j}from"./Girl4-DbvBXpL6.js";var M,N,P,F,I;e((()=>{c(),h(),u(),o(),_(),b(),T(),O(),v(),E(),y(),D(),M=n(),N=[{name:`Boy1`,src:S},{name:`Boy2`,src:g},{name:`Boy3`,src:A},{name:`Boy4`,src:w},{name:`Girl1`,src:x},{name:`Girl2`,src:k},{name:`Girl3`,src:C},{name:`Girl4`,src:j}],P={title:`Components/Avatar`,component:s,decorators:[e=>(0,M.jsx)(p,{title:`Avatar`,children:(0,M.jsx)(e,{})})]},F={render:()=>(0,M.jsxs)(f,{children:[(0,M.jsx)(d,{title:`Initials`,children:(0,M.jsxs)(r,{direction:`row`,spacing:2,children:[(0,M.jsx)(s,{sx:{backgroundColor:l.color.orange[100],color:l.color.text.secondary},children:`CD`}),(0,M.jsx)(s,{sx:{backgroundColor:l.color.yellow[200],color:l.color.text.secondary},children:`CD`}),(0,M.jsx)(s,{sx:{backgroundColor:l.color.green[100],color:l.color.text.secondary},children:`CD`}),(0,M.jsx)(s,{sx:{backgroundColor:l.color.teal[100],color:l.color.text.secondary},children:`CD`})]})}),(0,M.jsx)(d,{title:`Icon`,children:(0,M.jsx)(s,{children:(0,M.jsx)(m,{size:20})})}),(0,M.jsx)(d,{title:`Illustrated`,children:(0,M.jsx)(r,{direction:`row`,spacing:2,useFlexGap:!0,sx:{flexWrap:`wrap`},children:N.map(({name:e,src:n})=>(0,M.jsxs)(t,{sx:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:.5},children:[(0,M.jsx)(s,{src:n,alt:e}),(0,M.jsx)(a,{variant:`caption`,color:`text.secondary`,children:e})]},e))})}),(0,M.jsx)(d,{title:`Sizes`,children:(0,M.jsxs)(r,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:[(0,M.jsx)(s,{src:S,alt:`Boy1`,sx:{width:24,height:24}}),(0,M.jsx)(s,{src:S,alt:`Boy1`}),(0,M.jsx)(s,{src:S,alt:`Boy1`,sx:{width:56,height:56}})]})}),(0,M.jsx)(d,{title:`AvatarGroup`,children:(0,M.jsxs)(i,{max:4,children:[(0,M.jsx)(s,{src:S,alt:`Boy1`}),(0,M.jsx)(s,{src:x,alt:`Girl1`}),(0,M.jsx)(s,{src:g,alt:`Boy2`}),(0,M.jsx)(s,{src:k,alt:`Girl2`}),(0,M.jsx)(s,{src:A,alt:`Boy3`})]})})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Default`]}))();export{F as Default,I as __namedExportsOrder,P as default};