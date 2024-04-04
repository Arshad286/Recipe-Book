
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import RecipeDetails from './Component/RecipeDetails'
import RecipeList from './Component/RecipeList'




function App() {
  

  return (
    
      
      <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList/>} />
          <Route path="/recipe/:id" element={<RecipeDetails/>} />
        </Routes>
      </div>
    </Router>
      
      
      )
}

export default App
