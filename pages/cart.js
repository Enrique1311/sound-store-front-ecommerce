import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { styled } from "styled-components";
import { my_grey, my_lightgrey, my_medium_grey } from "../lib/colors";
import Center from "../components/Center";
import PrimaryBtn from "../components/PrimaryBtn";
import { CartContext } from "../components/CartContext";
import axios from "axios";
import Table from "../components/Table";
import Input from "../components/Input";

const ColumnsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.3fr 0.7fr;
	gap: 20px;
	margin-top: 40px;
`;

const Box = styled.div`
	border: 1px solid ${my_lightgrey};
	box-shadow: 0 0 10px 0 ${my_lightgrey};
	border-radius: 10px;
	padding: 30px;
`;

const ProductTd = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Quantity = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	button {
		background-color: ${my_lightgrey};
		border-radius: 6px;
		border: none;
		width: 2rem;
		height: 2rem;
		font-family: monospace;
		font-size: 1.2rem;
		font-weight: bold;
		color: ${my_grey};
		cursor: pointer;
		&:hover {
			background-color: ${my_medium_grey};
		}
	}
`;

const ProductImage = styled.div`
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 2px solid ${my_medium_grey};
	object-fit: cover;
	overflow: hidden;
	img {
		width: 100%;
		height: auto;
	}
`;

const CityHolder = styled.div`
	display: flex;
	gap: 5px;
`;

const TotalPrice = styled.div`
	background-color: ${my_medium_grey};
	margin-top: 20px;
	padding: 5px 10px;
	border-radius: 6px;
	width: fit-content;
	digitgroupseparator: ".";
`;

const CartPage = () => {
	const { cartProducts, addProductToCart, removeProductFromCart } =
		useContext(CartContext);
	const [products, setProducts] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [province, setProvince] = useState("");

	useEffect(() => {
		if (cartProducts.length > 0) {
			axios.post("/api/cart", { ids: cartProducts }).then((response) => {
				setProducts(response.data);
			});
		} else {
			setProducts([]);
		}
	}, [cartProducts]);

	const moreOfThisProduct = (id) => {
		addProductToCart(id);
	};

	const lessOfThisProduct = (id) => {
		removeProductFromCart(id);
	};

	let total = 0;
	for (const productId of cartProducts) {
		const price =
			products.find((product) => product._id === productId)?.price || 0;
		total += price;
	}

	return (
		<>
			<Header />
			<Center>
				{" "}
				<ColumnsWrapper>
					{" "}
					<Box>
						<h2>Carrito de compras</h2>
						{!cartProducts?.length && (
							<div>Carrito de compras sin productos</div>
						)}
						{products?.length > 0 && (
							<Table>
								<thead>
									<tr>
										<th>PRODUCTO</th>
										<th>CANTIDAD</th>
										<th>PRECIO</th>
									</tr>
								</thead>
								<tbody>
									{" "}
									{products.map((product) => (
										<tr>
											<td>
												<ProductTd>
													<ProductImage>
														<img
															src={product.images[0]}
															alt=""
														/>
													</ProductImage>
													{product.name}{" "}
												</ProductTd>
											</td>
											<td>
												<Quantity>
													<button
														onClick={() => lessOfThisProduct(product._id)}
													>
														-
													</button>
													{
														cartProducts.filter((id) => id === product._id)
															.length
													}
													<button
														onClick={() => moreOfThisProduct(product._id)}
													>
														+
													</button>
												</Quantity>
											</td>
											<td>
												$
												{cartProducts.filter((id) => id === product._id)
													.length * product.price}
											</td>
										</tr>
									))}
									<tr>
										<td></td>
										<td></td>
										<td>
											<TotalPrice>Total: ${total}</TotalPrice>
										</td>
									</tr>
								</tbody>
							</Table>
						)}
					</Box>
					{!!cartProducts?.length && (
						<Box>
							<h2>Información de la compra</h2>
							<form
								method="post"
								action="/api/checkout"
							>
								{" "}
								<Input
									type="text"
									placeholder="Nombre"
									value={name}
									name="name"
									onChange={(event) => setName(event.target.value)}
								/>
								<Input
									type="text"
									placeholder="Email"
									value={email}
									name="email"
									onChange={(event) => setEmail(event.target.value)}
								/>
								<CityHolder>
									{" "}
									<Input
										type="text"
										placeholder="Localidad"
										value={city}
										name="city"
										onChange={(event) => setCity(event.target.value)}
									/>
									<Input
										type="number"
										placeholder="Código postal"
										value={postalCode}
										name="postalCode"
										onChange={(event) => setPostalCode(event.target.value)}
									/>
								</CityHolder>
								<Input
									type="text"
									placeholder="Calle y número"
									value={streetAddress}
									name="streetAddress"
									onChange={(event) => setStreetAdress(event.target.value)}
								/>
								<Input
									type="text"
									placeholder="Provincia"
									value={province}
									name="province"
									onChange={(event) => setProvince(event.target.value)}
								/>
								<input
									type="hidden"
									name="products"
									value={cartProducts.join(",")}
								/>
								<PrimaryBtn type="submit">Continuar compra</PrimaryBtn>
							</form>
						</Box>
					)}
				</ColumnsWrapper>
			</Center>
		</>
	);
};

export default CartPage;
