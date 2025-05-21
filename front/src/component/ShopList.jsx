import { useState, useEffect } from 'react';

function ShopList(props) {
	// const [edit, setEdit] = useState(true);

	async function getShops() {
		const datas = await fetch('/api').then((res) => res.json());
		const reverseDatas = datas.reverse();
		props.setShoplist(reverseDatas);
	}
	useEffect(() => {
		getShops();
	}, [props.addPush]);

	async function deleteData(e) {
		await fetch('/api', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: e.target.value }),
		});
	}

	// async function editData(e) {
	// setEdit(false);
	// const edit = await fetch('/api', {
	// 	method: 'PUT',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({id:e.target.value}),
	// });
	// }
	console.log('🍓 ~ {props.shoplist.map ~ props.shoplist:', props.shoplist);

	return (
		<>
			{props.shoplist.map((shop) => {
				return (
					<div className="store-list" key={shop.store_name}>
						<h2>{shop.store_name}</h2>
						<p>{shop.prefecture}</p>
						{/* <a href={`https://www.google.com/maps/search/?api=1&query=${shop.store_name}`}>🗺️</a> */}
						<a href={shop.url}>{shop.sns_name}</a>
						<p>{shop.comment}</p>
						<p>
							{shop.tags.split(', ').reduce((tagList, tag) => {
								return `${tagList} #${tag}`;
							}, '')}
						</p>
						<button value={shop.id} onClick={deleteData}>
							🗑️
						</button>
						{/* <button value={shop} onClick={editData}>
							✏️
						</button> */}
					</div>
				);
			})}
		</>
	);
}

export default ShopList;
