import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafeMap from './pages/MainHome/CafeMap';

function App() {
	return (
		<>
			<Routes>
				<Route path='/cafemap' element={<CafeMap />}></Route>
			</Routes>
		</>
	);
}

export default App;
