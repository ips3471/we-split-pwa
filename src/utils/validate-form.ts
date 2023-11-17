export function validateForm<T extends object>(obj: T): boolean {
	for (const key in obj) {
		if (obj[key] == null || obj[key] === '') {
			return false;
		}

		if (Array.isArray(obj[key]) && (obj[key] as any[]).length === 0) {
			return false;
		}
	}

	return true;
}
