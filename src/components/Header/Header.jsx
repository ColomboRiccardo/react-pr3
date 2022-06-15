import { ShopButton } from '../ShopButton';
export function Header({ cartContent, addProdToCart }) {
	return (
		<header className='header'>
			<h1 className='header-title'> Il negozio con 3 prodotti</h1>
			<ShopButton cartContent={cartContent} cart />
		</header>
	);
}
