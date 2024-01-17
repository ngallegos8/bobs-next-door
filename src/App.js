import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import React, { useEffect, useState } from 'react';

function App() {
  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")

  // console.log(stores)
  // console.log(search)


  useEffect(() => {
    fetch('http://localhost:8085/stores')
      .then(response => response.json())
      .then(setStores)
  }, [])

  function handleNewStoreFormSubmit(newStore) {
    setStores([...stores, newStore])
  }

  const displayedStores = stores.filter((stores) => stores.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search search={search} setSearch={setSearch}/>
      <NewStoreForm onNewStoreFormSubmit={handleNewStoreFormSubmit}/>
      <StoreList stores={displayedStores}/>
    </div>
  );
}

export default App;
