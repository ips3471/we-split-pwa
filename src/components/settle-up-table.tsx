import React from 'react';
import { SettleUpExpenseProps } from '../type';
import { printCurrencyText } from '../utils/print-currency-text';
import { printBalanceByMember } from '../utils/print-balance-by-member';

type Props = {
	members: string[];
	items: SettleUpExpenseProps;
};

function SettleUpTable({ items, members }: Props) {
	return (
		<table>
			<tr className='border-b border-orange-400'>
				<th>목록</th>
				{members.map(member => (
					<th colSpan={2}>{member}</th>
				))}
			</tr>
			{items.map(item => (
				<tr className='border-b border-gray-300 last:border-orange-400'>
					<th className='whitespace-nowrap'>{item.name.slice(0, 10)}</th>
					{members.map(member => (
						<>
							<td className='text-green-500'>
								{member === item.by && printCurrencyText(item.amount)}
							</td>
							<td className='text-orange-500 whitespace-nowrap'>
								{item.for.includes(member) &&
									printCurrencyText(printBalance(item.amount, item.for) * -1)}
							</td>
						</>
					))}
				</tr>
			))}
			<tr>
				<th>합계</th>
				{members.map(member => (
					<th colSpan={2}>
						{printCurrencyText(printBalanceByMember(items, member))}
					</th>
				))}
			</tr>
		</table>
	);
}

export default SettleUpTable;

function printBalance(amount: number, chargeTo: string[]) {
	const balance = amount / chargeTo.length;
	return balance;
}
