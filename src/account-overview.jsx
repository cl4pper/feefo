import React from 'react';
// import styled from 'styled-components';
import { Overview } from './containers';

import './account-overview.css';

export const AccountOverview = ({ data }) => {
	console.log(data);

	return (
		<div className="AccountOverview">
			<Overview data={data} />
		</div>
	);
};

export default AccountOverview;
