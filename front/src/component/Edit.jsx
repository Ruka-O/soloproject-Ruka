import sns from '../data/sns';
import list from '../data/prefecture';
import Modal from 'react-modal';
import { useState } from 'react';

function Edit(props) {
	const prefecture = list.data;
	const snsList = sns.data;
	const [storeName, setStorename] = useState('');
	const [storePrefecture, setStorePrefecture] = useState('');
	const [selectSns, setSelectSns] = useState('Instagram');
	const [inputComment, setInputComment] = useState('');
	const [makeTag, setMakeTag] = useState('');
	const [url, setUrl] = useState('');

	// useEffect(() => {
	// 	(async () => {
	// 		const data = await fetch(`/api/edit/${props.editId}`, {
	// 			method: 'GET',
	// 			headers: { 'Content-Type': 'application/json' },
	// 		}).then((res) => res.json());
	// 		setEditData(data[0]);
            
	// 	})();
	// }, [props.editId]);
    
	const setValue = (func, e) => {
        func(e.target.value);
	};
    
	const sendEdit = async () => {
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
                method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registration),
			});
			props.setEdit(false);
		}
	};
    console.log("🍓 ~ data:", props.editData)
	return (
		<>
			<div id='modal'>
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
						<button type="button" onClick={sendEdit}>
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
