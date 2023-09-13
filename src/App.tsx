import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FindCafe from './pages/MainHome/FindCafe';

function App() {
	return (
		<>
			<Routes>
				<Route path='/findcafe' element={<FindCafe />}></Route>
			</Routes>
		</>
	);
}

export default App;
