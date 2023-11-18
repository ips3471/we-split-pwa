export function findBlank<T>(key: keyof T, obj: T, excepts?: (keyof T)[]) {
	if (!excepts?.includes(key) && (obj[key] == null || obj[key] === '')) {
		return key;
	}
	return null;
}
