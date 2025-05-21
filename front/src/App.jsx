import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AddShops from './component/AddShops'
import ShopList from './component/ShopList'
import Filter from './component/Filter'

function App() {
	const [addPush, setAddPush] = useState(false);
	const [shoplist, setShoplist] = useState([]);

  return (
    <>
      <div>
        <h1>My Favorite Shops</h1>
      </div>
      <AddShops addPush={addPush} setAddPush={setAddPush}/>
      <Filter setShoplist={setShoplist}/>
      <ShopList addPush={addPush} shoplist={shoplist} setShoplist={setShoplist}/>
    </>
  )
}

export default App
