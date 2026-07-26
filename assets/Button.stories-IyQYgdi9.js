import{i as e}from"./preload-helper-BdFrVu1K.js";import{K as t,_t as n,b as r,lt as i,r as a}from"./iframe-IM57FS_Y.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-CRwZLSXZ.js";var u,d,f,p,m,h,g;e((()=>{a(),o(),u=n(),d=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],f=[`contained`,`outlined`,`text`],p={contained:d,outlined:d,text:d},m={title:`Components/Button`,component:t,decorators:[e=>(0,u.jsx)(l,{title:`Button`,children:(0,u.jsx)(e,{})})],args:{children:`Valider`},argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`,`info`]},variant:{control:`select`,options:[`contained`,`outlined`,`text`]},size:{control:`select`,options:[`small`,`medium`,`large`]}}},h={render:e=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Default`,children:(0,u.jsx)(t,{...e})}),(0,u.jsx)(s,{title:`Variants`,children:(0,u.jsx)(r,{spacing:3,children:f.map(e=>(0,u.jsxs)(r,{spacing:1,children:[(0,u.jsx)(i,{variant:`body2`,sx:{textTransform:`capitalize`,fontWeight:500},children:e}),(0,u.jsx)(r,{direction:`row`,spacing:2,useFlexGap:!0,sx:{flexWrap:`wrap`},children:p[e].map(n=>(0,u.jsx)(t,{variant:e,color:n,sx:{textTransform:`capitalize`},children:n},n))})]},e))})}),(0,u.jsx)(s,{title:`Sizes`,children:(0,u.jsxs)(r,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:[(0,u.jsx)(t,{...e,size:`small`,children:`Small`}),(0,u.jsx)(t,{...e,size:`medium`,children:`Medium`}),(0,u.jsx)(t,{...e,size:`large`,children:`Large`})]})}),(0,u.jsx)(s,{title:`Disabled`,children:(0,u.jsx)(t,{...e,disabled:!0})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Sections>
      <Section title="Default">
        <Button {...args} />
      </Section>

      <Section title="Variants">
        <Stack spacing={3}>
          {variants.map(variant => <Stack key={variant} spacing={1}>
              <Typography variant="body2" sx={{
            textTransform: 'capitalize',
            fontWeight: 500
          }}>
                {variant}
              </Typography>
              <Stack direction="row" spacing={2} useFlexGap sx={{
            flexWrap: 'wrap'
          }}>
                {variantColors[variant].map(color => <Button key={color} variant={variant} color={color} sx={{
              textTransform: 'capitalize'
            }}>
                    {color}
                  </Button>)}
              </Stack>
            </Stack>)}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={2} sx={{
        alignItems: 'center'
      }}>
          <Button {...args} size="small">
            Small
          </Button>
          <Button {...args} size="medium">
            Medium
          </Button>
          <Button {...args} size="large">
            Large
          </Button>
        </Stack>
      </Section>

      <Section title="Disabled">
        <Button {...args} disabled />
      </Section>
    </Sections>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};