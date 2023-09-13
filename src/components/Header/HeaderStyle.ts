import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #333;
	height: 8.5rem;
	width: 100%;
`;

// export const Title = styled.h1`
// 	color: #fff;
// 	font-size: 3rem;
// `;

export const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 3rem;
	font-weight: bold;
`;
