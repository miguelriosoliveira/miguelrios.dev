import { StyledAnchor } from './styles';

interface Props {
	icon: React.ElementType;
	to: string;
}

const IconLink: React.FC<Props> = ({ icon: Icon, to }) => (
	<StyledAnchor href={to} target="_blank" rel="noopener noreferrer">
		<Icon size={30} />
	</StyledAnchor>
);

export default IconLink;
