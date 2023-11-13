import React, { ReactNode, useRef, useState } from 'react';
import { PageItem } from './app-main';

type Props = {
	pageItems: PageItem[];
};

function PagesContainer({ pageItems }: Props) {
	const [position, setPosition] = useState(0);
	const indicatorContainerRef = useRef<HTMLDivElement>(null);
	const pageScrollerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const { clientWidth, scrollLeft, scrollWidth } = e.currentTarget;

		const percentage = Math.ceil(
			(scrollLeft / (scrollWidth - clientWidth)) * 100,
		);
		setPosition(percentage);
	};

	const handleMovePage = (pageId: string) => {
		const ref = document.querySelector('#' + pageId);

		pageScrollerRef.current?.scrollTo({
			left: ref?.getBoundingClientRect().left,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className='bg-[#f39d11] py-1' ref={indicatorContainerRef}>
				<div className='relative flex mx-14'>
					{pageItems.map(item => (
						<button
							onClick={() => handleMovePage(item.id)}
							key={item.id}
							className='z-10 outline-none text-white w-full'
						>
							{item.name}
						</button>
					))}

					<div
						style={{ transform: `translate(${position}%)` }}
						className={`absolute left-0 w-1/2 h-full bg-orange-200/30 z-10  rounded-full`}
					></div>
				</div>
			</div>

			<div
				onScroll={handleScroll}
				ref={pageScrollerRef}
				className='relative flex flex-1 h-full overflow-x-scroll snap-mandatory snap-x'
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
		<div id={pageId} className='min-w-full snap-start flex'>
			{pageItem}
		</div>
	);
}
