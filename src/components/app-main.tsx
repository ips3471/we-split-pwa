import React, { ReactNode } from 'react';
import PagesContainer from './pages-container';
import { Link, useLocation, useRoute } from 'wouter';
import AddIcon from '../assets/plus.svg?react';

type Props = {};

export type PageItem = {
	index: number;
	content: ReactNode;
	name: string;
	id: string;
};

const pageItems: PageItem[] = [
	{
		id: 'pageItem1',
		index: 0,
		content: <div>Overview</div>,
		name: 'Overview',
	},
	{
		id: 'pageItem2',
		index: 1,
		content: <div>History</div>,
		name: 'History',
	},
];

function Main({}: Props) {
	const [location, setLocation] = useLocation();

	const navigate = () => {
		setLocation('/add');
	};

	return (
		<>
			<PagesContainer pageItems={pageItems} />
			<AddExpenseButton onClick={navigate} />
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
