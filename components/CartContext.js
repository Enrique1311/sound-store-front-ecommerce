import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
	const locStor = typeof window !== "undefined" ? window.localStorage : null;

	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		if (cartProducts?.length > 0) {
			locStor?.setItem("cart", JSON.stringify(cartProducts));
		}
	}, [cartProducts]);

	useEffect(() => {
		if (locStor && locStor.getItem("cart")) {
			setCartProducts(JSON.parse(locStor.getItem("cart")));
		}
	}, []);

	const addProductToCart = (productId) => {
		setCartProducts((prev) => [...prev, productId]);
	};

	return (
		<CartContext.Provider
			value={{ cartProducts, setCartProducts, addProductToCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
