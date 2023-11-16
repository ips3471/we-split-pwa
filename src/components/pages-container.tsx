import React, { ReactNode, useRef, useState } from 'react';
import { PageItem } from './app-main';

type Props = {
	pageItems: PageItem[];
};

function PagesContainer({ pageItems }: Props) {
	const [position, setPosition] = useState(0);
	const scrollerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const { clientWidth, scrollLeft } = e.currentTarget;
		setPosition(scrollLeft / clientWidth);
	};

	const handleMovePage = (pageId: string, index: number) => {
		const ref = document.querySelector('#' + pageId);

		const screenWidth = ref?.getClientRects()[0].width;

		screenWidth &&
			scrollerRef.current?.scrollTo({
				left: screenWidth * index,
				behavior: 'smooth',
			});
	};

	return (
		<>
			<div className='bg-[#f39d11] py-1'>
				<div className='relative flex mx-14'>
					{pageItems.map((item, index) => (
						<button
							onClick={() => handleMovePage(item.id, index)}
							key={item.id}
							className='z-10 outline-none text-white w-full'
						>
							{item.name}
						</button>
					))}

					<div
						style={{
							transform: `translate(${position * 100}%)`,
							width: `${100 / pageItems.length}%`,
						}}
						className={`absolute left-0 w-1/2 h-full bg-orange-200/30 z-10  rounded-full`}
					></div>
				</div>
			</div>

			<div
				ref={scrollerRef}
				onScroll={handleScroll}
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
