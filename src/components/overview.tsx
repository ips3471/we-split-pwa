import React from 'react';
import PhotoViewer from './main-photo-viewer';
import Members from './overview-members';
import membersData from '../test/__mocks__/membersData.json';
import expensesData from '../test/__mocks__/itemsData.json';
import Categories from './overview-categories';
import { Category, CategoryItem } from '../type';
import SettleupButton from './overview-settleup-button';
import LinkedSection from './linked-section';

type Props = {
	onNavigate: (path: string) => void;
};

function Overview({ onNavigate }: Props) {
	const pageId = '1';
	const membersProps = membersData.find(data => data.id === pageId);
	const expensesProps = expensesData.find(data => data.id === pageId);

	const categoryItems: CategoryItem[] =
		expensesProps?.items.map(item => ({
			id: item.id,
			name: item.name as Category,
			total: item.amount,
		})) || [];
	const members = membersProps?.members;

	if (!members) return null;

	return (
		<div className='flex-1'>
			<PhotoViewer />
			<LinkedSection onClick={() => onNavigate('/members')}>
				<Members members={members} />
			</LinkedSection>
			<LinkedSection onClick={() => onNavigate('/categories')}>
				<Categories items={categoryItems} />
			</LinkedSection>
			<LinkedSection onClick={() => onNavigate('/settleup')}>
				<SettleupButton />
			</LinkedSection>
		</div>
	);
}

export default Overview;
