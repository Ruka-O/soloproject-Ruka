import { useEffect, useState } from 'react';
import list from '../data/prefecture';

function Filter() {
	const prefecture = list.data;

	const [filer, setFilter] = useState(false);
	const [storePrefecture, setStorePrefecture] = useState('北海道');

	const selectFilter = () => {
		setFilter(true);
	};

    // useEffect(()=> {},[filter])

	return (
		<>
			{filer ? (
				<>
					<label>都道府県：</label>
					<select onChange={(e) => setValue(setStorePrefecture, e)}>
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
