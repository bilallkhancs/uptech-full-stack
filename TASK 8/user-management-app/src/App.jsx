import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users.jsx'
import AddUser from './pages/AddUser.jsx'
import EditUser from './pages/EditUser.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  )
}

export default App