/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('store_list').del();
	await knex('store_list').insert([
		{ id: 1001, registration_date: new Date(), store_name: "N'ma cafe" },
		{ id: 1002, registration_date: new Date(), store_name: '肉欲に溺れたい 焼肉ホルモン ブンゴ' },
		{ id: 1003, registration_date: new Date(), store_name: 'zama 珈琲とたまごかけごはん' },
	]);
};
