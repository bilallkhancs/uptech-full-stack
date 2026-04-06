import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from '../components/UserForm.jsx'

function EditUser() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: ''
  })

  useEffect(() => {
    const saved = localStorage.getItem('users')
    if (saved) {
      const users = JSON.parse(saved)
      const user = users.find(u => u.id === parseInt(id))
      if (user) {
        setFormData({
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.email || '',
          phone: user.phone || '',
        })
        setIsFetching(false)
        return
      }
    }
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phone: data.phone || '',
        })
        setIsFetching(false)
      })
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    await fetch(`https://dummyjson.com/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const saved = localStorage.getItem('users')
    if (saved) {
      const users = JSON.parse(saved)
      const updated = users.map(u =>
        u.id === parseInt(id) ? { ...u, ...formData } : u
      )
      localStorage.setItem('users', JSON.stringify(updated))
    }
    setIsLoading(false)
    navigate('/')
  }

  if (isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading user...</p>
        </div>
      </div>
    )
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
        title={`Edit User #${id}`}
        submitLabel="Save Changes"
      />
    </div>
  )
}

export default EditUser