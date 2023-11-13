import ArrowIcon from '../assets/arrow-left.svg?react';
import OptionsIcon from '../assets/ellipsis-vertical.svg?react';

type Props = {
	handleOptionButton?: () => void;
};

function PageHeader({ handleOptionButton }: Props) {
	return (
		<header className='flex justify-between h-16 items-centers w-screen  '>
			<button
				data-testid='backBtn'
				className='w-14 p-4 h-full'
				onClick={() => {
					history.back();
				}}
			>
				<ArrowIcon />
			</button>
			{handleOptionButton && (
				<button data-testid='optionsBtn' onClick={handleOptionButton}>
					<OptionsIcon />
				</button>
			)}
		</header>
	);
}

export default PageHeader;
