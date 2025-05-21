import { useState, useEffect } from 'react';

function ShopList(props) {
	const [shoplist, setShoplist] = useState([]);

	async function getShops() {
		const datas = await fetch('/api').then((res) => res.json());
		setShoplist(datas);
	}
	useEffect(() => {
		getShops();
	}, [props.addPush]);

	// async function deleteData() {
		// const del = await fetch('/api').then((res) => res.json());
	// }

	return (
		<>
			{shoplist.map((shop) => {
				return (
					<div className="store-list" key={shop.store_name}>
						<h2>{shop.store_name}</h2>
						<p>{shop.prefecture}</p>
						<button type="button" onClick={`https://www.google.com/maps/search/?api=1&${shop.name}`}>
							🗺️
						</button>
						<p>{shop.sns_name}</p>
						<p>{shop.comment}</p>
						<p>
							{shop.tags.split(',').reduce((tagList, tag) => {
								return `${tagList} #${tag}`;
							}, '')}
						</p>
						{/* <button onClick={deleteData}>🗑️</button> */}
					</div>
				);
			})}
		</>
	);
}

export default ShopList;
