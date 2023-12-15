import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Book from './components/mainPageComponents/Book';
import Login from './components/mainPageComponents/Login';
import Home from './components/mainPageComponents/Home';
import Rooms from './components/mainPageComponents/Rooms';
import AdminPage from './components/AdminPage';
import ShowClients from './components/adminPageComponents/ShowClients';
import CreateClient from './components/adminPageComponents/CreateClient';
import ShowRooms from './components/adminPageComponents/ShowRooms';
import CreateRoom from './components/adminPageComponents/CreateRoom';
import Booking from './components/adminPageComponents/Booking'
import ShowReservation from './components/adminPageComponents/ShowReservation';
import EditRoom from './components/adminPageComponents/EditRoom';
import EditClient from './components/adminPageComponents/EditClient';
import EditBooking from './components/adminPageComponents/EditBooking';
import ShowUsers from './components/adminPageComponents/ShowUsers';
import EditUser from './components/adminPageComponents/EditUser';
import CreateUser from './components/adminPageComponents/CreateUser';

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
          <Route path='/admin/rooms' element={ <ShowRooms/> } />
          <Route path='/admin/showclients' element={ <ShowClients/> } />
          <Route path='/admin/createclient' element={ <CreateClient/> } />
          <Route path='/admin/createroom' element={ <CreateRoom/> }/>
          <Route path='/admin/booking' element={ <Booking/> }/>
          <Route path='/admin/main' element={ <ShowReservation/> }/>
          <Route path='/admin/updateroom' element={ <EditRoom/> }/>
          <Route path='/admin/updateclient' element={ <EditClient/> }/>
          <Route path='/admin/updatebooking' element={ <EditBooking/> }/>
          <Route path='/admin/showusers' element={ <ShowUsers/> }/>
          <Route path='/admin/updateuser' element={ <EditUser/> }/>
          <Route path='/admin/createuser' element={ <CreateUser/> }/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
