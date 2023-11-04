import { checkSlashPrefixedString } from '../utils/checkSlashPrefixedString';

test('checkSlashPrefixedString throws error for invalid path', () => {
	const invalidPath = 'invalidPath';

	expect(() => checkSlashPrefixedString(invalidPath)).toThrowError(
		'the path string must starts with slash(/)',
	);
});

test('checkSlashPrefixedString does not throw error for valid path', () => {
	const validPath = '/validPath';

	expect(() => checkSlashPrefixedString(validPath)).not.toThrow();
});
