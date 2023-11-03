import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App
			pageId={'test'}
			pageComponentWithNull={'welcome component'}
			pageComponentWithProvided={<Dashboard />}
		/>
	</React.StrictMode>,
);
