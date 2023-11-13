import { SettleUpExpenseProps } from '../type';

export function printBalanceByMember(
	expenses: SettleUpExpenseProps,
	memberName: string,
) {
	const expensesByMember = expenses.filter(
		expense => expense.by === memberName,
	);
	const expensesForMember = expenses.filter(expense =>
		expense.for.includes(memberName),
	);

	const totalByMember = expensesByMember.reduce(
		(acc, expense) => acc + expense.amount,
		0,
	);
	const totalForMember = expensesForMember.reduce(
		(acc, expense) => acc + expense.amount / expense.for.length,
		0,
	);
	return totalByMember - totalForMember;
}
