import React, { ReactNode } from 'react';
import PagesContainer from './pages-container';

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
		content: <PageLayout pageId={'pageItem1'} pageItem={<div>Overview</div>} />,
		name: 'Overview',
	},
	{
		id: 'pageItem2',
		index: 1,
		content: <PageLayout pageId={'pageItem2'} pageItem={<div>History</div>} />,
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

function PageLayout({
	pageItem,
	pageId,
}: {
	pageItem: ReactNode;
	pageId: string;
}) {
	return (
		<div id={pageId} className='min-w-full snap-start '>
			{pageItem}
		</div>
	);
}
