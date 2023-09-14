import React, { useState } from 'react';
import Map from './Section/Map';

import {
	LandingPageContainer,
	SearchFormContainer,
	SearchForm,
	FormLabel,
	FormInput,
	BtnBox,
	SubmitBtn,
} from './LandingPageStyle';

export interface propsType {
	searchKeyword: string;
}

const LandingPage = () => {
	// 입력 폼 변화 감지하여 입력 값 관리
	const [Value, setValue] = useState('');
	// 제출한 검색어 관리
	const [Keyword, setKeyword] = useState('');

	// 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
	const keywordChange = (e: {
		preventDefault: () => void;
		target: { value: string };
	}) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	// 제출한 검색어 state에 담아주는 함수
	const submitKeyword = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setKeyword(Value);
	};

	// 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
	const valueChecker = () => {
		if (Value === '') {
			alert('검색어를 입력해주세요.');
		}
	};

	return (
		<LandingPageContainer>
			<SearchFormContainer>
				<SearchForm onSubmit={submitKeyword}>
					<FormLabel htmlFor='place'>
						<FormInput
							type='text'
							name='place'
							onChange={keywordChange}
							placeholder='검색어를 입력해주세요. (ex: 강남 맛집)'
							required
						/>
						<BtnBox>
							<SubmitBtn type='submit' value='검색' onClick={valueChecker} />
						</BtnBox>
					</FormLabel>
				</SearchForm>
			</SearchFormContainer>
			<Map searchKeyword={Keyword} />
		</LandingPageContainer>
	);
};

export default LandingPage;
