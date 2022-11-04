# Install Next (latest) with TypeScript

This doesn't create the folder, so either create a folder and run it from there or replace the `.` with a folder.

```node
npx create-next-app@latest . --typescript
```

## Linting

### Running the tests

Tests are implemented using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), and [Vitest](https://vitest.dev/) is used to run them. To run the existing tests:

```node
$ npm test
```

##### New templates

We use [`hygen`](https://www.hygen.io/) to automate some tasks.

```node
# Will generate new component, including test, storybook and CSS file
npm new component
```

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

### editorcofig (coding standards)

Make sure you have an editorconfig extension installed for your test editor of choice. For example VSCode: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig.

Add a `.editorconfig` file to the root of the project, and copy the rules from [our front end coding standards](https://www.notion.so/codecomputerlove/Front-End-Coding-Standards-d657ea2e972d4563a5edcf666322624a) into it.

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

## Setup a11y testing

There are two parts to this:

-   a11y error checks in the browser devtools for the current output from Next
-   a helper (and examples of use) to Unit Tests that run components through axe to test for automated accessibility issues

To install the devtools extension I followed the guide [here](https://larsmagnus.co/blog/how-to-test-for-accessibility-with-axe-core-in-next-js-and-react). Esentially, we create a helper that sits in a utils folder called `reportAccessibility.ts`, which contains the code to check for a browser environment and inject the axe-core script into the page. This helper is then imported in `_app.js` , which runs it on every page load (and HMR reload I _think_).

To install the helper for the Unit Tests there is a package called `jext-axe`, which kinda wraps axe in a way that it can be run in a Unit Test. The helper is installed with `npm i -D jest-axe` and then imported into `test/test-utils.ts`. The helper is then called from a Unit Test with the component to be tested as an argument.

```javascript
import { checkPa11y } from 'test/test-utils';
test('passes accessibility checks', async () => {
	const { container } = render(<Component />);
	await checkPa11y(container);
});
```
