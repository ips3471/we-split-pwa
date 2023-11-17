import DatePresenter from '../utils/date-presenter';

test('display dates correctly', () => {
	const testDate = new Date('2023-11-13T10:30:00');

	const result = DatePresenter(testDate);

	expect(result).toEqual({
		year: 2023,
		month: 11,
		day: 13,
		hours: 10,
		minutes: 30,
		week: '월',
		formattedDate: '2023-11-13',
		formattedTime: '10:30',
	});
});
