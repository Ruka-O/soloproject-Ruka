import sns from '../data/sns';
import list from '../data/prefecture';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';

function Edit(props) {
	const prefecture = list.data;
	const snsList = sns.data;
	const [storeName, setStorename] = useState('');
	const [storePrefecture, setStorePrefecture] = useState('');
	const [selectSns, setSelectSns] = useState('Instagram');
	const [inputComment, setInputComment] = useState('');
	const [makeTag, setMakeTag] = useState('');
	const [url, setUrl] = useState('');
	const [sendButton, setSendButton] = useState(false);

	const setValue = (func, e) => {
		func(e.target.value);
	};

	useEffect(() => {
		const tags = makeTag.replaceAll(' ', ', ');
		const registration = {
			id: props.editData.id,
		};
		if (storeName) {
			registration.store_name = storeName;
			setStorename('');
		}
		if (storePrefecture) {
			registration.prefecture = storePrefecture;
			setStorePrefecture('');
		}
		if (selectSns) {
			registration.sns_name = selectSns;
			setSelectSns('');
		}
		if (url) {
			registration.url = url;
			setUrl('');
		}
		if (inputComment) {
			registration.comment = inputComment;
			setInputComment('');
		}
		if (tags) {
			registration.tags = tags;
			setMakeTag('');
		}
		(async () => {
			await fetch('/api', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registration),
			});
			props.setEdit(false);
			props.setSendStore((prev) => !props.sendStore);
		})();
	}, [sendButton]);

	return (
		<>
			<Modal isOpen={props.edit}>
				<div id="modal">
					<label>
						店名：
						<input type="text" onChange={(e) => setValue(setStorename, e)} defaultValue={props.editData.store_name} />
					</label>
					<br />

					<label>都道府県：</label>
					<select className="select" onChange={(e) => setValue(setStorePrefecture, e)} defaultValue={props.editData.prefecture}>
						{prefecture.map((prefecture) => {
							return (
								<option value={prefecture} key={prefecture}>
									{prefecture}
								</option>
							);
						})}
					</select>
					<br />

					<label>SNS：</label>
					<select className="select" onChange={(e) => setValue(setSelectSns, e)} defaultValue={props.editData.sns_name}>
						{snsList.map((sns) => {
							return (
								<option key={sns} value={sns}>
									{sns}
								</option>
							);
						})}
					</select>
					<br />

					<label>
						URL：
						<input type="text" onChange={(e) => setValue(setUrl, e)} defaultValue={props.editData.url ? props.editData.url : ''} />
					</label>
					<br />

					<label id="comment">
						コメント：
						<input id="comment" type="text" onChange={(e) => setValue(setInputComment, e)} defaultValue={props.editData.comment ? props.editData.comment : ''} />
					</label>
					<br />

					<label>
						タグ：
						<input type="text" placeholder="単語をスペースで区切る" onChange={(e) => setValue(setMakeTag, e)} defaultValue={props.editData.tags} />
					</label>
					<br />

					<p className="button">
						<button type="button" onClick={() => setSendButton((prev) => !sendButton)}>
							send🍓
						</button>
						<button type="button" onClick={() => props.setEdit((prev) => !props.edit)}>
							cancel🙅🏻‍♀️
						</button>
					</p>
				</div>
			</Modal>
		</>
	);
}

export default Edit;
