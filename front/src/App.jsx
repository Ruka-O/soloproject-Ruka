import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import AddShops from './component/AddShops';
import ShopList from './component/ShopList';
import Filter from './component/Filter';
import Edit from './component/Edit';

function App() {
	const [sendStore, setSendStore] = useState(false);
	const [storePrefecture, setStorePrefecture] = useState('');
	const [edit, setEdit] = useState(false);
	const [editId, setEditId] = useState('');

	return (
		<>
			<div>
				<h1>My Favorite Shops</h1>
			</div>
			<AddShops sendStore={sendStore} setSendStore={setSendStore} />
			<Filter setStorePrefecture={setStorePrefecture} />
			<ShopList sendStore={sendStore} storePrefecture={storePrefecture} setEdit={setEdit} setEditId={setEditId} />
			<Edit edit={edit} setEdit={setEdit} editId={editId}/>
		</>
	);
}

export default App;
