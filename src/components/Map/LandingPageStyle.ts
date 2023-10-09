import styled from 'styled-components';
import SearchIcon from '../../assets/icons/search-ico.png';

export const LandingPageContainer = styled.div`
	width: 80%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchFormContainer = styled.div`
	width: 100%;
	margin-left: 6rem;
	display: flex;
	justify-content: center;
`;

export const SearchForm = styled.form`
	width: 80%;
	display: flex;
`;

export const FormLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const FormInput = styled.input`
	width: 50%;
	height: 5.5rem;
	padding: 0 2rem;
	font-size: 3rem;
	line-height: 45px;
	border: 2px solid #888;
	border-radius: 1rem;

	&:focus {
		outline: none;
	}
`;

export const BtnBox = styled.div`
	margin-left: 1rem;
`;

export const SubmitBtn = styled.input`
	width: 7rem;
	margin-top: 3px;
	height: 5.5rem;
	border: none;
	background: url(${SearchIcon}) center center no-repeat;
	background-size: contain;
	cursor: pointer;
`;
