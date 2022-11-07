module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Name:',
		validate(value) {
			if (!value.length) {
				return 'Components must have a name.';
			}
			return true;
		},
	},
	{
		type: 'select',
		name: 'type',
		message: 'Type of component:',
		choices: ['atoms', 'organisms', 'molecules'],
	},
];
