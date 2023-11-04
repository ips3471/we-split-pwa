import React from 'react';

type Props = {
	children: React.ReactNode;
	onClick: () => void;
};

function LinkedSection({ children, onClick }: Props) {
	return <section onClick={onClick}>{children}</section>;
}

export default LinkedSection;
