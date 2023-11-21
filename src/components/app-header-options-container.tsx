import { GroupData } from '../type';

type Props = {
	onCallDialog: (title: string, key: keyof GroupData) => void;
	onExit: () => void;
};

function HeaderOptions({ onCallDialog, onExit }: Props) {
	return (
		<div className='flex flex-col gap-3 absolute top-2 right-2 z-20 rounded-lg  bg-light p-4 shadow-md'>
			<StyledOptionButton
				name='모임이름 변경'
				onClick={e => onCallDialog(e.currentTarget.textContent!, 'name')}
			/>
			<StyledOptionButton
				name='모임멤버 변경'
				onClick={e => onCallDialog(e.currentTarget.textContent!, 'members')}
			/>
			<StyledOptionButton name='모임에서 나가기' onClick={onExit} />
		</div>
	);
}

export default HeaderOptions;

function StyledOptionButton({
	name,
	onClick,
}: {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	name: string;
}) {
	return (
		<button onClick={e => onClick(e)} className='text-right'>
			{name}
		</button>
	);
}
