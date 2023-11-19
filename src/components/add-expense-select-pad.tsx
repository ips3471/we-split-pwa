import React from 'react';
import NumPad from './num-pad';
import { AddExpenseFormData } from '../pages/dashboard/add-expense/add-expense';
import SelectPadButton from './add-expense-select-pad-button';
import { Category } from '../type';

type Props = {
	focus: keyof AddExpenseFormData;
	members: string[];
	categories: Category[];
	formData: AddExpenseFormData;
	onChange<K extends keyof AddExpenseFormData>(
		label: K,
		value: AddExpenseFormData[K],
	): void;
	onClickNext: () => void;
};

function SelectPad({
	focus,
	members,
	formData,
	onChange,
	categories,
	onClickNext,
}: Props) {
	return (
		<section className='bg-black text-white h-2/5'>
			{focus === 'by' && (
				<SelectPadButton
					actives={[formData.by || '']}
					items={members}
					onClick={member => {
						onChange('by', member);
						onClickNext();
					}}
				/>
			)}
			{focus === 'for' && (
				<SelectPadButton
					actives={formData.for}
					items={members}
					onClick={member =>
						onChange(
							'for',
							formData.for.includes(member)
								? formData.for.filter(name => name !== member)
								: [...formData.for, member],
						)
					}
				/>
			)}
			{focus === 'category' && (
				<SelectPadButton
					actives={[formData.category || '']}
					items={categories}
					onClick={category => {
						onChange('category', category as Category);
						onClickNext();
					}}
				/>
			)}
			{focus === 'amount' && (
				<NumPad
					currentValue={formData.amount || 0}
					onChange={(value: number) => {
						onChange('amount', value);
					}}
					onSubmit={onClickNext}
				/>
			)}
		</section>
	);
}

export default SelectPad;
