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
	return (
		<>
			<PagesContainer pageItems={pageItems} />
		</>
	);
}

export default Main;
