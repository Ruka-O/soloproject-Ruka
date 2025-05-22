import list from '../data/prefecture';
import sns from '../data/sns';
import { useState } from 'react';

function AddShops(props) {
	const prefecture = list.data;
	const snsList = sns.data;
	const [storeName, setStorename] = useState('');
	const [storePrefecture, setStorePrefecture] = useState('');
	const [selectSns, setSelectSns] = useState('Instagram');
	const [inputComment, setInputComment] = useState('');
	const [makeTag, setMakeTag] = useState('');
	const [url, setUrl] = useState('');
	const [addPush, setAddPush] = useState(false);

	const setValue = (func, e) => {
		func(e.target.value);
	};

	const sendDetail = async () => {
		if (storeName !== '') {
			const tags = makeTag.replaceAll(' ', ', ');
			const registration = {
				store_name: storeName,
				prefecture: storePrefecture,
				sns_name: selectSns,
				url: url,
				comment: inputComment,
				tags: tags,
			};
			await fetch('/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registration),
			});
			props.setSendStore(true);
		}
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
				<div id="send__detail">
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
					</p>
					<p>
						<label>SNS：</label>
						<select onChange={(e) => setValue(setSelectSns, e)}>
							{snsList.map((sns) => {
								return (
									<option key={sns} value={sns}>
										{sns}
									</option>
								);
							})}
						</select>
					</p>
					<p>
						<label>URL：</label>
						<input type="text" onChange={(e) => setValue(setUrl, e)} />
					</p>
					<p>
						<label>コメント：</label>
						<input id="comment" type="text" onChange={(e) => setValue(setInputComment, e)} height={'6em'} />
					</p>
					<p>
						<label>タグ：</label>
						<input type="text" placeholder="単語をスペースで区切る" onChange={(e) => setValue(setMakeTag, e)} />
					</p>
					<p id="input_label">
						<button type="button" onClick={sendDetail}>
							send🍓
						</button>
						<button type="button" onClick={cansel}>
							cancel🙅🏻‍♀️
						</button>
					</p>
				</div>
			) : (
				<p>
					<button type="button" onClick={pushButton}>
						add▽
					</button>
				</p>
			)}
		</>
	);
}
export default AddShops;
