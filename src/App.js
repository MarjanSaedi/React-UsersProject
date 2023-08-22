import React, { Component } from 'react';
import Users from './components/users';
import User from './components/user';
import Navbar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import NotFound from './components/notFound';

class App extends Component {
   
    render() { 
        return (
            <>
            <Navbar />
            <div className='container mt-3'>
                <Routes>
                <Route path='/users/:id' Component={User}/>
                <Route path='/users' Component={Users}/>
                <Route path='/login' Component={Login}/>
                <Route path='/register' Component={Register}/>
                <Route path='/not-found' Component={NotFound}/>
                <Route path="*" Component={NotFound} />
                <Route path='/' Component={Home}/>
                
                </Routes>
                
            </div>
            </>
        );
    }
}
 
export default App;