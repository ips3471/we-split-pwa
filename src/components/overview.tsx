import React from 'react';
import PhotoViewer from './main-photo-viewer';
import Members from './overview-members';
import membersData from '../test/__mocks__/membersData.json';
import Categories from './overview-categories';
import { CategoryItem } from '../type';
import SettleupButton from './overview-settleup-button';

type Props = {};

function Overview({}: Props) {
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
			<Members members={members} />
			<Categories items={categoriesStub} />
			<SettleupButton />
		</div>
	);
}

export default Overview;
