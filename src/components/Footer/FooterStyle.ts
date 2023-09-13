import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #333;
	height: 13rem;
	position: fixed;
	bottom: 0;
	width: 100%;
`;

export const Logo = styled.div`
	font-size: 3rem;
	font-weight: bold;
	color: #fff;
	padding-left: 5rem;
`;

export const MadeBy = styled.div`
	font-size: 3rem;
	color: #fff;
	font-weight: bold;
	padding-bottom: 2rem;
`;

export const Contact = styled.div``;

export const StyledLink = styled(Link)`
	border-top: 1px solid #555;
	padding-right: 10rem;
	padding-top: 1rem;
	color: #fff;
	text-decoration: none;
	font-size: 3rem;
	font-weight: bold;
`;
