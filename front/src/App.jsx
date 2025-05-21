import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddShops from './component/AddShops'
import ShopList from './component/ShopList'

function App() {
	const [addPush, setAddPush] = useState(false);

  return (
    <>
      <div>
        <h1>My Favorite Shops</h1>
      </div>
      <AddShops addPush={addPush} setAddPush={setAddPush}/>
      <ShopList addPush={addPush}/>
    </>
  )
}

export default App
