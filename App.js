import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Explore from './components/Explore';
import Home from './components/Home'
import Profile from './components/Profile'
import Updates from './components/Updates'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
