import styled from 'styled-components';

const borderRadius = 6;
const gap = 1;

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: ${gap}px;
	width: 100%;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
	width: 100%;
	background-color: #ffffff;
	border-top-left-radius: ${borderRadius}px;
	border-top-right-radius: ${borderRadius}px;

	@media (max-width: 500px) {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
`;

export const Bottom = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: ${gap}px;

	@media (max-width: 500px) {
		grid-template-columns: 100%;
		grid-template-rows: auto auto;
	}
`;

export const BottomLeft = styled.div`
	background-color: #ffffff;
	border-bottom-left-radius: ${borderRadius}px;

	@media (max-width: 500px) {
		border-bottom-left-radius: 0;
	}
`;

export const BottomRight = styled.div`
	background-color: #ffffff;
	border-bottom-right-radius: ${borderRadius}px;

	@media (max-width: 500px) {
		border-bottom-right-radius: 0;
	}
`;
