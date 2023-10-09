import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../../components/Map/LandingPage';
import { Title, ContentArea } from './AddCafeStyle';

const AddCafePage = () => {
	return (
		<>
			<Header />
			<Title>카페 추가하기</Title>
			<ContentArea>
				<LandingPage />
			</ContentArea>
			<Footer />
		</>
	);
};
export default AddCafePage;
