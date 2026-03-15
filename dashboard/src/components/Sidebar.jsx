import {
  LayoutDashboard, BarChart3, Users, ShoppingBag,
  CreditCard, Bell, Settings, Zap, ChevronRight,
} from 'lucide-react'

const iconMap = { LayoutDashboard, BarChart3, Users, ShoppingBag, CreditCard, Bell, Settings }

const navItems = [
  { icon: 'LayoutDashboard', label: 'Overview', active: true },
  { icon: 'BarChart3', label: 'Analytics' },
  { icon: 'Users', label: 'Customers' },
  { icon: 'ShoppingBag', label: 'Products' },
  { icon: 'CreditCard', label: 'Transactions' },
  { icon: 'Bell', label: 'Alerts', badge: 3 },
]

const bottomItems = [
  { icon: 'Settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside
      style={{ background: '#0D0D14', borderRight: '1px solid rgba(255,255,255,0.05)' }}
      className="fixed left-0 top-0 h-full w-56 flex flex-col z-20"
    >
      {/* Logo */}
      <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center glow-volt"
            style={{ background: '#C8FF00' }}
          >
            <Zap size={16} color="#0A0A0F" strokeWidth={2.5} />
          </div>
          <span className="font-display font-700 text-base tracking-tight text-ink-100">
            Nexus
          </span>
          <span
            className="ml-auto text-xs font-mono px-1.5 py-0.5 rounded"
            style={{ background: 'rgba(200,255,0,0.1)', color: '#C8FF00', fontSize: '10px' }}
          >
            v2.4
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="px-3 mb-2 text-ink-500 uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
          Main Menu
        </p>
        {navItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.label} className={`sidebar-link ${item.active ? 'active' : ''}`}>
              <Icon size={15} strokeWidth={1.8} />
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className="ml-auto text-xs font-mono rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ background: '#FF5F5F', color: '#fff', fontSize: '10px' }}
                >
                  {item.badge}
                </span>
              )}
              {item.active && (
                <ChevronRight size={12} className="ml-auto" style={{ color: '#C8FF00', opacity: 0.6 }} />
              )}
            </div>
          )
        })}
      </nav>

      {/* User + Settings */}
      <div className="px-3 pb-4 border-t pt-4 space-y-0.5" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {bottomItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.label} className="sidebar-link">
              <Icon size={15} strokeWidth={1.8} />
              <span>{item.label}</span>
            </div>
          )
        })}

        {/* Profile */}
        <div
          className="mt-3 flex items-center gap-3 p-2.5 rounded-10 cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8 }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-700 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #C8FF00, #5FB8FF)', color: '#0A0A0F' }}
          >
            N
          </div>
          <div className="min-w-0">
            <p className="text-ink-100 text-xs font-500 truncate" style={{ fontWeight: 600 }}>Nayla</p>
            <p className="text-ink-500 truncate" style={{ fontSize: '11px' }}>Admin</p>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full pulse-dot flex-shrink-0" style={{ background: '#C8FF00' }} />
        </div>
      </div>
    </aside>
  )
}
