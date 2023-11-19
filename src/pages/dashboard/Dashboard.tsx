import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/app-header';
import Main from '../../components/app-main';
import { useLocation } from 'wouter';
import { checkSlashPrefixedString } from '../../utils/checkSlashPrefixedString';
import groupsData from '../../test/__mocks__/groupsData.json';
import { GroupData } from '../../type';

type Props = {};

function Dashboard({}: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [location, setLocation] = useLocation();
	const [group, setGroup] = useState<GroupData>();

	useEffect(() => {
		const pageId = location.split('/')[1];
		const found = groupsData.find(group => group.id === pageId) as
			| GroupData
			| undefined;
		found && setGroup(found);
	}, []);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	const navigate = (path: string) => {
		if (path === location) return;
		checkSlashPrefixedString(path);
		const url = location + path;

		setLocation(url);
	};

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} />
			<div
				className={`bg-blue-100 transition-all h-full duration-500 flex flex-col ${
					isSidebarOpen ? 'brightness-90' : ''
				}`}
				onClick={() => {
					isSidebarOpen && toggleSidebar();
				}}
			>
				{group && (
					<div
						className={`h-full ${isSidebarOpen ? 'pointer-events-none' : ''}`}
					>
						<Header onOpen={toggleSidebar} groupTitle={group.name} />
						<Main onNavigate={navigate} />
					</div>
				)}
			</div>
		</>
	);
}

export default Dashboard;
