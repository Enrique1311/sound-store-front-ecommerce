import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";
import { my_grey } from "../lib/colors";

const ProductsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 25px;
	padding-top: 20px;
`;

const Title = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;
	color: ${my_grey};
	text-align: center;
`;

const NewProducts = ({ products }) => {
	return (
		<Center>
			<Title>Novedades</Title>
			<ProductsGrid>
				{products?.length > 0 &&
					products.map((product) => <ProductBox {...product} />)}
			</ProductsGrid>
		</Center>
	);
};

export default NewProducts;
