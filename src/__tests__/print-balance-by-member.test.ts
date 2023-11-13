import { SettleUpExpenseProps } from '../type';
import { printBalanceByMember } from '../utils/print-balance-by-member';

describe('print valance by member', () => {
	let expenses: SettleUpExpenseProps;
	let memberName: string;

	beforeEach(() => {
		expenses = [
			{
				id: '1',
				name: 'Expense 1',
				amount: 10,
				by: 'John',
				for: ['John', 'Alice'],
			},
			{
				id: '2',
				name: 'Expense 2',
				amount: 20,
				by: 'Alice',
				for: ['Alice', 'Bob'],
			},
			{
				id: '3',
				name: 'Expense 3',
				amount: 30,
				by: 'Bob',
				for: ['Bob', 'John'],
			},
		];
	});

	it('calculates balance correctly for a member', () => {
		memberName = 'John';

		const balance = printBalanceByMember(expenses, memberName);

		expect(balance).toBe(-10);
	});

	it('calculates balance correctly for a member', () => {
		memberName = 'Alice';

		const balance = printBalanceByMember(expenses, memberName);

		expect(balance).toBe(5);
	});
});
