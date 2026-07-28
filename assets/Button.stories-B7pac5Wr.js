import{i as e}from"./preload-helper-BdFrVu1K.js";import{Ct as t,X as n,pt as r,r as i,w as a}from"./iframe-CIXJBCw9.js";import{i as o,n as s,r as c,t as l}from"./PageLayout-DbhlXRb2.js";var u,d,f,p,m,h,g,_,v;e((()=>{i(),o(),u=t(),d=[`primary`,`secondary`,`success`,`warning`,`error`,`info`],f=[`contained`,`outlined`,`text`],p={contained:d,outlined:d,text:d},m=[{token:`color.{X}.main/dark/light/contrastText`,note:`fond/texte par color et variant — cf. src/theme/components/Button.ts`},{token:`color.success._states.hover / error._states.hover`,note:`fond au survol du variant contained success/error (nuance au-dessus de .dark)`},{token:`color.warning/success/error/info._states.hover`,note:`texte + contour au survol des variants outlined/text`},{token:`typography.button.small/medium/large`,note:`fontSize/fontWeight(700)/lineHeight(120%)/letterSpacing(0) — un token composite par taille`},{token:`designTokens.borderRadius.md, spacing.sm/md/lg`,note:`rayon, padding horizontal par taille`}],h=[`Hauteurs par taille (32/36/48px) figées en dur dans le code (pas un token) : aucun cran de spacing ne tombe pile dessus une fois fontSize+lineHeight(120%) posés — exception documentée, cf. CLAUDE.md.`,`Contraste AA corrigé sur contained success/error : fond passé à .dark (.main est trop pastel pour porter du blanc à 4.5:1).`,`Secondary Outlined : contour en secondary.main malgré un contraste de 1.30:1 contre blanc (sous le seuil recommandé de 3:1) — exception assumée par Marjorie, pas une erreur.`],g={title:`Components/Button`,component:n,decorators:[e=>(0,u.jsx)(l,{title:`Button`,tokens:m,notes:h,children:(0,u.jsx)(e,{})})],args:{children:`Valider`},argTypes:{color:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`,`info`]},variant:{control:`select`,options:[`contained`,`outlined`,`text`]},size:{control:`select`,options:[`small`,`medium`,`large`]}}},_={render:e=>(0,u.jsxs)(c,{children:[(0,u.jsx)(s,{title:`Default`,children:(0,u.jsx)(n,{...e})}),(0,u.jsx)(s,{title:`Variants`,children:(0,u.jsx)(a,{spacing:3,children:f.map(e=>(0,u.jsxs)(a,{spacing:1,children:[(0,u.jsx)(r,{variant:`body2`,sx:{textTransform:`capitalize`,fontWeight:500},children:e}),(0,u.jsx)(a,{direction:`row`,spacing:2,useFlexGap:!0,sx:{flexWrap:`wrap`},children:p[e].map(t=>(0,u.jsx)(n,{variant:e,color:t,sx:{textTransform:`capitalize`},children:t},t))})]},e))})}),(0,u.jsx)(s,{title:`Sizes`,children:(0,u.jsxs)(a,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:[(0,u.jsx)(n,{...e,size:`small`,children:`Small`}),(0,u.jsx)(n,{...e,size:`medium`,children:`Medium`}),(0,u.jsx)(n,{...e,size:`large`,children:`Large`})]})}),(0,u.jsx)(s,{title:`Disabled`,children:(0,u.jsx)(n,{...e,disabled:!0})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};