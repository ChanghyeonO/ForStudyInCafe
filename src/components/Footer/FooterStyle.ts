import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #333;
	height: 8.5rem;
	position: fixed;
	bottom: 0;
	width: 100%;
`;

export const MadeBy = styled.div`
	font-size: 3rem;
`;

export const Contact = styled.div``;

export const StyledLink = styled(Link)`
	padding-left: 10rem;
	color: #fff;
	text-decoration: none;
	font-size: 3rem;
	font-weight: bold;
`;
