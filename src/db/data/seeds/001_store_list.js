/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('store_list').del();
	await knex('store_list').insert([
		{ registration_date: new Date(), store_name: "N'ma cafe" },
		{ registration_date: new Date(), store_name: '肉欲に溺れたい 焼肉ホルモン ブンゴ' },
		{ registration_date: new Date(), store_name: 'zama 珈琲とたまごかけごはん' },
	]);
};
