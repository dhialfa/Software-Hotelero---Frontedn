import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Book from './components/mainPageComponents/Book';
import Login from './components/mainPageComponents/Login';
import Home from './components/mainPageComponents/Home';
import Rooms from './components/mainPageComponents/Rooms';
import AdminPage from './components/AdminPage';
import AdminRooms from './components/adminPageComponents/AdminRooms';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/book' element={ <Book/> } />
          <Route path='/rooms' element={ <Rooms/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='*' element={ <NotFound/> } />
          <Route path='/admin' element={ <AdminPage/> } />
          <Route path='/admin/rooms' element={ <AdminRooms/> } />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
