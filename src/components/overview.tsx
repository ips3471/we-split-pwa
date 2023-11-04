import React from 'react';
import PhotoViewer from './main-photo-viewer';
import Members from './overview-members';
import membersData from '../test/__mocks__/membersData.json';

type Props = {};

function Overview({}: Props) {
	const pageId = '1';
	const membersProps = membersData.find(data => data.id === pageId);
	const members = membersProps?.members;

	if (!members) return null;

	return (
		<div className='flex-1'>
			<PhotoViewer />
			<Members members={members} />
			<div>categories</div>
			<div>settle up</div>
		</div>
	);
}

export default Overview;
