export default function DatePresenter(date?: Date) {
	const currentTime = date ? date : new Date();
	const weekTable = ['일', '월', '화', '수', '목', '금', '토', '일'];
	const year = currentTime.getFullYear();
	const month = currentTime.getMonth() + 1;
	const day = currentTime.getDate();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const week = weekTable[currentTime.getDay()];
	const formattedDate = `${year}-${padStarted(month)}-${padStarted(day)}`;
	const formattedTime = `${padStarted(hours)}:${padStarted(minutes)}`;

	return {
		year,
		month,
		day,
		hours,
		minutes,
		week,
		formattedDate,
		formattedTime,
	};
}

function padStarted(value: string | number): string {
	return String(value).padStart(2, '0');
}
