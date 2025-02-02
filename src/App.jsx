import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomeSection from './Home';
import Newsletter from './Newsletter';
import AboutUs from './Aboutus';
import ContactUs from './Contactus';
import BlogPage from './Blogpage';
import Store from './Store';
import Phone from './Phone';
import Watch from './Watch';
import Laptop from './Laptop';
import NotFoundPage from './Notfound';
import Footer from './Footer';





const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<> <HomeSection /> <Store /> <Newsletter /> </>} />
        <Route path='/aboutus' element= {<AboutUs />} />
        <Route path='/contactus' element= {<ContactUs />} />
        <Route path='/blogs' element= {<BlogPage />} />
        <Route path='/store' element= {<Store />} />
        <Route path='/store:phone' element= {<> <Store /> <Phone /> </>} />
        <Route path='/store:watch' element= {<> <Store /> <Watch /> </>} />
        <Route path='/store:laptop' element= {<> <Store /> <Laptop /> </>} />
        <Route path="*" element={<NotFoundPage />}/>
       </Routes>
      <Footer />
      
    </div>
  );
};

export default App;