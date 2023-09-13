import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 8.5rem;
	width: 100%;
	border-bottom: 1px solid #555;
`;

// export const Title = styled.h1`
// 	color: #fff;
// 	font-size: 3rem;
// `;

export const StyledLink = styled(Link)`
	color: #555;
	text-decoration: none;
	font-size: 3rem;
	font-weight: bold;
`;
