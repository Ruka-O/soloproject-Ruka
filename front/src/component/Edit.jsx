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
		(async()=>{
            await fetch('/api', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(registration),
		});
		props.setEdit(false);
        props.setSendStore((prev)=> !props.sendStore);
		})();
	}, [sendButton]);

	return (
		<>
			<div id="modal">
				<Modal isOpen={props.edit}>
					<label>店名：</label>
					<input type="text" onChange={(e) => setValue(setStorename, e)} defaultValue={props.editData.store_name} />
					<br />

					<label>都道府県：</label>
					<select onChange={(e) => setValue(setStorePrefecture, e)} defaultValue={props.editData.prefecture}>
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
					<select onChange={(e) => setValue(setSelectSns, e)} defaultValue={props.editData.sns_name}>
						{snsList.map((sns) => {
							return (
								<option key={sns} value={sns}>
									{sns}
								</option>
							);
						})}
					</select>
					<br />

					<label>URL：</label>
					<input type="text" onChange={(e) => setValue(setUrl, e)} defaultValue={props.editData.url ? props.editData.url : ''} />
					<br />

					<label>コメント：</label>
					<input id="comment" type="text" onChange={(e) => setValue(setInputComment, e)} height={'6em'} defaultValue={props.editData.comment ? props.editData.comment : ''} />
					<br />

					<label>タグ：</label>
					<input type="text" placeholder="単語をスペースで区切る" onChange={(e) => setValue(setMakeTag, e)} defaultValue={props.editData.tags} />
					<br />

					<p className="input_label">
						<button type="button" onClick={() => setSendButton((prev) => !sendButton)}>
							send🍓
						</button>
						<button type="button" onClick={() => props.setEdit((prev) => !props.edit)}>
							cancel🙅🏻‍♀️
						</button>
					</p>
				</Modal>
			</div>
		</>
	);
}

export default Edit;
