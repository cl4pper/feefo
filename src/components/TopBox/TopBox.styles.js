import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: 100%;
	justify-content: flex-start;
	padding: 16px;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	color: #484446;
`;

export const TopTitle = styled.div`
	display: flex;
	align-items: center;
`;

export const UploadIcon = styled.span`
	margin-right: 8px;
	color: #61dafb;
`;

export const Bottom = styled.div`
	display: flex;
	margin-top: 20px;
	color: #606060;
`;

export const InfoIcon = styled.span`
	color: #bfbbbb;
`;
