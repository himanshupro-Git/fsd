import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users") 
.then(Response=>Response.json())
.then(json=>setData(json))
.catch(error=>console.log(error)
)
},[])
  return (
    <div className='App'>
      <h1>Fetch API</h1>
      <ul>
        {data.map(user=><li key={user.id}>
          {user.name}
        </li>)}
      </ul>
    </div>
  )
}

export default App
