import React, { useEffect, useState } from 'react'
import MasterLayout from './layout/master.layout'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import { SettingsPage } from '../pages/settings/settings'
import { TeamsPage } from '../pages/teams/teams'
import { CalenderPage } from '../pages/calender/calender'
import { ProfilePage } from '../pages/profile/profile'
import { LoginPage } from '../pages/auth/login'
import { SignupPage } from '../pages/auth/signup'
import { HomePage } from '../pages/home/home'

const Driver = () => {
  const [token, setToken] = useState()
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login')
  //   }
  // }, [])
  return (
    <>
      <MasterLayout>
        <Routes>
          <Route
            path="/"
            element={!token ? <Navigate to="/login" /> : <HomePage />}
          />
          ;
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/calender" element={<CalenderPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </MasterLayout>
    </>
  )
}
export default Driver
