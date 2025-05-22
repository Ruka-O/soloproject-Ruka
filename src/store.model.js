const { default: shopList } = require('../front/src/data/shopList');
const db = require('../index');

const STORE_LIST = 'store_list';
const COMMENTS = 'comments';
const PREFECTURE = 'prefecture';
const SNS = 'sns';
const TAGS_LIST = 'tags_list';

module.exports = {
	STORE_LIST,
	COMMENTS,
	PREFECTURE,
	SNS,
	TAGS_LIST,

	async all() {
		const data = await db(STORE_LIST).select(`${STORE_LIST}.id`, `${STORE_LIST}.registration_date`, `${STORE_LIST}.store_name`, `${PREFECTURE}.prefecture`, `${COMMENTS}.comment`, `${SNS}.sns_name`, `${SNS}.url`, `${TAGS_LIST}.tags`).leftJoin(COMMENTS, `${STORE_LIST}.id`, '=', `${COMMENTS}.store_list_id`).innerJoin(PREFECTURE, `${STORE_LIST}.id`, '=', `${PREFECTURE}.store_list_id`).innerJoin(SNS, `${STORE_LIST}.id`, '=', `${SNS}.store_list_id`).innerJoin(TAGS_LIST, `${STORE_LIST}.id`, '=', `${TAGS_LIST}.store_list_id`);

		return data;
	},

	async save(data) {
		const store = {
			registration_date: new Date(),
			store_name: data.store_name,
		};
		await db(STORE_LIST).insert(store);
		const newData = await db(STORE_LIST).where('store_name', store.store_name);
		const prefecture = {
			store_list_id: newData[0].id,
			prefecture: data.prefecture,
		};
		await db(PREFECTURE).insert(prefecture);
		const comment = {
			store_list_id: newData[0].id,
			comment: data.comment,
		};
		await db(COMMENTS).insert(comment);

		const sns = {
			store_list_id: newData[0].id,
			sns_name: data.sns_name,
		};
		await db(SNS).insert(sns);
		const tags = {
			store_list_id: newData[0].id,
			tags: data.tags,
		};
		await db(TAGS_LIST).insert(tags);
	},

	async delete(data) {
		const id = data.id;
		await db(TAGS_LIST).del().where('store_list_id', id);
		await db(COMMENTS).del().where('store_list_id', id);
		await db(PREFECTURE).del().where('store_list_id', id);
		await db(SNS).del().where('store_list_id', id);
		await db(STORE_LIST).del().where('id', id);
	},

	async update(data) {
		const id = data.id;
		const store = {
			store_name: data.store_name,
		};
		await db(STORE_LIST).update(store).where("id",id);
		const prefecture = {
			prefecture: data.prefecture,
		};
		await db(PREFECTURE).update(prefecture).where("store_list_id",id);
		const comment = {
			comment: data.comment,
		};
		await db(COMMENTS).update(comment).where("store_list_id",id);

		const sns = {
			sns_name: data.sns_name,
		};
		await db(SNS).update(sns).where("store_list_id",id);
		const tags = {
			tags: data.tags,
		};
		await db(TAGS_LIST).update(tags).where("store_list_id",id);
	},

	async prefecture(data) {
		const getData = await db(STORE_LIST)
		.select(`${STORE_LIST}.id`, `${STORE_LIST}.registration_date`, `${STORE_LIST}.store_name`, `${PREFECTURE}.prefecture`, `${COMMENTS}.comment`, `${SNS}.sns_name`, `${SNS}.url`, `${TAGS_LIST}.tags`)
		.leftJoin(COMMENTS, `${STORE_LIST}.id`, '=', `${COMMENTS}.store_list_id`)
		.innerJoin(PREFECTURE, `${STORE_LIST}.id`, '=', `${PREFECTURE}.store_list_id`)
		.innerJoin(SNS, `${STORE_LIST}.id`, '=', `${SNS}.store_list_id`)
		.innerJoin(TAGS_LIST, `${STORE_LIST}.id`, '=', `${TAGS_LIST}.store_list_id`)
		.where(`${PREFECTURE}.prefecture`, data);
		return getData;
	},

	async id(data) {
		const getData = await db(STORE_LIST)
		.select(`${STORE_LIST}.id`, `${STORE_LIST}.registration_date`, `${STORE_LIST}.store_name`, `${PREFECTURE}.prefecture`, `${COMMENTS}.comment`, `${SNS}.sns_name`, `${SNS}.url`, `${TAGS_LIST}.tags`)
		.leftJoin(COMMENTS, `${STORE_LIST}.id`, '=', `${COMMENTS}.store_list_id`)
		.innerJoin(PREFECTURE, `${STORE_LIST}.id`, '=', `${PREFECTURE}.store_list_id`)
		.innerJoin(SNS, `${STORE_LIST}.id`, '=', `${SNS}.store_list_id`)
		.innerJoin(TAGS_LIST, `${STORE_LIST}.id`, '=', `${TAGS_LIST}.store_list_id`)
		.where(`${STORE_LIST}.id`, data);
		return getData;
	}
};
