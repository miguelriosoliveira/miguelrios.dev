import { ElementType } from 'react';

import { StyledAnchor } from './styles';

interface Props {
	icon: ElementType;
	to: string;
}

export default function IconLink({ icon: Icon, to }: Props) {
	return (
		<StyledAnchor href={to} target="_blank" rel="noopener noreferrer">
			<Icon size={30} />
		</StyledAnchor>
	);
}
