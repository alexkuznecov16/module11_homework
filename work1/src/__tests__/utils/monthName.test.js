import { getMonthName } from '../../utils/monthName'

describe('tests for getMonthName function', () => {
	it('should return month name by number', () => {
		expect(getMonthName(1)).toBe('Januar')
		expect(getMonthName(12)).toBe(`December`)
	}),
		it('should return error for not numbers', () => {
			expect(getMonthName(null)).toBe('Error!')
			expect(getMonthName(undefined)).toBe('Error!')
			expect(getMonthName(true)).toBe('Error!')
			expect(getMonthName(NaN)).toBe('Error!')
			expect(getMonthName('Hello')).toBe('Error!')
		}),
		it('should return error for decimal numbers', () => {
			expect(getMonthName(3.15)).toBe('Error!')
			expect(getMonthName(4.7)).toBe('Error!')
		})
})
