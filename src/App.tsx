import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { Route, Switch } from 'wouter';
import { Category, ExpenseData, MemberData } from './type';
import membersData from './test/__mocks__/membersData.json';
import expensesData from './test/__mocks__/itemsData.json';
import MembersDetail from './pages/dashboard/overview/members-detail';
import { Redirect } from 'wouter';
import CategoriesDetail from './pages/dashboard/overview/categories-detail';
import Summary from './pages/dashboard/overview/settle-up';
import CreateGroupSectionsContainer from './pages/create/create-group-sections-container';

export type CategorizedItems = Record<Category, ExpenseData[]>;
type Props = {
	initId?: string;
};

function App({ initId }: Props) {
	const [pageId, setPageId] = useState<string>();
	const [members, setMembers] = useState<MemberData[]>([]);
	const [categorizedItems, setCategorizedItems] = useState<CategorizedItems>();

	useEffect(() => {
		initId && setPageId(initId);
	}, []);

	useEffect(() => {
		const membersResponse = membersData.find(data => data.id === pageId);
		membersResponse && setMembers(membersResponse.members);

		const categorized: CategorizedItems = {
			accomodation: [],
			entertainment: [],
			groceries: [],
			restaurants: [],
			transport: [],
			none: [],
		};

		const expensesResponse = expensesData.find(data => data.id === pageId);
		expensesResponse &&
			(expensesResponse.items as ExpenseData[]).forEach(item => {
				categorized[item.category as keyof typeof categorized] = [
					...categorized[item.category as keyof typeof categorized],
					item,
				];
			});
		setCategorizedItems(categorized);
	}, [pageId]);

	return (
		<Switch>
			<Route
				path='/create'
				component={() => <CreateGroupSectionsContainer />}
			/>
			<Route
				path='/'
				component={() =>
					pageId ? <Redirect to={pageId} /> : <div>Welcome Component</div>
				}
			/>
			<Route path='/:id' component={() => <Dashboard />} />

			<Route
				path='/:id/members'
				component={() => <MembersDetail members={members} />}
			/>
			<Route
				path='/:id/categories'
				component={() => <CategoriesDetail items={categorizedItems} />}
			/>
			<Route path='/:id/settleup' component={() => <Summary />} />
		</Switch>
	);
}

export default App;
