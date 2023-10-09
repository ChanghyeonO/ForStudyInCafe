import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafeListPage from './pages/CafeListPage/CafeList';
import AddCafePage from './pages/AddCafePage/AddCafe';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<CafeListPage />}></Route>
				<Route path='/addCafe' element={<AddCafePage />}></Route>
			</Routes>
		</>
	);
}

export default App;
