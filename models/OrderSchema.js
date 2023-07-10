import { Schema } from "mongoose";

const OrderSchema = new Schema({
	line_items: Object,
	name: String,
	email: String,
	city: String,
	postal_code: String,
	streetAddress: String,
	province: String,
	paid: Boolean,
});

export const Order = models?.Order || models("Order", OrderSchema);
