import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';

type Props = {};

function Dashboard({}: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} />
			<main
				className={`bg-blue-100 h-screen transition-all duration-500 flex flex-col ${
					isSidebarOpen ? 'brightness-90' : ''
				}`}
				onClick={() => {
					if (!isSidebarOpen) return;
					toggleSidebar();
				}}
			>
				<div>
					<h2>navbar</h2>
					<button onClick={toggleSidebar}>toggle</button>
				</div>
				<div>pages</div>
				<div>add-btn</div>
			</main>
		</>
	);
}

export default Dashboard;
