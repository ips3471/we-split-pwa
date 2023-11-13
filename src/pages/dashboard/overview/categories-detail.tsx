import React from 'react';
import ArrowIcon from '../../../assets/arrow-left.svg?react';
import { CategorizedItems } from '../../../App';
import { Category } from '../../../type';

type Props = {
	items?: CategorizedItems;
};

function CategoriesDetail({ items }: Props) {
	if (!items) return <div>No items</div>;
	const categoreis = Object.keys(items) as Category[];

	return (
		<div className='w-screen flex z-40 relative flex-col h-screen overflow-x-hidden bg-brand '>
			<nav className='flex justify-between h-16 items-centers w-screen  '>
				<button
					className='w-14 p-4 h-full'
					onClick={() => {
						history.back();
					}}
				>
					<ArrowIcon />
				</button>
			</nav>

			<div className='flex flex-col'>
				{items ? (
					categoreis.map((category, index) => {
						return (
							items[category].length > 0 && (
								<div
									key={index}
									className=' mb-4  p-4 items-center flex flex-1 shadow-sm border-b'
								>
									<h2
										className={`w-16 h-full flex justify-center items-center bg-white relative  p-3  rounded-l-lg rounded-r-sm`}
									>
										{<span>{category.slice(0, 5)}</span>}
									</h2>

									<ul className='flex-1'>
										{items[category].map(filteredItem => (
											<li
												key={filteredItem.id}
												className='flex justify-between flex-1 items-center'
											>
												<p className='flex-1 p-2'>{filteredItem.name}</p>

												<div className='flex gap-4 items-center'>
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
															<p className='text-xs'>
																{filteredItem.for.join(', ')}
															</p>
														</div>
													</div>
													<p className='w-16 text-right text-md font-semibold'>
														{filteredItem.amount}
													</p>
												</div>
											</li>
										))}
									</ul>
								</div>
							)
						);
					})
				) : (
					<p>No Expense Itms...</p>
				)}
			</div>
		</div>
	);
}

export default CategoriesDetail;
