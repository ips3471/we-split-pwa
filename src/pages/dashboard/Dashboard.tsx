import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/app-header';
import Main from '../../components/app-main';

type Props = {};

function Dashboard({}: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} />
			<div
				className={`bg-blue-100 transition-all border-4 border-green-500 h-full duration-500 flex flex-col ${
					isSidebarOpen ? 'brightness-90' : ''
				}`}
				onClick={() => {
					isSidebarOpen && toggleSidebar();
				}}
			>
				<Header onOpen={toggleSidebar} />
				<Main />
			</div>
		</>
	);
}

export default Dashboard;
