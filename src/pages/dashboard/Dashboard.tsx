import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/app-header';
import Main from '../../components/app-main';
import { useLocation } from 'wouter';
import { checkSlashPrefixedString } from '../../utils/checkSlashPrefixedString';

type Props = {};

function Dashboard({}: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [location, setLocation] = useLocation();

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
				<div className={`${isSidebarOpen ? 'pointer-events-none' : ''}`}>
					<Header onOpen={toggleSidebar} />
					<Main onNavigate={navigate} />
				</div>
			</div>
		</>
	);
}

export default Dashboard;
