import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage.jsx"
import LogInPage from "./pages/auth/login/LogInPage.jsx"
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx"
import NotificationPage from "./pages/notification/NotificationPage.jsx"
import ProfilePage from "./pages/profile/ProfiePage.jsx"

import Sidebar from "./components/common/Sidebar.jsx"
import RightPanel from "./components/common/RightPanel.jsx"


function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      {/* common components because notwrapped with routes  */}
      <Sidebar />
      <Routes>
        <Route path='/'  element={<HomePage />} />
        <Route path='/login'  element={<LogInPage />} />
        <Route path='/signUp'  element={<SignUpPage />} />
        <Route path='/notifications'  element={<NotificationPage />} />
        <Route path='/profile/:username'  element={<ProfilePage />} />
      </Routes>
      <RightPanel/>
    </div>
  )
}

export default App
