import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import HomeParallax from './Components/homeParallax';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './Components/courseList';
import WineDetailPage from './Components/wineDetailPage';
import CategoryPage from './Components/categoryPage';
import CatalogPage from './Components/catalog';
import BeerCatalogPage from './Components/beerCatalog';
import MyCourses from './Components/myCourses';
import Login from './Components/login';
import ContactPage from './Components/contactPage';
import ProductPage from './Components/productPage';
import BeerDetailPage from './Components/beerDetailPage';

class App extends Component {
  render() {
    return (

        <div id="root">
          <div className="main-content">
            <Router>
              <Header />
              <Routes>
                {/* <Route path="/" exact element={<HomeParallax />} />  Home page in stile parallax*/}
                <Route path="/" exact element={<Home />} />
                <Route path='/carreamarcovini.github.io/login' exact element={<Login />} />
                <Route path='/vino/:courseId' exact element={<WineDetailPage />} />
                <Route path='/carreamarcovini.github.io/catalog/:category' exact element={<CategoryPage />} />
                <Route path='/catalogoVini' exact element={<CatalogPage />} />
                <Route path='/catalogoBirre' exact element={<BeerCatalogPage />} />
                <Route path='/birra/:courseId' exact element={<BeerDetailPage />} />
                <Route path='/carreamarcovini.github.io/my_courses' exact element={<MyCourses />} />
                <Route path='/contatti' exact element={<ContactPage />} />
                <Route path='/product' exact element={<ProductPage />} />
                <Route path='/prodotto' exact element={<ProductPage />} />
              </Routes>
            </Router>
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;
