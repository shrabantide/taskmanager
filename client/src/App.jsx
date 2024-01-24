import './App.css'
import Header from './components/header/Header'
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/main.scss';
import { Home } from './pages/home/Home';


function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
