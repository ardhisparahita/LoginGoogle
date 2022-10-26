
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/profile';

function App() {



  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <div className="App">
            <a href='https://fadfaasd.herokuapp.com/api/v1/auth/google'>Login Google Muhammad Reza</a>
          </div>
        }/>
        <Route path='/:token' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
