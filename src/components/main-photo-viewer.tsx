import React from 'react';
import ImageGallery from 'react-image-gallery';

type Props = {};

const images = [
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/',
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/',
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/',
	},
];

function PhotoViewer({}: Props) {
	const handleScreenChange = (isFullscreen: boolean) => {
		console.log(isFullscreen);
	};

	return (
		<div className='relative z-20'>
			<ImageGallery
				// slideOnThumbnailOver={true}
				onScreenChange={handleScreenChange}
				useBrowserFullscreen={false}
				showPlayButton={false}
				disableSwipe={true}
				showThumbnails={false}
				items={images}
				disableThumbnailScroll={true}
			/>
		</div>
	);
}

export default PhotoViewer;
