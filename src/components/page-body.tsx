import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

function PageBody({ children }: Props) {
	return <div className='flex-1 bg-light'>{children}</div>;
}

export default PageBody;
