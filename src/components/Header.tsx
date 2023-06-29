import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export function Header({ children }: Props) {
	return <header className="grid grid-flow-col justify-end gap-2 sm:text-lg">{children}</header>;
}
