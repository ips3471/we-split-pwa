import React from 'react';

type Props = {
	isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
	return (
		<div
			className={` h-full bg-red-100 border flex z-40 flex-col w-2/3 transition-all duration-300 fixed ${
				isOpen ? '' : '-translate-x-full'
			} left-0 top-0 `}
			onClick={() => console.log('sidebar')}
		>
			sidebar component
		</div>
	);
}

export default Sidebar;
