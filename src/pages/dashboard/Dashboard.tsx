import { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/app-header';
import Main from '../../components/app-main';
import { useLocation } from 'wouter';
import { checkSlashPrefixedString } from '../../utils/checkSlashPrefixedString';
import groupsData from '../../test/__mocks__/groupsData.json';
import { GroupData } from '../../type';
import HeaderOptions from '../../components/app-header-options-container';
import Dialog from '../../components/app-dialog';

type Props = {};
type Dialog = {
	title: string;
	target: keyof GroupData;
};

function Dashboard({}: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [location, setLocation] = useLocation();
	const [group, setGroup] = useState<GroupData>();
	const [dialog, setDialog] = useState<Dialog | null>(null);

	useEffect(() => {
		const pageId = location.split('/')[1];
		const found = groupsData.find(group => group.id === pageId) as
			| GroupData
			| undefined;
		found && setGroup(found);
	}, []);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);

	const navigate = (path: string) => {
		if (path === location) return;
		checkSlashPrefixedString(path);
		const url = location + path;

		setLocation(url);
	};

	function handleOption(title: string, target: keyof GroupData) {
		toggleOptions();
		setDialog({
			title,
			target,
		});
	}

	function handleLeave() {}

	/* 
	result를 받아 group state update
	 */

	function handleCancelDialog() {
		setDialog(null);
	}
	function handleSubmitDialog(result: GroupData) {
		console.log(result);
		setDialog(null);
	}

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} />
			<div
				className={`bg-blue-100 relative transition-all h-full duration-500 flex flex-col ${
					isSidebarOpen || dialog ? 'opacity-70' : ''
				}`}
				onClick={() => {
					isSidebarOpen && toggleSidebar();
					isOptionsOpen && toggleOptions();
				}}
			>
				{group && (
					<div
						className={`h-full ${
							isSidebarOpen || isOptionsOpen || dialog
								? 'pointer-events-none'
								: ''
						}`}
					>
						<Header
							onOptionsOpen={toggleOptions}
							onSidebarOpen={toggleSidebar}
							groupTitle={group.name}
						/>
						<Main onNavigate={navigate} />
					</div>
				)}
			</div>
			{isOptionsOpen && (
				<HeaderOptions onExit={handleLeave} onCallDialog={handleOption} />
			)}
			{dialog && group && (
				<Dialog
					groupData={group}
					target={dialog.target}
					onCancel={handleCancelDialog}
					onSubmit={handleSubmitDialog}
					title={dialog.title}
				/>
			)}
		</>
	);
}

export default Dashboard;
