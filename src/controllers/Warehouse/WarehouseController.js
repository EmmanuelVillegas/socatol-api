const { Warehouse, Product } = require('../../models/Warehouse');

const WarehouseController = {
	getAll: async (req, res) => {
		const warehouses = await Warehouse.find({}, ['name']);
		return res.status(200).json(warehouses);
	},

	get: async (req, res) => {
		const { warehouseId } = req.params;
		const warehouse = await Warehouse.findById(warehouseId, ['name']);

		return res.status(200).json(warehouse);
	},

	new: async (req, res) => {
		const data = req.body;
		const newWarehouse = new Warehouse(data);
		await newWarehouse.save();

		return res
			.status(201)
			.json({ success: true, message: 'Registrado con exito!' });
	},

	update: async (req, res) => {
		const { warehouseId } = req.params;
		const data = req.body;
		const warehouse = await Warehouse.findByIdAndUpdate(warehouseId, data);

		if (warehouse === null)
			return res
				.status(404)
				.json({ success: false, message: 'No encontrado.' });
		else
			return res
				.status(200)
				.json({ success: true, message: 'Actualizado con exito!' });
	},

	delete: async (req, res) => {
		const { warehouseId } = req.params;
		const warehouse = await Warehouse.findByIdAndRemove(warehouseId);

		if (warehouse === null)
			return res
				.status(404)
				.json({ success: false, message: 'No encontrado.' });
		else
			return res
				.status(200)
				.json({ success: true, message: 'Eliminado con exito!' });
	},

	getProducts: async (req, res) => {
		const { warehouseId } = req.params;
		const warehouse = await Warehouse.findById(warehouseId).populate(
			'products',
			['name', 'stock', 'iva', 'price']
		);

		if (warehouse === null) {
			return res
				.status(404)
				.json({ success: false, message: 'No encontrado.' });
		} else {
			const products = warehouse.products;
			return res.status(200).json(products);
		}
	}
};

module.exports = WarehouseController;
