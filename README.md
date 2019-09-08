# Comparaê UI components

This project was bootstrapped with [TSDX](https://github.com/palmerhq/tsdx)

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

TSDX scaffolds your new library inside `/src`.

The recommended workflow for development is to start Gatsby with:

```
yarn start
```

This will run the Docz styleguide where you can develop components in isolation. For each component you must create a `README.mdx` file as follow:

```
---
name: Button
route: /button
menu: Components
---

import { Playground, Props } from 'docz';
import { Button } from './Button.tsx';

# Button

Basic Button component

## Usage

<Playground>
  <Button color="primary">Test</Button>
</Playground>

## Props

<Props of={Button} />
```

To do a one-off build, use `yarn build`.

To run tests, use `yarn test`.

### Jest

Jest tests are set up to run with `yarn test`. This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.

#### Setup Files

This is the folder structure we set up for you:

```
/src
  /Button         # Basic component structure
    Button.tsx
    Button.test.tsx
    index.ts
    README.mdx
  index.tsx
.gitignore
.prettierrc
doczrc.js
gatsby-config.js
LICENSE.md
package.json
README.md
tsconfig.json
yarn.lock
```

#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### Rollup

TSDX uses [Rollup v1.x](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### Travis

_to be completed_

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

Comparaê UI uses [styled-components](https://www.styled-components.com/) for styles.

## Publishing to NPM

We recommend using https://github.com/sindresorhus/np.
