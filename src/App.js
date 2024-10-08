import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import HomeParallax from './Components/homeParallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './Components/courseList';
import CourseDetailPage from './Components/courseDetailPage';
import CategoryPage from './Components/categoryPage';
import CatalogPage from './Components/catalog';
import MyCourses from './Components/myCourses';
import Login from './Components/login';
import ContactPage from './Components/contactPage';
import ProductPage from './Components/productPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" exact element={<HomeParallax />} />  Home page in stile parallax*/}
            <Route path="/carreamarcovini.github.io/" exact element={<Home />} />
            <Route path='/carreamarcovini.github.io/login' exact element={<Login />} />
            <Route path='/carreamarcovini.github.io/vini/:courseId' exact element={<CourseDetailPage />} />
            <Route path='/carreamarcovini.github.io/catalog/:category' exact element={<CategoryPage />} />
            <Route path='/carreamarcovini.github.io/catalog' exact element={<CatalogPage />} />
            <Route path='/carreamarcovini.github.io/my_courses' exact element={<MyCourses />} />
            <Route path='/carreamarcovini.github.io/contatti' exact element={<ContactPage />} />
            <Route path='/carreamarcovini.github.io/product' exact element={<ProductPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
