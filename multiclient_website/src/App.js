import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Register from './pages/Register';
import Signin from './pages/signin';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Header from './pages/Header';

import Footer from './pages/Footer';

function App() {
return (
	<Router>
		<Header />
	<Footer />
	<Navbar />
	
	<Routes>
		<Route exact path='/' exactelement={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/register' element={<Register/>} />
		<Route path='/sign-in' element={<Signin/>} />
		<Route path='/sign-up' element={<Signup/>} />
		<Route path='/Header' element={<Header/>} />
		<Route path='/Footer' element={<Footer/>} />
	</Routes>
	</Router>
);
}

export default App;
