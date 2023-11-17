import React, { useEffect, useRef, useState } from 'react';
import DatePresenter from '../../../utils/date-presenter';
import NumPad from '../../../components/num-pad';
import PageHeader from '../../../components/page-header';
import { Category } from '../../../type';
import LabelItem from '../../../components/add-expense-label-item';
import SelectPad from '../../../components/add-expense-select-pad';

type Props = {};
export type AddExpenseFormData = {
	date: string;
	time: string;
	by: string;
	for: string[];
	category: Category;
	amount: number;
	text: string;
};

function AddExpense({}: Props) {
	const [focus, setFocus] = useState<keyof AddExpenseFormData>('date');
	const [form, setForm] = useState<AddExpenseFormData>();
	useEffect(() => {
		const defaultForm: AddExpenseFormData = {
			amount: 0,
			by: '대승',
			category: '숙박/서비스',
			date: DatePresenter().formattedDate,
			time: DatePresenter().formattedTime,
			for: ['대승', '명섭'],
			text: '',
		};
		setForm(defaultForm);
	}, []);
	const dateInputRef = useRef<HTMLInputElement>(null);
	const timeInputRef = useRef<HTMLInputElement>(null);

	const datePresenter = DatePresenter(new Date(form?.date || ''));
	const dateString = `${datePresenter.year}/${datePresenter.month}/${datePresenter.day}/(${datePresenter.week})`;
	const timeString = `${
		Number(form?.time.split(':')[0]) >= 12 ? '오후' : '오전'
	} ${
		Number(form?.time.split(':')[0]) > 12
			? Number(form?.time.split(':')[0]) - 12
			: form?.time.split(':')[0]
	}시 ${form?.time.split(':')[1]}분`;

	console.log(timeString);

	function handleChange<K extends keyof AddExpenseFormData>(
		label: K,
		value: AddExpenseFormData[K],
	) {
		if (value == '' || value == null) return;

		setForm(prev => {
			const updated = prev && { ...prev, [label]: value };
			return updated;
		});
	}
	function handleSubmit() {
		console.log('submitted');
	}
	function handleLabelClick(id: keyof AddExpenseFormData) {
		setFocus(id);
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
		<div className='flex flex-col h-full'>
			<PageHeader />

			<form onSubmit={handleSubmit} className='flex-1 bg-slate-200 space-y-6'>
				<div className='text-left p-4'>
					<>
						<LabelItem
							onClick={() => handleLabelClick('date')}
							labelName='날짜'
							value={`${dateString}`}
							isFocused={focus === 'date'}
						/>
						<input
							ref={dateInputRef}
							onChange={e => {
								handleChange('date', e.currentTarget.value);
							}}
							onBlur={() => timeInputRef.current?.click()}
							type='date'
							className='w-0 absolute'
						/>
					</>
					<>
						<LabelItem
							onClick={() => handleLabelClick('time')}
							labelName='시간'
							value={`${timeString}`}
							isFocused={focus === 'time'}
						/>
						<input
							ref={timeInputRef}
							onChange={e => {
								handleChange('time', e.currentTarget.value);
							}}
							type='time'
							className='w-0 absolute'
						/>
					</>

					<LabelItem
						onClick={() => handleLabelClick('by')}
						labelName='결제'
						value={`${form?.by}`}
						isFocused={focus === 'by'}
					/>
					<LabelItem
						onClick={() => handleLabelClick('for')}
						labelName='대상'
						value={`${form?.for.join(', ')}`}
						isFocused={focus === 'for'}
					/>
					<LabelItem
						onClick={() => handleLabelClick('category')}
						labelName='분류'
						value={`${form?.category}`}
						isFocused={focus === 'category'}
					/>
					<LabelItem
						onClick={() => handleLabelClick('amount')}
						labelName='금액'
						value={`${form?.amount}`}
						isFocused={focus === 'amount'}
					/>
					<LabelItem
						onClick={() => handleLabelClick('text')}
						labelName='내용'
						value={`${form?.text}`}
						isFocused={focus === 'text'}
					/>
				</div>
			</form>

			<SelectPad focus={focus} />
		</div>
	);
}

export default AddExpense;
