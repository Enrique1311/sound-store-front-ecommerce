import React from "react";
import Center from "./Center";
import { styled } from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import ButtonLink from "./ButtonLink";
import { my_grey } from "../lib/colors";

const Bg = styled.div`
	background-color: ${my_grey};
	color: white;
	padding: 50px 0;
`;
const Title = styled.h1`
	font-size: 4rem;
	margin: 0;
`;
const Desc = styled.p`
	color: gray;
`;
const ColumnsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	img {
		max-width: 100%;
	}
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ButtonsWrapper = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 30px;
`;

const Featured = ({ product }) => {
	return (
		<Bg>
			<Center>
				<ColumnsWrapper>
					{" "}
					<Column>
						<Title>{product.name}</Title>
						<Desc>{product.description}</Desc>
						<ButtonsWrapper>
							<ButtonLink href={"/products/" + product._id}>
								Leer más...
							</ButtonLink>
							<PrimaryBtn>Agregar al carrito</PrimaryBtn>
						</ButtonsWrapper>
					</Column>
					<Column>
						<img src="https://sound-store-admin.s3.amazonaws.com/1688167906125.png" />
					</Column>
				</ColumnsWrapper>
			</Center>
		</Bg>
	);
};

export default Featured;
