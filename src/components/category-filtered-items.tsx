import React from 'react';
import { ExpenseData } from '../type';
import { CategorizedItems } from '../App';
import { printCurrencyText } from '../utils/print-currency-text';
import AccomodationIcon from '../assets/accomodation.svg?react';
import EntertainmentIcon from '../assets/entertainment.svg?react';
import GroceriesIcon from '../assets/groceries.svg?react';
import RestaurantsIcon from '../assets/restaurants.svg?react';
import TransportIcon from '../assets/transport.svg?react';

type Props = {
	categoryName: keyof CategorizedItems;
	items: ExpenseData[];
};

function CategoryFilteredItems({ items, categoryName }: Props) {
	function printIcon(category: keyof CategorizedItems) {
		switch (category) {
			case '숙박/서비스':
				return <AccomodationIcon />;
			case '관람/티켓':
				return <EntertainmentIcon />;
			case '마트/편의점':
				return <GroceriesIcon />;
			case '식당/카페':
				return <RestaurantsIcon />;
			case '카풀/주차':
				return <TransportIcon />;
			default:
				return <span>{categoryName.slice(0, 5)}</span>;
		}
	}
	return (
		<div className=' mb-4  p-3 items-center flex flex-1 shadow-sm border-b'>
			<h2
				className={`w-14 h-full flex justify-center items-center bg-white relative  p-2  rounded-l-lg rounded-r-sm`}
			>
				{printIcon(categoryName)}
			</h2>

			<ul className='flex-1 flex flex-col gap-2'>
				{items.map(filteredItem => (
					<li
						key={filteredItem.id}
						className='flex justify-between flex-1 items-center'
					>
						<p className=' flex-1 text-sm px-4'>{filteredItem.name}</p>

						<div className='flex gap-6 items-center'>
							<div className='flex flex-col justify-center items-start'>
								<div className={`flex gap-1 items-center`}>
									<span className='rounded-sm bg-black/50 text-white text-xs border px-1'>
										by
									</span>
									<p className='text-xs'>{filteredItem.by}</p>
								</div>

								<div className={`flex gap-1 items-center`}>
									<span className='rounded-sm bg-black/50 text-white text-xs border px-1'>
										for
									</span>
									<p className='text-xs'>{filteredItem.for.join(', ')}</p>
								</div>
							</div>
							<p className='w-16 text-right font-semibold'>
								{printCurrencyText(filteredItem.amount)}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CategoryFilteredItems;
