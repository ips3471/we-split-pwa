import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import { Route, Switch } from 'wouter';
import MembersDetail from './pages/dashboard/overview/members-detail.tsx';
import membersData from './test/__mocks__/membersData.json';
import { MemberData } from './type';

const initId = '1'; // from localStorage

const members: MemberData[] = membersData.find(data => data.id === initId)
	?.members!; // from indexedDB

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<>
			<Switch>
				<Route path='/' component={() => <App pageId={initId} />} />
				<Route path='/:id'>{params => <App pageId={params.id} />}</Route>

				<Route
					path='/:id/members'
					component={() => <MembersDetail members={members} />}
				/>
				{/* <Route path='/:groupId' component={Dashboard} /> */}
				{/* <Route path='/:groupId/add' component={AddExpensePage} /> */}
			</Switch>
		</>
	</React.StrictMode>,
);
