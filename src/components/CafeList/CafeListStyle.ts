import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	height: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 30px;
	align-items: center;
	background-color: #bbb;
`;

export const SearchBarAndButtonArea = styled.div`
	width: 80%;
	height: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #555;
`;

export const SearchCafeListArea = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

export const SearchCafeListInput = styled.input`
	width: 300px;
	padding: 0 10px 0 10px;
	height: 50px;
	font-size: 20px;
	font-weight: bold;
	border: none;
	border-radius: 15px;
`;

export const SearchCafeListButton = styled.button`
	width: 100px;
	height: 50px;
	background-color: pink;
	border-radius: 15px;
	font-size: 20px;
	font-weight: bold;
	color: #fff;
`;

export const AddCafeButton = styled.button`
	width: 200px;
	height: 50px;
	border-radius: 15px;
	background-color: pink;
	font-size: 20px;
	font-weight: bold;
	color: #fff;
`;

export const ContentArea = styled.div`
	width: 80%;
	height: 900px;
	background-color: #999;
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ContentBox = styled.div`
	width: 100%;
	height: 150px;
	background-color: #fff;
	border-bottom: 1px solid #999;
`;

export const Title = styled.div`
	width: 100%;
	height: 60px;
	font-size: 35px;
`;

export const Content = styled.div`
	width: 100%;
	height: 90px;
	font-size: 20px;
`;

export const PaginationContainer = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 50px;
`;

export const PageButton = styled.button`
	padding: 10px 15px;
	background-color: #fff;
	color: #555;
	border: 1px solid #555;
	border-radius: 5px;
	cursor: pointer;

	&.active {
		background-color: #555;
		color: #fff;
	}

	&:disabled {
		background-color: #ddd;
		color: #aaa;
		cursor: not-allowed;
	}
`;
