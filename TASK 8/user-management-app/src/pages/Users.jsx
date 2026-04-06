import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCard from '../components/UserCard.jsx'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem('users')
    if (saved) {
      setUsers(JSON.parse(saved))
      setLoading(false)
    } else {
      fetch('https://dummyjson.com/users?limit=20')
        .then(res => res.json())
        .then(data => {
          setUsers(data.users)
          localStorage.setItem('users', JSON.stringify(data.users))
          setLoading(false)
        })
    }
  }, [])

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?')
    if (!confirmed) return
    await fetch(`https://dummyjson.com/users/${id}`, { method: 'DELETE' })
    const updated = users.filter(u => u.id !== id)
    setUsers(updated)
    localStorage.setItem('users', JSON.stringify(updated))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">User Management</h1>
          <p className="text-gray-400 text-sm mt-1">{users.length} users total</p>
        </div>
        <button
          onClick={() => navigate('/add-user')}
          className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-medium transition-colors"
        >
          + Add New User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default Users