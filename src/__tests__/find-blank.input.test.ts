import { findBlank } from '../utils/find-blank-input';

describe('find blank input', () => {
	let testObj;

	describe('when no excepts', () => {
		it('filters blank string', () => {
			testObj = {
				key1: '',
				key2: 'value2',
			};

			const result = findBlank('key1', testObj);

			expect(result).toBe('key1');
		});

		it('filters null', () => {
			testObj = {
				key1: null,
				key2: 'value2',
			};

			const result = findBlank('key1', testObj);

			expect(result).toBe('key1');
		});

		it('filters undefined', () => {
			testObj = {
				key1: undefined,
				key2: 'value2',
			};

			const result = findBlank('key1', testObj);

			expect(result).toBe('key1');
		});

		it('returns null with no blanks', () => {
			testObj = {
				key1: 'value1',
				key2: 'value2',
			};

			const result = findBlank('key1', testObj);

			expect(result).toBeNull();
		});
	});

	describe('with excepts', () => {
		it('no filters in which keys the array of excepts includes', () => {
			testObj = {
				key1: '',
				key2: 'value2',
			};

			const result = findBlank('key1', testObj, ['key1']);

			expect(result).toBeNull();
		});
	});
});
