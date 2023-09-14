import styled from 'styled-components';

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
	height: 45px;
	padding: 0 2rem;
	font-size: 3rem;
	line-height: 45px;
	border-radius: 1.5rem;
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

	&:focus {
		outline: none;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
	}
`;

export const BtnBox = styled.div`
	margin-left: 1rem;
`;

export const SubmitBtn = styled.input`
	width: 7rem;
	height: 45px;
	font-size: 3rem;
	border-radius: 1rem;
`;
