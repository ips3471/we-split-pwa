import { validateForm } from '../utils/validate-form';

describe('validate form', () => {
	let testForm: { testString: string; testArray: any[] };

	it('filters blank string', () => {
		testForm = {
			testString: '',
			testArray: ['test'],
		};

		const isValid = validateForm(testForm);

		expect(isValid).toBeFalsy();
	});

	it('filters blank array', () => {
		testForm = {
			testString: 'test',
			testArray: [],
		};

		const isValid = validateForm(testForm);

		expect(isValid).toBeFalsy();
	});

	it('passes all entered data', () => {
		testForm = {
			testString: 'test',
			testArray: ['test'],
		};

		const isValid = validateForm(testForm);

		expect(isValid).toBeTruthy();
	});
});
