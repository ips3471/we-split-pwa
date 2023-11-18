export function printCurrencyText(value: number) {
	return value.toLocaleString('ko-kr', {
		notation: 'standard',
		style: 'currency',
		currency: 'krw',
	});
}
