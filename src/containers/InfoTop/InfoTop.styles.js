import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #484446;

	@media (max-width: 500px) {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto auto;
		grid-gap: 20px;
		padding: 0 16px;
	}
`;

export const Title = styled.div`
	color: #9b9898;
`;

export const Right = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 10px;
`;
