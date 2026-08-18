import{i as e}from"./preload-helper-BdFrVu1K.js";import{At as t,E as n,et as r,r as i,yt as a}from"./iframe-FSf6lMNw.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-Dm7H9q-3.js";var u,d,f,p,m,h,g,_;e((()=>{i(),o(),u=t(),d=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],f=[`contained`,`outlined`,`text`],p={contained:d,outlined:d,text:d},m=[`Hauteurs par taille (32/36/48px) figées en dur dans le code (pas un token) : aucun cran de spacing ne tombe pile dessus une fois fontSize+lineHeight(120%) posés — exception documentée, cf. CLAUDE.md.`,`Contraste AA corrigé sur contained success/error : fond passé à .dark (.main est trop pastel pour porter du blanc à 4.5:1).`,`Secondary Outlined : contour en secondary.main malgré un contraste de 1.30:1 contre blanc (sous le seuil recommandé de 3:1) — exception assumée par Marjorie, pas une erreur.`],h={title:`Components/Button`,component:r,decorators:[e=>(0,u.jsx)(l,{title:`Button`,notes:m,children:(0,u.jsx)(e,{})})],args:{children:`Valider`},argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`,`info`]},variant:{control:`select`,options:[`contained`,`outlined`,`text`]},size:{control:`select`,options:[`small`,`medium`,`large`]}}},g={render:e=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Default`,children:(0,u.jsx)(r,{...e})}),(0,u.jsx)(s,{title:`Variants`,children:(0,u.jsx)(n,{spacing:3,children:f.map(e=>(0,u.jsxs)(n,{spacing:1,children:[(0,u.jsx)(a,{variant:`body2`,sx:{textTransform:`capitalize`,fontWeight:500},children:e}),(0,u.jsx)(n,{direction:`row`,spacing:2,useFlexGap:!0,sx:{flexWrap:`wrap`},children:p[e].map(t=>(0,u.jsx)(r,{variant:e,color:t,sx:{textTransform:`capitalize`},children:t},t))})]},e))})}),(0,u.jsx)(s,{title:`Sizes`,children:(0,u.jsxs)(n,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:[(0,u.jsx)(r,{...e,size:`small`,children:`Small`}),(0,u.jsx)(r,{...e,size:`medium`,children:`Medium`}),(0,u.jsx)(r,{...e,size:`large`,children:`Large`})]})}),(0,u.jsx)(s,{title:`Disabled`,children:(0,u.jsx)(r,{...e,disabled:!0})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};