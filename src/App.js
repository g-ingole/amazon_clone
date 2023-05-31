import './App.css';
import Cart from './Components/cart/Cart';
import Footer from './Components/footer/Footer';
import Navbar from './Components/header/Navbar';
import Maincomp from './Components/home/Maincomp';
import Newnav from './Components/newnavbaar/Newnav';
import SignUp from './Components/signup_sign/SignUp';
import Sign_in from './Components/signup_sign/Sign_in';
import Buynow from './Components/buynow/Buynow';
import { Routes, Route } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
function App() {


  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 2000)
  }, [])
  return (

    <>
      {
        data ? (
          <>
            <Navbar />
            <Newnav />
            <Routes>
              <Route path='/' element={<Maincomp />}></Route>
              <Route path='/login' element={<Sign_in />}></Route>
              <Route path='/register' element={<SignUp />}></Route>
              <Route path='/getproductsone/:id' element={<Cart />}></Route>
              <Route path='/buynow' element={<Buynow />}></Route>
            </Routes>
            <Footer />
          </>
        ) : (
          <div className='circle'>
            <CircularProgress />
            <h2>Loading...</h2>

          </div>
        )
      }

    </>
  );
}

export default App;
