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
