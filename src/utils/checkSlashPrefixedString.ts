export function checkSlashPrefixedString(str: string) {
	const isValid = /^\/.*/.test(str);
	if (!isValid) {
		throw new Error('the path string must starts with slash(/)');
	}
}
