import { useState, useEffect } from 'react';

function ShopList(props) {
	const [shoplist, setShoplist] = useState([]);
	async function getShops() {
		const datas = await fetch('/api').then((res) => res.json());
		const reverseDatas = datas.reverse();
		setShoplist(reverseDatas);
	}
	useEffect(() => {
		getShops();
	}, [props.sendStore]);

	useEffect(() => {
		(async () => {
			const data = await fetch(`/api/${props.storePrefecture}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			}).then((res) => res.json());
			shoplist.length === data.length ? props.setNotFind(true) : props.setNotFind(false);
			const reverseDatas = data.reverse();
			setShoplist(reverseDatas);
		})();
	}, [props.storePrefecture]);

	async function deleteData(e) {
		await fetch('/api', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: e.target.value }),
		});
		getShops();
	}

	async function editData(e) {
		const data = await fetch(`/api/edit/${e.target.value}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then((res) => res.json());
		props.setEditData(data[0]);

		props.setEdit(true);
	}

	return (
		<>
			{props.notFind ? <p>対象の結果が見つかりませんでした</p> : <></>}
			{shoplist.map((shop) => {
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
						<button value={shop.id} onClick={editData}>
							✏️
						</button>
					</div>
				);
			})}
		</>
	);
}

export default ShopList;
