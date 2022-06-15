import './App.css';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import { useState } from 'react';

function App() {
	const [cartContent, setCartContent] = useState(0);

	function addProdToCart() {
		console.log('click');
		setCartContent(cartContent + 1);
	}

	return (
		<div className='App'>
			<Header cartContent={cartContent} />
			<Body addProdToCart={addProdToCart} />
		</div>
	);
}

export default App;
