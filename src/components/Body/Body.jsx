import Prodotti from './Prodotti.js';

export function Body({ addProdToCart }) {
	const arrLink = [
		'https://saint-laurent.dam.kering.com/m/1675c4656f7696f/Medium2-574946DV7272721_A.jpg?v=3',
		'https://oldream.it/wp-content/uploads/2022/04/borsa-donna-oldream-bags-made-in-italy-vera-pelle-borse-artigianali-texture-liscia-pellame-italiano-bosrsa-a-mano-rosa-fucsia-oldreambags-600x687.jpg',
		'https://www.pitosbag.it/680-large_default/borsa-in-pelle-giovy.jpg',
	];

	return (
		<main className='hero'>
			{arrLink.map((link, index) => (
				<Prodotti
					link={link}
					addProdToCart={addProdToCart}
					key={index + link}
					number={index}
				/>
			))}
		</main>
	);
}
