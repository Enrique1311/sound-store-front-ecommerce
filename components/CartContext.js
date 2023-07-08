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

	const removeProductFromCart = (productId) => {
		setCartProducts((prev) => {
			const pos = prev.indexOf(productId);

			if (pos !== -1) {
				return prev.filter((value, index) => index !== pos);
			}
			return prev;
		});
	};

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				setCartProducts,
				addProductToCart,
				removeProductFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
