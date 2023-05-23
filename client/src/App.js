import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './screens/AboutUs'
import HomeScreen from './screens/HomeScreen'
import NotFound from './screens/NotFound'
import ContactUs from './screens/ContactUs'
import MoviesPage from './screens/Movies'
import SingleMovie from './screens/SingleMovie'
import WatchPage from './screens/WatchPage'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Dashboard/Profile'
import Aos from 'aos'
import Password from './screens/Dashboard/Password'
import FavouriteMovies from './screens/Dashboard/FavouriteMovies'
import MoviesList from './screens/Dashboard/Admin/MoviesList'
import Dashboard from './screens/Dashboard/Admin/Dashboard'
import Categories from './screens/Dashboard/Admin/Categories'
import Users from './screens/Dashboard/Admin/Users'
import AddMovies from './screens/Dashboard/AddMovies'
import ScrollOnTop from './ScrollOnTop'

function App() {
  Aos.init();
  return (
  
       <ScrollOnTop>
       <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/movie/:id' element={<SingleMovie/>}/> 
      <Route path='/watch/:id' element={<WatchPage/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/profile' element={<Profile/>}/> 
      <Route path='/password' element={<Password/>}/> 
      <Route path='/favorites' element={<FavouriteMovies/>}/> 
      <Route path='/movieslist' element={<MoviesList/>}/> 
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/categories' element={<Categories/>}/> 
      <Route path='/users' element={<Users/>}/> 
      <Route path='/addmovie' element={<AddMovies/>}/> 
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    </ScrollOnTop>
  
   
   
  )
}

export default App