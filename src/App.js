import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Welcome from './components/pages/Welcome'
import Navbar from './components/Navbar'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect -- if the user navigates away fro the page, we will log them back in

  //event handler to log the user out when needed
  const handleLogout = () => {
    console.log('log the user out')
  }
  return (
    <div className='App'>
      <header>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      <h2>hello world</h2>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route
          exact
          path='/register'
          element={
            <Register
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          exact
          path='/login'
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          exact
          path='/profile'
          element={
            <Profile
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
