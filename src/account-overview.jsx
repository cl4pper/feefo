import React from 'react';
// import styled from 'styled-components';
import { Overview } from './containers';

export const AccountOverview = ({ data }) => {
	console.log(data);

	return <Overview data={data} />;
};

export default AccountOverview;
