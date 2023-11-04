import './App.css';
import Dashboard from './pages/dashboard/Dashboard';

type Props = {
	pageId?: string;
};

function App({ pageId }: Props) {
	return pageId ? <Dashboard dataId={pageId} /> : <div>Welcome Component</div>;
}

export default App;
