import React from 'react';
import PhotoViewer from './main-photo-viewer';

type Props = {};

function Overview({}: Props) {
	return (
		<div className='flex-1'>
			<PhotoViewer />
			<div>members</div>
			<div>categories</div>
			<div>settle up</div>
		</div>
	);
}

export default Overview;
