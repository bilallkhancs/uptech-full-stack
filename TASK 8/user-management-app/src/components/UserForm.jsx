function UserForm({ formData, onChange, onSubmit, onCancel, isLoading, title, submitLabel }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-gray-400 text-sm mt-1">Fill in the details below</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              placeholder="John"
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
              placeholder="Doe"
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="john@example.com"
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="123456789"
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={isLoading}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white transition-colors"
          >
            {isLoading ? 'Saving...' : submitLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserForm