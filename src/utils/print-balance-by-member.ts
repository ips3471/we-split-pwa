import { SettleUpExpenseProps } from '../type';

export function printBalanceByMember(
	expenses: SettleUpExpenseProps,
	memberName: string,
) {
	const totalByMember = sumTotalByMember(expenses, memberName);
	const totalForMember = sumTotalForMember(expenses, memberName);

	return totalByMember - totalForMember;
}

export function sumTotalByMember(
	expenses: SettleUpExpenseProps,
	memberName: string,
) {
	const expensesByMember = expenses.filter(
		expense => expense.by === memberName,
	);
	return expensesByMember.reduce((acc, expense) => acc + expense.amount, 0);
}

export function sumTotalForMember(
	expenses: SettleUpExpenseProps,
	memberName: string,
) {
	const expensesForMember = expenses.filter(expense =>
		expense.for.includes(memberName),
	);
	return expensesForMember.reduce(
		(acc, expense) => acc + expense.amount / expense.for.length,
		0,
	);
}
