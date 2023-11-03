import React, { useRef, useState } from 'react';
import { PageItem } from './app-main';

type Props = {
	pageItems: PageItem[];
};

function PagesContainer({ pageItems }: Props) {
	const [position, setPosition] = useState(0);
	const indicatorContainerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const { clientWidth, scrollLeft, scrollWidth } = e.currentTarget;

		const percentage = Math.ceil(
			(scrollLeft / (scrollWidth - clientWidth)) * 100,
		);
		setPosition(percentage);
	};

	const handleMovePage = (pageId: string) => {
		const ref = document.querySelector('#' + pageId);
		ref?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<>
			<div ref={indicatorContainerRef} className='border-4 border-red-500'>
				<div className='flex'>
					{pageItems.map(item => (
						<button
							onClick={() => handleMovePage(item.id)}
							key={item.id}
							className='z-10 w-full'
						>
							{item.name}
						</button>
					))}
				</div>

				<div
					style={{
						width: indicatorContainerRef.current?.getBoundingClientRect().width,
						height:
							indicatorContainerRef.current?.getBoundingClientRect().height,
						top: indicatorContainerRef.current?.getBoundingClientRect().top,
					}}
					className={`flex items-center absolute`}
				>
					<div
						style={{ transform: `translate(${position}%)` }}
						className='w-1/2 h-full bg-orange-200/30 rounded-full z-10'
					></div>
				</div>
			</div>

			<div
				onScroll={handleScroll}
				className='border-4 relative border-blue-500 flex flex-1 overflow-x-scroll snap-mandatory snap-x'
			>
				{pageItems.map(item => item.content)}
			</div>
		</>
	);
}

export default PagesContainer;
