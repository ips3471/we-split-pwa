import React, { useEffect, useRef, useState } from 'react';
import DatePresenter from '../../../utils/date-presenter';
import PageHeader from '../../../components/page-header';
import { Category } from '../../../type';
import LabelItem from '../../../components/add-expense-label-item';
import SelectPad from '../../../components/add-expense-select-pad';
import { printCurrencyText } from '../../../utils/print-currency-text';
import { validateForm } from '../../../utils/validate-form';
import InputItem from '../../../components/add-expense-input-item';
import { findBlank } from '../../../utils/find-blank-input';

type Props = {};
export type AddExpenseFormData = {
	date: string;
	time: string;
	by: string | null;
	for: string[];
	category: Category | null;
	amount: number | null;
	text: string | null;
};

const categories: Category[] = [
	'관람/티켓',
	'기타',
	'마트/편의점',
	'숙박/서비스',
	'식당/카페',
	'카풀/주차',
];

function AddExpense({}: Props) {
	const [focus, setFocus] = useState<keyof AddExpenseFormData>('by');
	const [form, setForm] = useState<AddExpenseFormData>();
	const groupMembers = ['대승', '명섭']; // from group data
	useEffect(() => {
		const defaultForm: AddExpenseFormData = {
			date: DatePresenter().formattedDate,
			time: DatePresenter().formattedTime,
			by: null,
			for: groupMembers,
			category: null,
			amount: null,
			text: null,
		};
		setForm(defaultForm);
	}, []);
	const dateInputRef = useRef<HTMLInputElement>(null);
	const timeInputRef = useRef<HTMLInputElement>(null);

	function handleChange<K extends keyof AddExpenseFormData>(
		label: K,
		value: AddExpenseFormData[K],
	) {
		if (Array.isArray(value) && value.length === 0) return;
		if (label === 'time') {
			moveToBlankLabel();
		}

		setForm(prev => {
			const updated = prev && { ...prev, [label]: value };
			return updated;
		});
	}
	function handleSubmit() {
		const isValid = form && validateForm(form);
		console.log(isValid, form);
		isValid && history.back();
	}
	function handleLabelClick(id: keyof AddExpenseFormData) {
		setFocus(id);
	}
	function moveToBlankLabel() {
		for (const key in form) {
			const hasBlank = findBlank(key as keyof typeof form, form, [focus]);

			if (hasBlank) {
				return setFocus(hasBlank);
			}
		}
	}

	useEffect(() => {
		if (focus === 'date') {
			return dateInputRef.current?.click();
		}
		if (focus === 'time') {
			return timeInputRef.current?.click();
		}
	}, [focus]);

	return (
		form && (
			<div className='flex flex-col h-full'>
				<PageHeader />

				<form onSubmit={handleSubmit} className='flex-1 bg-slate-200 space-y-8'>
					<div className='text-left p-4 space-y-1'>
						<InputItem
							type='date'
							isFocused={focus === 'date'}
							labelName='날짜'
							onClick={() => handleLabelClick('date')}
							onChange={date => handleChange('date', date)}
							value={form.date || ''}
						/>
						<InputItem
							type='time'
							isFocused={focus === 'time'}
							labelName='시간'
							onClick={() => handleLabelClick('time')}
							onChange={time => handleChange('time', time)}
							value={form.time || ''}
						/>

						<LabelItem
							onClick={() => handleLabelClick('by')}
							labelName='결제'
							value={form?.by || ''}
							isFocused={focus === 'by'}
						/>
						<LabelItem
							onClick={() => handleLabelClick('for')}
							labelName='대상'
							value={`${
								form.for?.length === groupMembers.length
									? '모두'
									: form?.for?.join(', ')
							}`}
							isFocused={focus === 'for'}
						/>
						<LabelItem
							onClick={() => handleLabelClick('category')}
							labelName='분류'
							value={form?.category || ''}
							isFocused={focus === 'category'}
						/>
						<LabelItem
							onClick={() => handleLabelClick('amount')}
							labelName='금액'
							value={`${printCurrencyText(form?.amount || 0)}`}
							isFocused={focus === 'amount'}
						/>
						<InputItem
							type='text'
							isFocused={focus === 'text'}
							labelName='내용'
							onClick={() => handleLabelClick('text')}
							onChange={text => handleChange('text', text)}
							value={form.text || ''}
						/>
					</div>
				</form>

				{form && (
					<SelectPad
						categories={categories}
						formData={form}
						onChange={handleChange}
						members={groupMembers}
						focus={focus}
						onClickNext={moveToBlankLabel}
					/>
				)}

				<button
					onClick={handleSubmit}
					className='text-white absolute p-5 right-0'
					type='button'
				>
					제출
				</button>
			</div>
		)
	);
}

export default AddExpense;
