import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import KakaoMap from '../../components/Map/Map';
import { Title } from './FindCafeStyle';

const FindCafe = () => {
	return (
		<>
			<Header />
			<Title>추천하는 카페 리스트</Title>
			<KakaoMap />
			<Footer />
		</>
	);
};
export default FindCafe;
