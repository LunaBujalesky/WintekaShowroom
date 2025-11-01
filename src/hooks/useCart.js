import { useState } from "react";

export const useCart = () => {
	const [cart, setCart] = useState([]);

	const addToCart = (product, variant, quantity) => {
		const variantKey = `${product.id}-${variant.prueba || ""}`;
		const existingItem = cart.find((item) => item.variantKey === variantKey);

		if (existingItem) {

			const updatedCart = cart.map((item) => {
				if (item.variantKey === variantKey) {
					item.quantity = item.quantity + quantity;
				}
				return item;
			});

			setCart(updatedCart);


		} else {
			setCart([
				...cart,
				{
					id: product.id,
					name: product.title,
					price: product.price,
					image: variant.image,
					color: variant.color,
					size: variant.size,
					quantity,
					variantKey,
				},
			]);
		}

	};

	const removeItem = (variantKey) => {
		setCart(cart.filter((item) => item.variantKey !== variantKey));
	};

	const clearCart = () => setCart([]);

	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return {
		cart,
		addToCart,
		removeItem,
		clearCart,
		totalQuantity,
		totalPrice,
	};
};