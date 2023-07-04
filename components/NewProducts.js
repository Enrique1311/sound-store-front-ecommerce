import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 30px;
	padding-top: 20px;
`;

const Title = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;
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
