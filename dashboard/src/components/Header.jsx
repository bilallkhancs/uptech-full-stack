import { Search, Bell, Calendar } from 'lucide-react'

export default function Header() {
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <header
      className="flex items-center gap-4 px-6 h-14 sticky top-0 z-10"
      style={{
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Page Title */}
      <div className="flex-1 min-w-0">
        <h1 className="font-display text-base font-700 text-ink-100" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
          Overview
        </h1>
        <p className="text-ink-500 flex items-center gap-1.5" style={{ fontSize: '12px' }}>
          <Calendar size={11} strokeWidth={1.8} />
          {dateStr}
        </p>
      </div>

      {/* Search */}
      <div
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg"
        style={{
          background: '#111118',
          border: '1px solid rgba(255,255,255,0.06)',
          minWidth: 200,
        }}
      >
        <Search size={14} color="#6B6B80" strokeWidth={1.8} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-ink-300 outline-none text-sm flex-1 placeholder:text-ink-500"
          style={{ fontSize: '13px' }}
        />
        <kbd
          className="text-ink-600 font-mono rounded px-1"
          style={{ fontSize: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          ⌘K
        </kbd>
      </div>

      {/* Notifications */}
      <button
        className="relative w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
        style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Bell size={15} color="#9090A8" strokeWidth={1.8} />
        <span
          className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
          style={{ background: '#FF5F5F' }}
        />
      </button>

      {/* Period badge */}
      <div
        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs"
        style={{
          background: 'rgba(200,255,0,0.07)',
          border: '1px solid rgba(200,255,0,0.15)',
          color: '#C8FF00',
          fontSize: '11px',
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8FF00', display: 'inline-block' }} />
        Live · FY 2025
      </div>
    </header>
  )
}