import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import main from './Components/main'
function App() {

const y = [1,2,3];
  return (
    
    <div>
      <Header classname="first" title="This is prop 1"/>
      <Header title="This is prop 2"/>
      <Footer year={y[0]} company="React"/>
    </div>
    
  )
}

export default App
