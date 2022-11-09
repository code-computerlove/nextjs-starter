module.exports = {
	rules: {
		// TODO: Find a better solution than turning this rule off
		// it doesn't play nicely with our ticket number commit subject patterns
		'subject-case': [0],
	},
	extends: ['@commitlint/config-conventional'],
};
