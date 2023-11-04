import React from 'react';
import ZoomIcon from '../assets/more.svg?react';
import { CategoryItem, MemberData } from '../type';
import useLocation from 'wouter/use-location';

type Props = {
	items: CategoryItem[];
};

function Categories({ items }: Props) {
	const [location, setLocation] = useLocation();
	const navigate = () => setLocation('/categories');
	return (
		<div onClick={navigate} className='m-4 p-2 relative bg-white rounded-lg'>
			<span className='w-4 h-4 opacity-70 absolute top-2 right-2'>
				<ZoomIcon />
			</span>
			<div>
				<h2 className=''>카테고리별 지출</h2>
				<div className='grid grid-cols-2 gap-1'>
					{items.length > 0 ? (
						items.map((category, index) => (
							<dl
								key={index}
								className='text-center bg-red-100 flex flex-col items-center justify-center p-4 rounded-xl '
							>
								<dt className='text-sm whitespace-nowrap'>{category.name}</dt>
								<dd>
									{category.total.toLocaleString('ko-kr', {
										notation: 'standard',
										style: 'currency',
										currency: 'krw',
									})}
								</dd>
							</dl>
						))
					) : (
						<p>No Expense Exists...</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Categories;
