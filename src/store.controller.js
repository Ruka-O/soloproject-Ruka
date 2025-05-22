const storeModel = require('./store.model');

module.exports = {
	async store (req, res) {
		const storeAll = await storeModel.all();
		res.status(200).json(storeAll);
	},

	async save(req, res) {
		await storeModel.save(req.body);
		res.end();
	},

	async delete(req, res) {
		await storeModel.delete(req.body);
		res.end();
	},

	async put(req, res) {
		await storeModel.update(req.body);
		res.end();
	},

	async getPrefecture(req, res) {
		const filter = await storeModel.prefecture(req.params.prefecture);
		if (filter[0]) {

			res.status(200).json(filter);
		} else {
			const storeAll = await storeModel.all();
			res.status(200).json(storeAll);
		}
	},

	async findId(req, res) {
		const find = await storeModel.id(Number(req.params.id));
		
		if(find[0]) {
			res.status(200).json(find);
		} else {
			res.status(404);
		}
	}
};
