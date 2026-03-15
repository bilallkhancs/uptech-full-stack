import { topProducts } from '../data'
import { TrendingUp, TrendingDown } from 'lucide-react'

const maxRevenue = Math.max(...topProducts.map(p => p.revenue))

export default function TopProducts() {
  return (
    <div className="stat-card p-5 animate-fade-up animate-fade-up-6">
      <h2 className="font-display font-700 text-ink-100 text-sm mb-1" style={{ fontWeight: 700 }}>
        Top Products
      </h2>
      <p className="text-ink-500 text-xs mb-4">Ranked by revenue</p>

      <div className="space-y-3">
        {topProducts.map((p, i) => (
          <div key={p.name}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-ink-600"
                  style={{ fontSize: 11, width: 16 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ color: '#C0C0D0', fontSize: 12 }}>{p.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-0.5 text-xs font-mono`} style={{
                  color: p.growth >= 0 ? '#C8FF00' : '#FF5F5F', fontSize: 11,
                }}>
                  {p.growth >= 0
                    ? <TrendingUp size={10} strokeWidth={2} />
                    : <TrendingDown size={10} strokeWidth={2} />
                  }
                  {Math.abs(p.growth)}%
                </div>
                <span style={{ color: '#E8E8F0', fontSize: 12, fontFamily: 'JetBrains Mono', fontWeight: 600, width: 52, textAlign: 'right' }}>
                  ${(p.revenue / 1000).toFixed(1)}k
                </span>
              </div>
            </div>
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.05)' }}>
              <div style={{
                height: '100%',
                width: `${(p.revenue / maxRevenue) * 100}%`,
                borderRadius: 2,
                background: i === 0 ? '#C8FF00' : i === 1 ? '#5FB8FF' : i === 4 ? '#5FFFB8' : 'rgba(200,255,0,0.4)',
                transition: 'width 0.6s ease',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
