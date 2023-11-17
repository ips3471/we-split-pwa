import React, { useEffect, useRef, useState } from 'react';
import DatePresenter from '../../../utils/date-presenter';
import NumPad from '../../../components/num-pad';
import PageHeader from '../../../components/page-header';
import { Category } from '../../../type';
import LabelItem from '../../../components/add-expense-label-item';

type Props = {};
export type AddExpenseFormData = {
	date: Date;
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
			date: new Date(),
			for: ['대승', '명섭'],
			text: '',
		};
		setForm(defaultForm);
	}, []);
	const dateInputRef = useRef<HTMLInputElement>(null);
	const timeInputRef = useRef<HTMLInputElement>(null);
	const datePresenter = DatePresenter(form?.date);
	const dateString = `${datePresenter.year}/${datePresenter.month}/${datePresenter.day}/(${datePresenter.week})`;
	function handleChange() {}
	function handleSubmit() {
		console.log('submitted');
	}
	function handleLabelClick(id: keyof AddExpenseFormData) {
		setFocus(id);
	}

	console.log(datePresenter.minutes);

	return (
		<div className='flex flex-col h-full'>
			<PageHeader />

			<form onSubmit={handleSubmit} className='flex-1 bg-slate-200 space-y-6'>
				<div className='text-left p-4'>
					<LabelItem
						onClick={() => handleLabelClick('date')}
						labelName='날짜'
						value={`${dateString} ${datePresenter.formattedTime}`}
						isFocused={focus === 'date'}
					/>
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

			<section className='bg-black text-white h-2/5'>
				{
					[
						{
							id: 'date',
							item: null,
						},
						{
							id: 'by',
							item: (
								<div className={`grid m-[1px] gap-[1px] grid-cols-4`}>
									{
										<section className={` ${true ? 'bg-brand' : ''} h-16`}>
											<button
												className='p-1 text-xs w-full h-full'
												name='by'
												onClick={() => {}}
											>
												멤버이름
											</button>
										</section>
									}
								</div>
							),
						},
						{
							id: 'for',
							item: (
								<div className={`grid m-[1px] gap-[1px] grid-cols-4`}>
									{['멤버1', '멤버2'].map(member => {
										return (
											<section className={` ${true ? 'bg-brand' : ''} h-16`}>
												<button
													className='p-1 text-xs w-full h-full'
													name='for'
													onClick={() => {}}
												>
													{member}
												</button>
											</section>
										);
									})}
								</div>
							),
						},
						{
							id: 'category',
							item: (
								<div className={`grid m-[1px] gap-[1px] grid-cols-4`}>
									{['카테고리1', '카테고리2'].map(() => {
										return (
											<section className={` ${true ? 'bg-brand' : ''} h-16`}>
												<button
													className='p-1 text-xs w-full h-full'
													name='category'
													onClick={() => {}}
												>
													'카테고리이름'
												</button>
											</section>
										);
									})}
								</div>
							),
						},
						{
							id: 'amount',
							item: (
								<NumPad
									currentValue={0}
									onChange={() => {}}
									onSubmit={() => {}}
								/>
							),
						},
						{
							id: 'name',
							item: null,
						},
					][1].item
				}
			</section>
		</div>
	);
}

export default AddExpense;
