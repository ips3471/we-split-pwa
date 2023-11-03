import { ReactNode } from 'react';
import './App.css';

type Props = {
	pageId: string | null;
	pageComponentWithProvided: ReactNode;
	pageComponentWithNull: ReactNode;
};

function App({
	pageId,
	pageComponentWithNull,
	pageComponentWithProvided,
}: Props) {
	return <>{pageId ? pageComponentWithProvided : pageComponentWithNull}</>;
}

export default App;
