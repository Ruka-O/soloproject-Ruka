import list from '../data/prefecture';
import sns from '../data/sns';
import shopList from '../data/shopList';
import { useState } from 'react';

function AddShops() {
	const prefecture = list.data;
	const snsList = sns.data;
	const [storeName, setStorename] = useState('');
	const [storePrefecture, setStorePrefecture] = useState('北海道');
	const [selectSns, setSelectSns] = useState('Instagram');
	const [inputComment, setInputComment] = useState('');
	const [makeTag, setMakeTag] = useState('');
	const [addPush, setAddPush] = useState(false);
	const setValue = (func, e) => {
		func(e.target.value);
	};

	const sendDetail = async () => {
		const tags = makeTag.split(' ');
		const registration = {
			store_name: storeName,
			prefecture: storePrefecture,
			sns_name: selectSns,
			comment: inputComment,
			tags: tags,
		};
		await fetch('/api', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(registration),
		});
		// shopList.push(registration);

		setAddPush(false);
	};
	const cansel = () => {
		setAddPush(false);
	};

	const pushButton = () => {
		setAddPush(true);
	};

	return (
		<>
			{addPush ? (
				<div className='send__detail'>
					<p>
						<label>店名：</label>
						<input type="text" onChange={(e) => setValue(setStorename, e)} />
					</p>
					<p>
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
						<label>SNS：</label>
						<select onChange={(e) => setValue(setSelectSns, e)}>
							{snsList.map((sns) => {
								return <option value={sns}>{sns}</option>;
							})}
						</select>
					</p>
					<p>
						<label>コメント：</label>
						<input type="text" onChange={(e) => setValue(setInputComment, e)} />
						<label>タグ：</label>
						<input type="text" placeholder="単語をスペースで区切る" onChange={(e) => setValue(setMakeTag, e)} />
					</p>
					<button type="button" onClick={sendDetail}>
						🍓
					</button>
					<button type="button" onClick={cansel}>
						🙅🏻‍♀️
					</button>
				</div>
			) : (
				<button type="button" onClick={pushButton}>
					add▽
				</button>
			)}
		</>
	);
}
export default AddShops;
