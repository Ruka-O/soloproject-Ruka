/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('sns').del();
	await knex('sns').insert([
		{ store_list_id: 1001, sns_name: 'Instagram', url: 'https://www.instagram.com/reel/C3urFE_vOre/?igsh=MXE5ejU3OHQ1bTd1Yw==' },
		{ store_list_id: 1002, sns_name: 'TikTok', url: 'https://lite.tiktok.com/t/ZShgt4WKs/' },
		{ store_list_id: 1003, sns_name: 'Instagram', url: 'https://www.instagram.com/p/C2kAzNiyAs9/?igsh=ODM2eXhydjMyMGZp' },
	]);
};
