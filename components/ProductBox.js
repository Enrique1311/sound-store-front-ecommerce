import React, { useContext } from "react";
import { styled } from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import { my_Shadow, my_grey, my_lightgrey } from "../lib/colors";
import Link from "next/link";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
	box-shadow: 0 0 10px 0 ${my_Shadow};
	border-radius: 10px;
	box-sizing: border-box;
	overflow: hidden;
	width: 240px;
	@media screen and (max-width: 550px) {
		width: 300px;
	}
`;

const ImagesBox = styled(Link)`
	max-height: 100%;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 10px;
	padding-bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	img {
		max-width: 100%;
		max-height: 120px;
	}
`;

const Title = styled(Link)`
	font-weight: normal;
	font-size: 1rem;
	color: inherit;
	text-decoration: none;
	width: 100%;
	text-align: center;
`;

const ProductBoxInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	background-color: ${my_lightgrey};
	border-radius: 10px;
	margin: 5px;
	padding: 10px;
`;

const PriceRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	font-size: 1.3rem;
	font-weight: bold;
	color: ${my_grey};
	margin-top: 5px;
`;

const ProductBox = ({ _id, name, description, price, images }) => {
	const { addProductToCart } = useContext(CartContext);
	const url = "/product/" + _id;

	return (
		<ProductWrapper>
			{" "}
			<ImagesBox href={url}>
				<div>
					{" "}
					<img
						src={images[0]}
						alt=""
					/>
				</div>
			</ImagesBox>
			<ProductBoxInfo>
				{" "}
				<Title href={url}> {name}</Title>
				<PriceRow>
					<div>${price}</div>
					<PrimaryBtn onClick={() => addProductToCart(_id)}>Comprar</PrimaryBtn>
				</PriceRow>
			</ProductBoxInfo>
		</ProductWrapper>
	);
};

export default ProductBox;
