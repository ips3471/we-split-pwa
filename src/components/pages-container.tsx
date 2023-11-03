import React, { ReactNode, useRef, useState } from 'react';
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
		ref?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<div ref={indicatorContainerRef}>
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
				className='relative  flex flex-1 overflow-x-scroll snap-mandatory snap-x'
			>
				{pageItems.map(item => (
					<PageLayout pageId={item.id} key={item.id} pageItem={item.content} />
				))}
			</div>
		</>
	);
}

export default PagesContainer;

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
