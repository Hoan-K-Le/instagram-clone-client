import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Welcome from './components/pages/Welcome'
import Navbar from './components/Navbar'
import User from './components/pages/User'
import Users from './components/pages/Users'
import ProfileEditForm from './components/pages/ProfileEditForm'

// darkmode 
// import {createContext} from 'react'
// import ReactSwitch from 'react-switch'
// export const ThemeContext = createContext(null)

function App() {
// darkmode
// const [theme, setTheme] = useState('light')
// const toggleTheme = () => {
//   setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
// }



  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  // useEffect -- if the user navigates away fro the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

  //event handler to log the user out when needed

  const handleLogout = () => {
    console.log('log the user out')
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
      navigate('/')
    }
  }
  return (
    // darkmode

      // <ThemeContext.Provider value={{ theme, toggleTheme}}>
    // <div className='' id={theme}>
      <div>

      <header>
        {/* darkmode */}
        {/* <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label> */}
        {/* <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/> */}
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />

      </header>
      <Routes>
        <Route exact path='/test' element={<Welcome />} />
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
          path='/'
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
          />
        <Route
          exact
          path='/profile'
          element={
            currentUser ? (
              <Profile
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              handleLogout={handleLogout}
              />
              ) : (
                <Navigate to='/' />
                )
              }
              />
        <Route
        
        exact
        path='/users/:id'
        element={<User currentUser={currentUser} />}
        />
        <Route
          exact
          path='/users'
          element={<Users currentUser={currentUser} />}
          />
        <Route
          exact
          path='/profile/:id'
          element={
            <ProfileEditForm
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            />
          }
          />
      </Routes>

    </div>
    //  </div>
          //  </ThemeContext.Provider>
         
         )
        }
        
        export default App
        