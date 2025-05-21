import { useEffect, useState } from 'react';
import list from '../data/prefecture';

function Filter(props) {
	const prefecture = list.data;

	const [filer, setFilter] = useState(false);
	const [storePrefecture, setStorePrefecture] = useState('');

	const selectFilter = () => {
		setFilter(true);
	};

	const filterPrefec = (e) => {
		setStorePrefecture(e.target.value);
		
	};
	
	useEffect(() => {
		console.log('✏️');
		
		(async () => {
			const data = await fetch(`/api/${storePrefecture}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
				// body: JSON.stringify({ prefecture: storePrefecture }),
			});
			props.setShoplist(data);
			console.log(data);
		})();
		
	}, [storePrefecture]);

	return (
		<>
			{filer ? (
				<>
					<label>都道府県：</label>
					<select onChange={filterPrefec}>
						{prefecture.map((prefecture) => {
							return (
								<option value={prefecture} key={prefecture}>
									{prefecture}
								</option>
							);
						})}
					</select>
				</>
			) : (
				<button type="button" onClick={selectFilter}>
					filter▽
				</button>
			)}
		</>
	);
}
export default Filter;
