import styled from 'styled-components';

export const MapContainer = styled.div`
	position: relative;

	& .map {
		width: 100%;
		height: 250px;
		border: 1px solid #eee;

		& .marker-title {
			display: block;
			max-width: 140px;
			font-weight: 700;
			font-size: 0.75rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	@media (min-width: 576px) {
		& .map {
			width: 60%;
			height: 500px;
		}
	}
`;

export const SearchResult = styled.div`
	width: 100%;
	height: 100%;

	// ... (다른 코드)

	@media (min-width: 576px) {
		width: 40%;

		& .scroll-wrapper {
			height: 414px;
		}

		& .pagination {
			position: static;
		}
	}
`;

// ... (다른 styled-components 정의)

// 결과 키워드 부분
export const ResultKeyword = styled.span`
	margin-right: 0.25rem;
	font-weight: 700;
	color: #0f6fff;
`;

// ... (다른 styled-components 정의)

// 스크롤 가능한 영역
export const ScrollWrapper = styled.div`
	height: calc(100vh - 336px);
	padding-bottom: 47px;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: #f3f3f3;
	box-shadow: inset 0px 7px 9px -6px rgba(0, 0, 0, 0.1);
`;

// ... (다른 styled-components 정의)

// 페이지네이션 부분
export const Pagination = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 47px;
	padding: 0.5rem;
	background-color: #ecf4f7;
	box-shadow: 0 -4px 9px -3px rgba(0, 0, 0, 0.1);

	& a {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		font-weight: 200;
		font-size: 0.875rem;

		& + a {
			margin-left: 0.5rem;
		}

		&.on {
			font-weight: 700;
			color: #0f6fff;
		}
	}
`;

// ... (나머지 styled-components)
