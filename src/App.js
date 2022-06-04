import './-assets/css/vendor/bootstrap.min.css';

import './-assets/css/vendor/vendor.min.css';


import './-assets/css/style.min.css';
import './-assets/css/style.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Products from './Components/Admin/Products';
import Category from './Components/Admin/Category';
import Tag from './Components/Admin/Tag';
import Admin from './Components/Admin/Admin';
import Dashboard from './Components/Admin/Dashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    //validation  form
    const[alert,setAlert]=useState({
      msg:'All fields are required!',
      type:'danger',
      status:false
    });
    // alert close btn
    const handleCloseButton=()=>{
      setAlert(false); 
    }

  //slug generator
  const makeSlug=(tagName)=>{
    let tag=tagName.split(' ');
    return tag.join('-').toLowerCase();
  }
  // tag data show
  const [tagShow,SetTagShow]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5050/tags').then(res=>{
      SetTagShow(res.data);
    }).catch();
  },[tagShow]);
  //category show
  const [catShow,SetCatShow]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5050/categories').then(res=>{
      SetCatShow(res.data);
    }).catch();
  },[catShow]);
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/admin' element={<Admin />}>
              <Route path='/admin/dashboard' element={<Dashboard />}></Route>
              <Route path='/admin/products' element={<Products />}></Route>
              <Route path='/admin/categories' element={<Category catShow={catShow} makeSlug={makeSlug} setAlert={setAlert} alert={alert} handleCloseButton={handleCloseButton} />}></Route>
      <Route path='/admin/tags' element={<Tag makeSlug={makeSlug} tagShow={tagShow} setAlert={setAlert} alert={alert} handleCloseButton={handleCloseButton} />}></Route>
          </Route>
         
      </Routes>
      <Footer />
    </>
  );
}

export default App;
