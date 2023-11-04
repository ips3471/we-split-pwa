import React, { ReactNode } from 'react';
import PagesContainer from './pages-container';
import AddIcon from '../assets/plus.svg?react';
import Overview from './overview';

type Props = {
	onNavigate: (path: string) => void;
};

export type PageItem = {
	index: number;
	content: ReactNode;
	name: string;
	id: string;
};

function Main({ onNavigate }: Props) {
	const pageItems: PageItem[] = [
		{
			id: 'pageItem1',
			index: 0,
			content: <Overview onNavigate={onNavigate} />,
			name: 'Overview',
		},
		{
			id: 'pageItem2',
			index: 1,
			content: <div>History</div>,
			name: 'History',
		},
	];
	return (
		<>
			<PagesContainer pageItems={pageItems} />
			<AddExpenseButton onClick={() => onNavigate('/add')} />
		</>
	);
}

export default Main;

function AddExpenseButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className='w-16 h-16 shadow-lg bg-orange-300 rounded-full bg-brand fixed p-3 right-5 bottom-5'
		>
			<AddIcon />
		</button>
	);
}
