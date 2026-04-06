import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm from '../components/UserForm.jsx'

function AddUser() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all fields.')
      return
    }
    setIsLoading(true)
    const res = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const newUser = await res.json()

    const saved = localStorage.getItem('users')
    if (saved) {
      const users = JSON.parse(saved)
      const updatedUsers = [...users, { ...formData, id: newUser.id || Date.now() }]
      localStorage.setItem('users', JSON.stringify(updatedUsers))
    }

    setIsLoading(false)
    navigate('/')
  }

  return (
    <div className="min-h-screen px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-lg mb-6">
        <button onClick={() => navigate('/')} className="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to Users
        </button>
      </div>
      <UserForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/')}
        isLoading={isLoading}
        title="Add New User"
        submitLabel="Create User"
      />
    </div>
  )
}

export default AddUser