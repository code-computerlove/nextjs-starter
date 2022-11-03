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

## Set up Storybook

```node
npx storybook init
```

During installation you will be asked if you want to run the `npm7` migration as currently Storybook has peer dependency semantics which are incompatible with `npm 8`. Choose yes to run the migration.

Copied contents of `.storybook` from Ryan's start
