const { Schema, model } = require('mongoose');

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    iva: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },

    warehouse: {
      type: Schema.Types.ObjectId,
      ref: 'Warehouse',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Product', ProductSchema);
