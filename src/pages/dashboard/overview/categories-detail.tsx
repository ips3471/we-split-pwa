import React from 'react';
import ArrowIcon from '../../../assets/arrow-left.svg?react';
import { CategorizedItems } from '../../../App';
import { Category } from '../../../type';
import PageHeader from '../../../components/page-header';
import PageBody from '../../../components/page-body';
import CategoryFilteredItems from '../../../components/category-filtered-items';

type Props = {
	items?: CategorizedItems;
};

function CategoriesDetail({ items }: Props) {
	if (!items) return <p>No Expense Itms...</p>;
	const categories = Object.keys(items) as Category[];

	return (
		<div className='w-screen flex z-40 relative flex-col h-screen overflow-x-hidden bg-brand '>
			<PageHeader />
			<PageBody>
				<div className='flex flex-col'>
					{categories.map((category, index) => {
						return (
							items[category].length > 0 && (
								<CategoryFilteredItems
									categoryName={category}
									items={items[category]}
									key={index}
								/>
							)
						);
					})}
				</div>
			</PageBody>
		</div>
	);
}

export default CategoriesDetail;
