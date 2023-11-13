export function printCurrencyText(value: number) {
	console.log(value);

	return value.toLocaleString('ko-kr', {
		notation: 'standard',
		style: 'currency',
		currency: 'krw',
	});
}
