
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Signup/>} />
    <Route exact path='/signin' element={<Signin/>}/>
   </Routes>

    </BrowserRouter>

    </div>
  )
}

export default App
