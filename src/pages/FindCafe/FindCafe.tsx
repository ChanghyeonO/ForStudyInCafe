import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../../components/Map/LandingPage';
import { Title, ContentArea } from './FindCafeStyle';

const FindCafe = () => {
	return (
		<>
			<Header />
			<Title>추천하는 카페 리스트</Title>
			<ContentArea>
				<LandingPage />
			</ContentArea>
			<Footer />
		</>
	);
};
export default FindCafe;
