import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Container,
	SearchBarAndButtonArea,
	SearchCafeListArea,
	SearchCafeListInput,
	SearchCafeListButton,
	AddCafeButton,
	ContentArea,
	ContentBox,
	Title,
	Content,
	PaginationContainer,
	PageButton,
} from './CafeListStyle';

const CafeList = () => {
	const dummyData = Array.from({ length: 20 }, (_, index) => ({
		title: `제목 ${index + 1}`,
		content: `본문 ${
			index + 1
		} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	}));

	const itemsPerPage = 5; // 한 페이지에 표시될 아이템 개수
	const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

	const totalPages = Math.ceil(dummyData.length / itemsPerPage); // 총 페이지 개수

	const currentItems = dummyData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	); // 현재 페이지에 표시될 아이템들

	return (
		<Container>
			<SearchBarAndButtonArea>
				<SearchCafeListArea>
					<SearchCafeListInput placeholder='원하는 장소를 검색해보세요' />
					<SearchCafeListButton>검색</SearchCafeListButton>
				</SearchCafeListArea>
				<Link to='/addCafe'>
					<AddCafeButton>카페 추가하기</AddCafeButton>
				</Link>
			</SearchBarAndButtonArea>
			<ContentArea>
				{currentItems.map((data, index) => (
					<ContentBox key={index}>
						<Title>{data.title}</Title>
						<Content>{data.content}</Content>
					</ContentBox>
				))}
			</ContentArea>

			<PaginationContainer>
				<PageButton
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}>
					&lt;
				</PageButton>

				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(pageNumber) => (
						<PageButton
							key={pageNumber}
							onClick={() => setCurrentPage(pageNumber)}
							className={pageNumber === currentPage ? 'active' : ''}>
							{pageNumber}
						</PageButton>
					),
				)}

				<PageButton
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages}>
					&gt;
				</PageButton>
			</PaginationContainer>
		</Container>
	);
};

export default CafeList;
