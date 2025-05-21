/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('sns').del();
	await knex('sns').insert([
		{ store_list_id: 1, sns_name: 'Instagram', url: 'https://digitalinnova-gl65097.slack.com/archives/D06UAU7016C/p1747719405101179' },
		{ store_list_id: 2, sns_name: 'TikTok', url: 'https://lite.tiktok.com/t/ZShgt4WKs/' },
		{ store_list_id: 3, sns_name: 'Instagram', url: 'https://www.instagram.com/p/C2kAzNiyAs9/?igsh=ODM2eXhydjMyMGZp' },
	]);
};
