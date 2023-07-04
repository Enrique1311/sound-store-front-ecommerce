import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import { Product } from "../models/ProductsSchema";
import { mongooseConnect } from "../lib/mongoose";
import NewProducts from "../components/NewProducts";

const Home = ({ featuredProduct, newProducts }) => {
	console.log("new", newProducts);
	return (
		<div>
			<Header />
			<Featured product={featuredProduct} />
			<NewProducts products={newProducts} />
		</div>
	);
};

export default Home;

export async function getServerSideProps() {
	const featuredProductId = "64a08591b0d52f2b36948a27";
	await mongooseConnect();

	const featuredProduct = await Product.findById(featuredProductId);

	const newProducts = await Product.find({}, null, {
		sort: { _id: -1 },
		limit: 10,
	});

	return {
		props: {
			featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
			newProducts: JSON.parse(JSON.stringify(newProducts)),
		},
	};
}
