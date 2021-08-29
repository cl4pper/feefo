import styled from 'styled-components';

export const TextStyles = styled.p`
	margin: 0;
	padding: 0;
	font-family: 'Roboto', sans-serif;
	font-size: ${(props) => props.fontSize}px;
	color: inherit;
	text-align: ${props => props.align || 'left'};
	font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;
