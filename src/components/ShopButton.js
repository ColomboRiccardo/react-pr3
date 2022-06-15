import React from 'react';

export class ShopButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonClicked: false,
		};
		//this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick = () => {
		this.setState(state => {
			return {
				buttonClicked: !state.buttonClicked,
			};
		});
		console.log(this.state);
		this.props.addProdToCart();
	};

	render() {
		return (
			<button onClick={this.handleButtonClick}>
				{this.props.addToCart && 'Aggiungi al carrello'}
				{this.props.cart && `Carrello (${this.props.cartContent}) `}
			</button>
		);
	}
}
