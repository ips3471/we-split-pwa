import React from 'react';
import SettleUpTable from '../../../components/settle-up-table';
import { SettleUpExpenseProps } from '../../../type';
import SuggestedPayments from '../../../components/settle-up-suggested-payments';
import { printBalanceByMember } from '../../../utils/print-balance-by-member';

type Props = {};

function Summary({}: Props) {
	const groupProps: {
		name: string;
		id: string;
		date: string;
		members: string[];
	} = {
		name: '그룹이름1',
		date: '2023-11-01',
		id: '1',
		members: ['대승', '재연', '명섭', '은영'],
	};
	const itemProps: SettleUpExpenseProps = [
		{
			by: '대승',
			for: ['대승', '명섭', '재연', '은영'],
			id: '1',
			name: '사용처1',
			amount: 4000,
		},
		{
			by: '명섭',
			for: ['명섭', '은영'],
			id: '1',
			name: '사용처2',
			amount: 4000,
		},
	];

	const accountingMember = groupProps.members.reduce((major, member) => {
		return printBalanceByMember(itemProps, member) >
			printBalanceByMember(itemProps, major)
			? member
			: major;
	}, '');

	return (
		<div className='overflow-auto'>
			<h1 className='font-bold text-2xl mb-4'>
				{groupProps.name} - {groupProps.date}
			</h1>
			<main className='space-y-5'>
				<SettleUpTable items={itemProps} members={groupProps.members} />
				<SuggestedPayments
					accounting={accountingMember}
					expenses={itemProps}
					members={groupProps.members}
				/>
			</main>
		</div>
	);
}

export default Summary;
