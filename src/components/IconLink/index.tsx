import React from 'react';

interface Props {
	icon: React.ElementType;
	to: string;
}

const IconLink: React.FC<Props> = ({ icon: Icon, to }) => (
	<a href={to} target="_blank" rel="noopener noreferrer">
		<Icon size={30} />
	</a>
);

export default IconLink;
