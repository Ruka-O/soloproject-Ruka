/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {store_list_id: 1,
      comment:"韓国っぽいカフェ"
    },
    {store_list_id: 2,
      comment:"すごくレアなハンバーグ 飲める 200gでもペロリ"
    }
  ]);
};
