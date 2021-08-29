import styled from 'styled-components';

const photoSizes = 40;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Photo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${photoSizes}px;
	height: ${photoSizes}px;
	margin-right: 8px;
	background-color: #ffe252;
	border-radius: 4px;
`;

export const Support = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 4px;
`;

export const SupportLabel = styled.div`
	text-align: left;
`;

export const Info = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 16px;
`;
