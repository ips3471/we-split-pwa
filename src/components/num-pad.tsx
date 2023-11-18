import { MouseEvent } from 'react';

interface NumPadProps {
	onSubmit: () => void;
	currentValue: number;
	onChange: (value: number) => void;
}

const buttonNames = {
	submit: '다음',
	delete: '<',
	clear: 'C',
};

const buttons = [
	'1',
	'2',
	'3',
	buttonNames.delete,
	'4',
	'5',
	'6',
	buttonNames.clear,
	'7',
	'8',
	'9',
	'',
	'00',
	'0',
	'000',
	buttonNames.submit,
];

function NumPad({ onSubmit, onChange, currentValue }: NumPadProps) {
	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		const valueToString: string = String(currentValue);
		const { value } = e.currentTarget;

		if (!value) return;

		if (Number(value)) {
			console.log('num');
			const updated = valueToString + value;
			return onChange(Number(updated));
		}

		if (!currentValue) return;

		if (value === buttonNames.submit) {
			console.log('next');
			return onSubmit();
		}

		if (value === buttonNames.clear) {
			console.log('clear');
			return onChange(0);
		}

		if (value === buttonNames.delete) {
			console.log('del');
			const updated = valueToString.slice(0, value.length - 2);
			return onChange(Number(updated));
		}
	};

	return (
		<div className='w-full h-full text-2xl flex flex-col'>
			<div className=' grid grid-cols-4 h-full'>
				{buttons.map((key, index) => (
					<button
						value={key}
						onClick={handleButtonClick}
						className='text-white w-full h-full'
						key={index}
					>
						{key}
					</button>
				))}
			</div>
		</div>
	);
}

export default NumPad;
