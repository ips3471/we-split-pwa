import React from 'react';

type Props = {
	children: React.ReactNode;
	to: string;
	onNavigate: (path: string) => void;
};

function LinkedSection({ children, to, onNavigate }: Props) {
	return <section onClick={() => onNavigate(to)}>{children}</section>;
}

export default LinkedSection;
