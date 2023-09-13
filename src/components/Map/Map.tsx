import React, { useEffect } from 'react';
import { Map } from './MapStyle';

declare global {
	interface Window {
		kakao: any;
	}
}

const KakaoMap = () => {
	const addMarker = () => {
		const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

		return new window.kakao.maps.Marker({
			position: markerPosition,
		});
	};
	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
			level: 3, // 지도의 레벨(확대, 축소 정도)
		};
		const map = new window.kakao.maps.Map(container, options);
		addMarker().setMap(map);
	}, []);

	return <Map id='map' />;
};

export default KakaoMap;
