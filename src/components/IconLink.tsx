import { ReactNode } from 'react';

interface Props {
	to: string;
	children: ReactNode;
}

export function IconLink({ to, children }: Props) {
	return (
		<a
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			className="flex h-fit opacity-70 transition-all hover:scale-125 hover:opacity-100"
		>
			{children}
		</a>
	);
}
