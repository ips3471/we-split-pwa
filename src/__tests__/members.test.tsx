import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Members from '../components/overview-members';
import membersData from '../test/__mocks__/membersData.json';
import { MemberData } from '../type';

describe('Members component', () => {
	let members: MemberData[];

	beforeEach(() => {
		members = membersData[0].members;
	});
	it('renders members props', () => {
		render(<Members members={members} />);
		expect(screen.getByText('재연')).toBeInTheDocument();
		expect(screen.getByText('대승')).toBeInTheDocument();
		expect(screen.getByText('명섭')).toBeInTheDocument();
	});
});
