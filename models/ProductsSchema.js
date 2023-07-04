import mongoose, { model, Schema, models } from "mongoose";

const ProductsSchema = new Schema(
	{
		name: { type: String, required: true },
		description: String,
		price: { type: Number, required: true },
		images: [{ type: String }],
		category: { type: mongoose.Types.ObjectId, ref: "Category" },
		properties: { type: Object },
	},
	{
		timestamps: true,
	}
);

export const Product = models.Product || model("Product", ProductsSchema);
