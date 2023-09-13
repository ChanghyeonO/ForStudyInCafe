import React from 'react';

import { FooterContainer, MadeBy, Contact, StyledLink } from './FooterStyle';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<MadeBy>만든이: 오창현</MadeBy>
				<Contact>
					<StyledLink to='https://www.instagram.com/5_changhyeon/'>
						Instagram
					</StyledLink>
					<StyledLink to='https://velog.io/@ckdgus5189'>Blog</StyledLink>
				</Contact>
			</FooterContainer>
		</>
	);
};

export default Footer;
