import React from 'react';
import { HeaderContainer, StyledLink } from './HeaderStyle';

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<StyledLink to='/'>카가공</StyledLink>
				<StyledLink to='/cafemap'>카페찾기</StyledLink>
				<StyledLink to='/community'>커뮤니티</StyledLink>
				<StyledLink to='/qna'>Q&A</StyledLink>
			</HeaderContainer>
		</>
	);
};

export default Header;
