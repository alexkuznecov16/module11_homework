export function getMonthName(num) {
	let monthName = ''
	if (typeof num === 'number') {
		if (Number.isInteger(num) && num >= 1 && num <= 12) {
			const number = [
				'Januar',
				'Februar',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			]
			monthName = number[num - 1]
		} else {
			monthName = 'Error!'
		}
	} else {
		monthName = 'Error!'
	}
	return monthName
}
