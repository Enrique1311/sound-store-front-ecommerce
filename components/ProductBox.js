import React from "react";
import { styled } from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import { my_grey, my_lightgrey } from "../lib/colors";
import Link from "next/link";

const ProductWrapper = styled.div`
	box-shadow: 0 0 10px 0 black;
	border-radius: 10px;
	box-sizing: border-box;
	overflow: hidden;
`;

const ImagesBox = styled(Link)`
	height: 120px;
	box-sizing: border-box;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	img {
		max-width: 100%;
		max-height: 100px;
	}
`;
const Title = styled(Link)`
	font-weight: normal;
	font-size: 1rem;
	color: inherit;
	text-decoration: none;
`;

const ProductBoxInfo = styled.div`
	background-color: ${my_lightgrey};
	padding: 10px;
`;

const PriceRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: ${my_grey};
	margin-top: 5px;
`;

const ProductBox = ({ _id, name, description, price, images }) => {
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
					<PrimaryBtn>Comprar</PrimaryBtn>
				</PriceRow>
			</ProductBoxInfo>
		</ProductWrapper>
	);
};

export default ProductBox;
