import React from 'react';
import { ShopButton } from '../ShopButton';

class Prodotti extends React.Component {
	render() {
		return (
			<div className='product_cart'>
				<img alt='borsa' src={this.props.link} className='bag-image'></img>
				<p>Prodotto {this.props.number + 1}</p>
				<ShopButton addToCart addProdToCart={this.props.addProdToCart} />
			</div>
		);
	}
}

export default Prodotti;

//https://saint-laurent.dam.kering.com/m/1675c4656f7696f/Medium2-574946DV7272721_A.jpg?v=3

//https://oldream.it/wp-content/uploads/2022/04/borsa-donna-oldream-bags-made-in-italy-vera-pelle-borse-artigianali-texture-liscia-pellame-italiano-bosrsa-a-mano-rosa-fucsia-oldreambags-600x687.jpg

//https://www.pitosbag.it/680-large_default/borsa-in-pelle-giovy.jpg
