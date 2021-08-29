import styled from 'styled-components';

const borderRadius = 6;

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 1px;
	max-width: 600px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
	width: 100%;
	background-color: #ffffff;
	border-top-left-radius: ${borderRadius}px;
	border-top-right-radius: ${borderRadius}px;
`;

export const Bottom = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 1px;
`;

export const BottomLeft = styled.div`
	background-color: #ffffff;
	border-bottom-left-radius: ${borderRadius}px;
`;

export const BottomRight = styled.div`
	background-color: #ffffff;
	border-bottom-right-radius: ${borderRadius}px;
`;
