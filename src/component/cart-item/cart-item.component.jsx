import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quentity } }) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="name">
				{quentity} x ${price}
			</span>
		</div>
	</div>
);
export default CartItem;
