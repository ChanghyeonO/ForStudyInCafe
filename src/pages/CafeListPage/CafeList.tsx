import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CafeList from '../../components/CafeList/CafeList';
import { Title, ContentArea } from './CafeListStyle';

const CafeListPage = () => {
	return (
		<>
			<Header />
			<Title>추천하는 카페 리스트</Title>
			<ContentArea>
				<CafeList />
			</ContentArea>
			<Footer />
		</>
	);
};
export default CafeListPage;
