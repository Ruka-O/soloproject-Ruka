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
	const [editData, setEditData] = useState({});
	const [notFind, setNotFind] = useState(false);



	return (
		<>
			<div>
				<h1>My Favorite Shops</h1>
			</div>
			<AddShops sendStore={sendStore} setSendStore={setSendStore} />
			<Filter setStorePrefecture={setStorePrefecture} setSendStore={setSendStore} sendStore={sendStore} setNotFind={setNotFind}/>
			<ShopList sendStore={sendStore} storePrefecture={storePrefecture} setEdit={setEdit} setEditData={setEditData} notFind={notFind} setNotFind={setNotFind}/>
			<Edit edit={edit} setEdit={setEdit} editData={editData} setSendStore={setSendStore} sendStore={sendStore}/>
		</>
	);
}

export default App;
