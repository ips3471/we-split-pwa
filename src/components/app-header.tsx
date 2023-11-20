import ToggleIcon from '../assets/hamburger.svg?react';
import OptionIcon from '../assets/ellipsis-vertical.svg?react';
type Props = {
	onSidebarOpen: () => void;
	onOptionsOpen: () => void;
	groupTitle: string;
};

function Header({ onSidebarOpen, groupTitle, onOptionsOpen }: Props) {
	return (
		<div className='bg-[#f39d11] p-4 flex justify-between items-center'>
			<button className='w-8 h-8 bg-[#f39d11]' onClick={onSidebarOpen}>
				<ToggleIcon />
			</button>
			<h1 className='text-lg text-white'>{groupTitle}</h1>
			<button className='w-8 h-8 bg-[#f39d11]' onClick={onOptionsOpen}>
				<OptionIcon />
			</button>
		</div>
	);
}

export default Header;
