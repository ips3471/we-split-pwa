import React from 'react';

type Props<T extends string> = {
	items: T[];
	actives: T[];
	onClick: (item: T) => void;
};

function SelectPadButton<T extends string>({
	items,
	actives,
	onClick,
}: Props<T>) {
	return (
		<div className={`grid m-[1px] gap-[1px] grid-cols-4`}>
			{items.map(item => (
				<section
					key={item}
					className={` ${actives.includes(item) ? 'bg-brand' : ''} h-16`}
				>
					<button
						className='p-1 text-xs w-full h-full'
						onClick={() => onClick(item)}
					>
						{item}
					</button>
				</section>
			))}
		</div>
	);
}

export default SelectPadButton;
