import React from 'react';
import PhotoViewer from './main-photo-viewer';
import Members from './overview-members';
import membersData from '../test/__mocks__/membersData.json';
import Categories from './overview-categories';
import { CategoryItem } from '../type';
import SettleupButton from './overview-settleup-button';
import LinkedSection from './linked-section';

type Props = {
	onNavigate: (path: string) => void;
};

function Overview({ onNavigate }: Props) {
	const pageId = '1';
	const membersProps = membersData.find(data => data.id === pageId);
	const categoriesStub: CategoryItem[] = [
		{
			id: '1',
			name: 'stub1',
			total: 10,
		},
	];
	const members = membersProps?.members;

	if (!members) return null;

	return (
		<div className='flex-1'>
			<PhotoViewer />
			<LinkedSection onClick={() => onNavigate('/members')}>
				<Members members={members} />
			</LinkedSection>
			<LinkedSection onClick={() => onNavigate('/categories')}>
				<Categories items={categoriesStub} />
			</LinkedSection>
			<LinkedSection onClick={() => onNavigate('/settleup')}>
				<SettleupButton />
			</LinkedSection>
		</div>
	);
}

export default Overview;
