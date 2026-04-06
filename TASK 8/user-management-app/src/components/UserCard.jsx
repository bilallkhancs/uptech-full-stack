import { useNavigate } from 'react-router-dom'

function UserCard({ user, onDelete }) {
  const navigate = useNavigate()

  const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase()

  const colors = [
    'bg-violet-500', 'bg-cyan-500', 'bg-rose-500',
    'bg-amber-500', 'bg-emerald-500', 'bg-blue-500'
  ]
  const color = colors[user.id % colors.length]

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col gap-4 hover:border-gray-600 transition-all duration-200">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white truncate">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-gray-400 truncate">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>📞</span>
        <span>{user.phone}</span>
      </div>

      <div className="flex gap-2 pt-1">
        <button
          onClick={() => navigate(`/edit-user/${user.id}`)}
          className="flex-1 py-2 rounded-lg text-xs font-medium bg-gray-800 hover:bg-violet-600 text-gray-300 hover:text-white transition-all duration-150"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="flex-1 py-2 rounded-lg text-xs font-medium bg-gray-800 hover:bg-rose-600 text-gray-300 hover:text-white transition-all duration-150"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default UserCard