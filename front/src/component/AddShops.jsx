import list from '../data/prefecture';
import sns from '../data/sns';
import { useState, useRef } from 'react';

function AddShops(props) {
	const prefecture = list.data;
	const snsList = sns.data;
	let storeName = useRef(null);
	// const [storeName, setStorename] = useState('');
	let storePrefecture = useRef(null);
	// const [storePrefecture, setStorePrefecture] = useState('');
	let selectSns = useRef(null);
	// const [selectSns, setSelectSns] = useState('Instagram');
	let inputComment = useRef(null);
	// const [inputComment, setInputComment] = useState('');
	let makeTag = useRef(null);
	// const [makeTag, setMakeTag] = useState('');
	let url = useRef(null);
	// const [url, setUrl] = useState('');
	const [addPush, setAddPush] = useState(false);

	// const setValue = (func, e) => {
	// 	func(e.target.value);
	// };

	const sendDetail = async () => {
		if (storeName !== '') {
			const tags = makeTag.current.value.replaceAll(' ', ', ');
			const registration = {
				store_name: storeName.current.value,
				prefecture: storePrefecture.current.value,
				sns_name: selectSns.current.value,
				url: url.current.value,
				comment: inputComment.current.value,
				tags: tags,
			};
			await fetch('/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registration),
			});

			props.setSendStore((prev) => !props.sendStore);
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
					<label>
						店名：
						<input type="text" ref={storeName} />
					</label>
					<br />

					<label>都道府県：</label>
					<select className="select" ref={storePrefecture}>
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
					<select className="select" ref={selectSns}>
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
						<input type="text" ref={url} />
					</label>
					<br />

					<label id="comment">
						コメント：
						<input id="comment" type="text" ref={inputComment} />
					</label>
					<br />

					<label>
						タグ：
						<input type="text" placeholder="単語をスペースで区切る" ref={makeTag} />
					</label>
					<br />

					<p className="button">
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
