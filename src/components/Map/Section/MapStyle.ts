import styled from 'styled-components';
import SpotIcon from '../../../assets/icons/spot-ico.png';

export const MapContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 5rem;
`;

export const MapArea = styled.div`
	width: 100%;
	height: 65rem;
`;

export const SearchResult = styled.div`
	width: 30%;
	align-items: center;
`;

export const ResultText = styled.div`
	font-size: 3rem;
	margin-bottom: 2rem;
	text-align: center;
`;

export const ResultKeyword = styled.span`
	font-weight: 700;
	color: #0f6fff;
`;

// 스크롤 가능한 영역
export const ScrollWrapper = styled.div`
	height: 50rem;
	overflow-x: hidden;
	overflow-y: auto;
`;

export const PlacesList = styled.ul`
	.item {
		.info {
			position: relative;
			padding-left: 7rem;
			border-bottom: 1px solid #eee;

			.marker {
				position: absolute;
				left: 2rem;
				top: 50%;
				transform: translateY(-50%);
				width: 30px;
				height: 30px;
				padding-top: 1.3rem;
				font-weight: 700;
				font-size: 0.75rem;
				color: #fff;
				text-align: center;
				background: url(${SpotIcon}) center center no-repeat;
				background-size: 30px auto;
			}

			a {
				display: block;
				padding: 1rem;

				.info-item {
					display: block;
					font-size: 0.7rem;
					line-height: 1.6;
				}

				.place-name {
					font-weight: bold;
					color: #000;
					font-size: 1.2rem;
				}

				.address-name {
					position: relative;
					padding-left: 24px;
					color: #a8a8a8;

					&::before {
						content: '지번';
						position: absolute;
						left: 0;
						top: 2px;
						font-size: 1rem;
						color: #fff;
						text-align: center;
						line-height: 14px;
						background-color: #bbb;
						border-radius: 4px;
						width: 22px;
						height: 14px;
					}
				}

				.tel {
					margin-top: 0.5rem;
					color: #555;
				}
			}
		}
	}
`;

// 페이지네이션 부분
export const Pagination = styled.div`
	display: flex;
	justify-content: center;
	padding: 4rem 0;
	font-size: 2rem;

	& a {
		display: inline-block;
		padding: 0 2rem;
		font-weight: 200;
		color: #888;

		&.on {
			font-weight: 700;
			color: #000;
		}
	}
`;
