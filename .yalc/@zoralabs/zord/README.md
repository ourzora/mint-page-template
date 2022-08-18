# Zord Documentation

## Getting Started

Adding to your project boils down to:

1. Add Zord stylesheet from `@zoralabs/zord/index.css`
2. Set up webfonts
3. Add Zord ThemeProvider and theme
4. Add peer dependencies (we're working on making this easier!)

**_Current Dependencies_**

```
  "@radix-ui/react-accordion": "^0.1.5",
  "@radix-ui/react-checkbox": "^0.1.5",
  "@radix-ui/react-dialog": "^0.1.5",
  "@radix-ui/react-icons": "^1.1.0",
  "@radix-ui/react-radio-group": "^0.1.5",
  "@radix-ui/react-separator": "^0.1.4",
  "@radix-ui/react-slider": "^0.1.4",
  "@vanilla-extract/css": "^1.6.8",
  "@vanilla-extract/recipes": "^0.2.3",
  "@vanilla-extract/sprinkles": "^1.4.0",
  "clsx": "^1.1.1",
```

### Usage with Next.js

```tsx
// pages/_app.tsx

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@zoralabs/zord/index.css'
import { ThemeProvider, lightTheme } from '@zoralabs/zord'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

## Themes

Theming with Zord is done by defining an object known as a "_Theme Contract_", a common interface of consistent design tokens defined in a central theme file and then used throughout a site's components.

```ts
export const colorTheme = createThemeContract({
  foreground: {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    destructive: '',
    warning: '',
    reverse: '',
    transparent: '',
  },
  background: {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    warning: '',
    destructive: '',
    reverse: '',
    transparent: '',
  },
  border: {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    warning: '',
    destructive: '',
    transparent: '',
  },
  text: {
    primary: '',
    secondary: '',
    tertiary: '',
    success: '',
    warning: '',
    destructive: '',
    primaryInverse: '',
    transparent: '',
  },
  error: {
    light: '',
    default: '',
    dark: '',
    background: '',
  },
  success: {
    light: '',
    default: '',
    dark: '',
    background: '',
  },
  warning: {
    light: '',
    default: '',
    dark: '',
    background: '',
  },
})
```

Multiple implementations of a ThemeContract can exist on a single site, and the themes can be swapped in + out to enable, for example, dark and light theme variations, or themes designed to assist users who are visually impaired.

Each theme maps 1-1 with the ThemeContract:

```ts
export const lightTheme = createTheme(colorTheme, {
  foreground: {
    primary: color.black100,
    secondary: color.black70,
    tertiary: color.black50,
    success: color.successDefault,
    warning: color.warningDefault,
    destructive: color.errorDefault,
    reverse: color.white100,
    transparent: 'transparent',
  },
  background: {
    primary: color.white100,
    secondary: color.black10,
    tertiary: color.black5,
    success: color.successBackground,
    warning: color.warningBackground,
    destructive: color.errorDefault,
    reverse: color.black100,
    transparent: 'transparent',
  },
  ... (+ all other tokens)
}
```

Themes are most commonly used to define theme colors, but can also be used to specify typefaces, spacing conventions, borders, animation standards, and more.

Zora's standard theme defines colors, borders + radii, container sizing, animation easing, and spacing increments:

```ts
export const [baseTheme, vars] = createTheme({
  color: colorTheme,
  space,
  size,
  radii,
  border,
  ease,
})
```

TODO: How can we easily let people customize themes?

- fonts
- colors
- spacing
- breakpoints

## Styling with Zord

Zord uses a heavily-adapted styling implementation based on the Vanilla Extract styling framework. At Zora, we've found that this system allows us to develop front-end code rapidly using design primitives that can be customized using a large set of pre-defined CSS properties that adhere to Zora's theme specifications. At its core, Zord makes extensive use of Vanilla Extract's [Sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/) package to statically generate CSS classes that can be re-used without continually adding to an app's CSS footprint. The Zord implementation renames Sprinkles as Atoms.

## Basic styles

```
// Container.css.ts
import { atoms } from '../atoms'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  height: '200px',
  backgroundColor: '#DEDEDE'
})
```

The most familiar way of styling a component is using the style() function in an external CSS file. `style` writes to a .css file on build, and `container` is exported as a className that can be applied elements in markup: `<div className={styles.container}>`

## Atoms

At the heart of Zord are a broad set of atoms, a selection of the most commonly-used CSS properties. Atoms enable a developer to take advantage of the filesize efficiencies gained by pre-defined classes while applying styles to components in a number of ways:

- in a separate stylesheet
- as props
- directly into a className attribute using the atoms() function (handy for applying styles to non-Zord components!)

**_Separate Stylesheets:_**

```
// Box.css.ts
import { atoms } from '../atoms'
import { style } from '@vanilla-extract/css'

export const box = atoms({
  width: '100%',
  height: 'x10'
})
```

```
// Box.tsx
import * as styles from 'Box.css.ts'
<Box className={styles.box} />
```

You can also add atomic styles to style declarations alongside styles that aren't included in the atomic presets:

```
// Box.css.ts
export const box = style([
  {
    boxSizing: 'border-box',
    backgroundImage: url("zora-is-nice.gif")
  },
  atoms({
   width: '100%',
   height: 'x10'
  }),
])
```

So in the above example, the styles defined within `atoms()` will apply the pre-generated static styles, and not add to the size of the stylesheet.

**_Atoms as props:_**

```
// Box.tsx
<Box
  width='100%'
  height='x10'
/>
```

**_In className attributes (handy for adding atomic styles to non-Zord-based components):_**

```
// GenericContainer.tsx
<div className={atoms({
  width: '100%',
  height: 'x10'
})} />
```

## Spacing

You'll notice that the Box component above specifies height as `height='x10'`.

Zora implements a spacing system based on 4px increments:

```
export const space = {
  n2: '-8px',
  n1: '-4px',
  x0: '0px',
  x1: '4px',
  x2: '8px',
  x3: '12px',
  x4: '16px',
  x5: '20px'
  ... (+ many more)
}
```

These spacing increments can be applied to the following atomic properties:

```
padding (p, paddingTop, paddingBottom, paddingLeft, paddingRight, pt, pb, pl, pr, px, py)
margin (m, marginTop, marginBottom, marginLeft, marginRight, mt, mb, ml, mr, m, mx, my)
gap
top
left
bottom
right
inset
```

## Shorthands

Zord has a small set of shorthand convenience properties that may look familiar if you've used other popular styling systems. They can be especially useful for defining multiple properties at once, eg. `py='x4'` sets both paddingTop and paddingBottom to 16px.

```
  shorthands: {
    minW: ['minWidth'],
    minH: ['minHeight'],
    maxW: ['maxWidth'],
    maxH: ['maxWidth'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    pos: ['position'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    w: ['width'],
    h: ['height'],
    t: ['top'],
    l: ['left'],
    b: ['bottom'],
    r: ['right'],
    size: ['width', 'height'],
  },
```

## Responsive Styling

Media queries are defined using the following breakpoints:

```
const conditions = {
  '@initial': {},
  '@480': { '@media': '(min-width: 480px)' },
  '@576': { '@media': '(min-width: 576px)' },
  '@768': { '@media': '(min-width: 768px)' },
  '@1024': { '@media': '(min-width: 1024px)' },
  '@1440': { '@media': '(min-width: 1440px)' },
} as const
```

There are a few ways of applying responsive styles:

**_In Props_**

```
// Stack.tsx
 <Stack
   px="x4"
   py={{
     '@initial': 'x4',
     '@1024': 'x12',
   }}
   align="center"
 >
```

**_In Stylesheets_**

```
// ComponentName.css.ts
import { atoms, media } from '@zoralabs/zord'

export const marginTop = atoms({
  mt: { '@initial': 'x32', '@768': 'x64' },
})

export const paddingX = atoms({
  px: { '@initial': 'x5', '@768': 'x8' },
})

export const filterGridHeader = style([
  {
    background: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(10px)',
    '@media': {
      [media.min1024]: {
        zIndex: HEADER_LAYER,
      },
    },
  },
  atoms({
    position: { '@initial': 'relative', '@768': 'sticky' },
    top: 'x16',
  }),
])

```

Note the different methods used to apply media queries inside the normal `style({})` block vs. inside of the `atoms({})` block.

## Selectors

[Vanilla Extract' Styling API](https://github.com/seek-oss/vanilla-extract#styling-api) requires that special selectors like ':hover' and '&[data-state="checked"]&:hover&:not([disabled])' must be nested inside of a `selectors:{}` object, and there are rules about targeting with which you should familiarize yourself.

```ts
export const link = style([
  {
    outline: 'none',
    textDecoration: 'none',
    selectors: { // <-- Nested selectors object
      '&:focus, &:hover': {
        '@media': {
          [media.min768]: {
            backgroundColor: vars.color.background2,
          },
        },
      },
    },
  },
  atoms({
    color: 'primary',
  }),
])
```

## Box Component

The functionality above is all encapsulated into the Box component, a polymorphic component that defaults to a `<div>` element but can take on the form of other elements by specifying an `as`. This allows us to build any kind of component with Box and inherit all of the useful styling behavior for free.

Let's have a look at an example.

```
// UserCard.tsx

export interface UserCardProps extends BoxProps {
  user: User
  as?: React.ElementType
}

export function UserCard({
  user,
  className,
  as,
}: UserCardProps) {
 return (
  <Box as={as} className={['zora-usercard', styles.card, className]}>
   <Heading as="h3" size="lg">{user.name}</Heading>
   <Paragraph size="md">{user.bio}</Paragraph>
  </Box>
 )
}
```

There are a few things going on here.

First, let's have a look at `<Heading>`, a general-purpose component. Heading has a number of size variants. By separating the style implementation from the semantic element used, we have full control over how semantic HTML is applied in different contexts. Here, we implement the heading `as='h3'`, but in other contexts we might want a heading with `size="lg"` to be implemented `as="h1"`.

UserCard accepts `as` props and is wrapped by a `Box` that implements it: `as={as}`. So UserCard can take context-specific semantic HTML based on usage: `<UserCard as="div" user={user} />` in the default case, `<UserCard as="li" user={user} />` for use inside of an `<ul>`, and so on.

One more thing to point out: className takes an array: `className={['zora-usercard', styles.card, className]}`. Under the hood, Box is using _clsx_, a super-lightweight package for constructing className strings conditionally. It's similar to the popular _classNames_ package. Any component inheriting BoxProps from Box can receive styles as an array without the need to explicitly use `clsx()`.

## Text Component

In the `<UserCard>` code block above, we discussed `<Header>` briefly. It's worth going into more detail. Under the hood, `<Header>` is based on a generic `<Text>` component, which inherits its behaviour from `<Box>`. `<Text>` has a large number of variants with custom fontSize, fontWeight, lineHeight. Rather than exposing this large set of variants as a single complex `<Text>` component, Zord creates a number of convenient text components to reflect these presets:

```
<Display>
<Heading>
<Paragraph>
<Eyebrow>
<MenuText>
<Label>
```

These text components can generally receive one or more size props: `xs | sm | md | lg | xl`

## Mixins

-- todo
