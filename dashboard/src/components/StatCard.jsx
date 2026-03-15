import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ label, value, change, positive, sub, delay = 0 }) {
  return (
    <div
      className={`stat-card p-5 animate-fade-up animate-fade-up-${delay}`}
    >
      <p className="text-ink-500 text-xs font-500 uppercase tracking-wider mb-3" style={{ letterSpacing: '0.08em' }}>
        {label}
      </p>
      <p
        className="font-display font-700 text-ink-100 mb-2"
        style={{ fontSize: '26px', letterSpacing: '-0.03em', fontWeight: 800 }}
      >
        {value}
      </p>
      <div className="flex items-center gap-1.5">
        {positive ? (
          <TrendingUp size={13} style={{ color: '#C8FF00' }} strokeWidth={2} />
        ) : (
          <TrendingDown size={13} style={{ color: '#FF5F5F' }} strokeWidth={2} />
        )}
        <span
          className="text-xs font-mono font-500"
          style={{ color: positive ? '#C8FF00' : '#FF5F5F', fontWeight: 600 }}
        >
          {change}
        </span>
        <span className="text-ink-600 text-xs">{sub}</span>
      </div>
    </div>
  )
}
