import './App.css'
import EventToDo from './EventToDo' 
import Counter from './Counter'
import Search from './ProductCard'
function App() {
  return (
    <div className='mainbox'>
      <EventToDo/>
      {/* <Counter/> */}
      <Search/>
    </div>
  )
}

export default App
