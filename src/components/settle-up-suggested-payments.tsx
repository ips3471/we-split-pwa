import React from 'react';
import { SettleUpExpenseProps } from '../type';
import {
	printBalanceByMember,
	sumTotalByMember,
	sumTotalForMember,
} from '../utils/print-balance-by-member';
import { printCurrencyText } from '../utils/print-currency-text';

type Props = {
	members: string[];
	expenses: SettleUpExpenseProps;
	accounting: string;
};

function SuggestedPayments({ members, expenses, accounting }: Props) {
	return (
		<table>
			<caption className='font-semibold'>Seggested Payments</caption>
			<tbody className='border-y border-orange-400'>
				{members.map(
					member =>
						member !== accounting && (
							<tr className='border-b last:border-none border-gray-300'>
								<th>{member}</th>
								<td>{isPayback(expenses, member) ? '<=' : '=>'}</td>
								<td>{accounting}</td>
								<td>
									{printCurrencyText(
										Math.abs(printBalanceByMember(expenses, member)),
									)}
								</td>
							</tr>
						),
				)}
			</tbody>
		</table>
	);
}

export default SuggestedPayments;

function isPayback(
	expenses: SettleUpExpenseProps,
	memberName: string,
): boolean {
	return (
		sumTotalByMember(expenses, memberName) -
			sumTotalForMember(expenses, memberName) >
		0
	);
}
