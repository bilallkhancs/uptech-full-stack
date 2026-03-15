import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { weeklyUsers } from '../data'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#1A1A24',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: '8px 12px',
        fontSize: 12,
      }}>
        <p style={{ color: '#9090A8', marginBottom: 4, fontSize: 11 }}>{label}</p>
        <p style={{ color: '#C8FF00' }}>Users: <b style={{ color: '#E8E8F0' }}>{payload[0]?.value?.toLocaleString()}</b></p>
        <p style={{ color: '#5FB8FF' }}>Sessions: <b style={{ color: '#E8E8F0' }}>{payload[1]?.value?.toLocaleString()}</b></p>
      </div>
    )
  }
  return null
}

export default function UsersChart() {
  return (
    <div className="stat-card p-5 animate-fade-up animate-fade-up-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display font-700 text-ink-100 text-sm" style={{ fontWeight: 700 }}>
            Weekly Activity
          </h2>
          <p className="text-ink-500 text-xs mt-0.5">Users & sessions this week</p>
        </div>
        <div
          className="text-xs font-mono px-2 py-1 rounded"
          style={{ background: 'rgba(95,184,255,0.1)', color: '#5FB8FF', border: '1px solid rgba(95,184,255,0.2)' }}
        >
          ↑ 9.1%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={weeklyUsers} barGap={4} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: '#6B6B80', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6B6B80', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="users" fill="#C8FF00" radius={[4, 4, 0, 0]} opacity={0.85} maxBarSize={24} />
          <Bar dataKey="sessions" fill="#5FB8FF" radius={[4, 4, 0, 0]} opacity={0.5} maxBarSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
