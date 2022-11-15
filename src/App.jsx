import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';


function App() {
  const [counts, setCounts] = useState([]);
  const [type, setType] = useState(null);

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setCounts(res.data));
  }, [])

  const getMovies = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setCounts(res.data));
  }


  const secs = (count) => {
    setType(count)
  }
  console.log(secs)

  console.log(counts)

  const desels = () => setType(null);



  return (
    <div className="App">
      <UsersForm
        getMovies={getMovies}
        desels={desels}
        type={type} />
      <UsersList
        getMovies={getMovies}
        counts={counts}
        secs={secs} />
    </div>
  )
}

export default App
