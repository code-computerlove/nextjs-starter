# Install Next (latest) with TypeScript

This doesn't create the folder, so either create a folder and run it from there or replace the `.` with a folder.

```node
npx create-next-app@latest . --typescript
```

## Linting

### Set up ESLint

```node
npm i -D eslint eslint-config-next eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create `.eslintrc.js` file in the root of the project to configure.

```json
// package.json "scripts" object
"lint-js": "eslint '*/**/*.{js,jsx,ts,tsx}' --fix",
"lint-ts": "tsc -p tsconfig.json --noEmit",
```

Copied `.eslintrc.js` content from Ryan's starter.
Removed this as it isn't an issue anymore in Next v13.

```json
"jsx-a11y/anchor-is-valid": "off",
```

### Set up Stylelint

```node
npm i -D stylelint
```

Create `.stylelintrc.js` file to the root of the project to configure.

Copied `.stylelintrc.js` content from Ryan's starter.

```json
// package.json "scripts" object
"lint-css": "stylelint '*/**/*.{css}' --fix",
```

### Set up Prettier

```node
npm i -D prettier
```

Create `.prettierrc` file to the root of the project to configure.
Create `.prettierignore` file to the root of the project to configure.

Copied content from Ryan's starter.

```json
// package.json "scripts" object
"format": "prettier '*/**/*.{js,jsx,ts,tsx,json,md}' --write",
```

## Husky

Install husky

```node
npm i -D husky lint-staged
```

Install the git hooks

```node
npx husky install
```

Add the prepare script to the `package.json`

```node
"prepare": "husky install"
```

Set up a `lint-staged.config.js` file in the root of the project because running the lint-ts script above won't work unless it's inside a function syntax:

```javascript
module.exports = {
	'*.{js,jsx,ts,tsx,json,md}': 'prettier --write',
	'*.{js,jsx,ts,tsx}': 'eslint --fix',
	'*.{css}': 'stylelint --fix',
	'*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
};
```

Add this script to the pre-commit hook by running this command:

```node
npx husky add .husky/pre-commit "npx lint-staged"
```

Any commits should now be automatically linted and fail with an appropriate error when necessary.

## Set up PostCSS

Create `postcss.config.js` file in the root of the project.
To enable nesting you just need to set `"nesting-rules": true` in the feature object of postcss-preset-env.

In VSCode - at the time of writing it's slightly awkward to get proper nested syntax highlighting without breaking the normal CSS intellisense. Use the postcss-sugarss-language extension and not the PostCSS Language Support extension and add this to the workspace settings:

```json
"files.associations": { "*.css": "postcss" },
```

### Global styles and variables

Create a `global.css` file into `./src/styles` to handle globals and variables here. To add the globals to the whole app just import the file directly into the custom `_app.tsx` inside `./pages`:

```javascript
import '../styles/globals.css';
```

Variables are set in the `:root` element inside `globals.css` and are then available inside any module.

⚠️ As far as I know, at the time of writing - there is not a way to get any CSS variable autocomplete extension in vscode to work alongside the postcss syntax highlighting extension, you can have either one or the other. Any solution to this would be welcome.

## Set up Storybook

```node
npx storybook init
```

Copied contents of `.storybook` from Ryan's start
