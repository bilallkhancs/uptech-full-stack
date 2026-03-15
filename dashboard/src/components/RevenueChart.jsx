import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { revenueData } from '../data'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#1A1A24',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: '10px 14px',
        fontSize: 12,
      }}>
        <p style={{ color: '#9090A8', marginBottom: 6, fontSize: 11 }}>{label}</p>
        {payload.map((p) => (
          <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, display: 'inline-block' }} />
            <span style={{ color: '#C0C0D0', textTransform: 'capitalize' }}>{p.name}</span>
            <span style={{ color: '#E8E8F0', fontWeight: 600, marginLeft: 'auto' }}>
              ${(p.value / 1000).toFixed(1)}k
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function RevenueChart() {
  return (
    <div
      className="stat-card p-5 animate-fade-up animate-fade-up-3"
      style={{ gridColumn: 'span 2' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-display font-700 text-ink-100 text-sm" style={{ fontWeight: 700 }}>
            Revenue Overview
          </h2>
          <p className="text-ink-500 text-xs mt-0.5">Monthly revenue vs target vs expenses</p>
        </div>
        <div className="flex gap-2">
          {['1W', '1M', '3M', '1Y'].map((t, i) => (
            <button
              key={t}
              className="px-2.5 py-1 rounded text-xs font-mono transition-colors"
              style={i === 3 ? {
                background: 'rgba(200,255,0,0.1)',
                color: '#C8FF00',
                border: '1px solid rgba(200,255,0,0.2)',
              } : {
                color: '#6B6B80',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="gRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C8FF00" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#C8FF00" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5FB8FF" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#5FB8FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5F5F" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#FF5F5F" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#6B6B80', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6B6B80', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.06)', strokeWidth: 1 }} />
          <Area
            type="monotone" dataKey="revenue" stroke="#C8FF00" strokeWidth={2}
            fill="url(#gRevenue)" dot={false} activeDot={{ r: 4, fill: '#C8FF00', strokeWidth: 0 }}
          />
          <Area
            type="monotone" dataKey="target" stroke="#5FB8FF" strokeWidth={1.5}
            fill="url(#gTarget)" dot={false} strokeDasharray="4 3"
            activeDot={{ r: 4, fill: '#5FB8FF', strokeWidth: 0 }}
          />
          <Area
            type="monotone" dataKey="expenses" stroke="#FF5F5F" strokeWidth={1.5}
            fill="url(#gExpenses)" dot={false}
            activeDot={{ r: 4, fill: '#FF5F5F', strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex gap-4 mt-3">
        {[
          { label: 'Revenue', color: '#C8FF00' },
          { label: 'Target', color: '#5FB8FF', dashed: true },
          { label: 'Expenses', color: '#FF5F5F' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div style={{
              width: 20, height: 2,
              background: l.color,
              borderRadius: 1,
              borderTop: l.dashed ? `2px dashed ${l.color}` : 'none',
              opacity: l.dashed ? 0.8 : 1,
            }} />
            <span style={{ color: '#6B6B80', fontSize: 11 }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
