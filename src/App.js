import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Appointment/Dashboard/Dashboard';
import MyAppointment from './Pages/Appointment/Dashboard/MyAppointment';
import MyReviews from './Pages/Appointment/Dashboard/MyReviews';
import Users from './Pages/Appointment/Dashboard/Users';
import AddDoctor from './Pages/Appointment/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Appointment/Dashboard/ManageDoctors';
import Payment from './Pages/Appointment/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-14'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>}></Route>
        <Route path='/dashboard'
          element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='user' element={<Users></Users>}></Route>
          <Route path='addDoctor' element={<AddDoctor></AddDoctor>}></Route>
          <Route path='manageDoctor' element={<ManageDoctors></ManageDoctors>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
