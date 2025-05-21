import { useEffect, useState } from 'react';
import list from '../data/prefecture';

function Filter(props) {
	const prefecture = list.data;

	const [filer, setFilter] = useState(false);

	const selectFilter = () => {
		setFilter(true);
	};

	const filterPrefec = (e) => {
		props.setStorePrefecture(e.target.value);
	};

	return (
		<>
			{filer ? (
				<p>
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
				</p>
			) : (
				<p>
					<button type="button" onClick={selectFilter}>
						filter▽
					</button>
				</p>
			)}
		</>
	);
}
export default Filter;
