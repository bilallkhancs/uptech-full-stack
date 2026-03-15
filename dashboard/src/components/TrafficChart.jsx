import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { trafficData } from '../data'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#1A1A24',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: '8px 12px',
        fontSize: 12,
      }}>
        <span style={{ color: payload[0].payload.color }}>{payload[0].name}</span>
        <span style={{ color: '#E8E8F0', marginLeft: 8, fontWeight: 600 }}>{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

export default function TrafficChart() {
  return (
    <div className="stat-card p-5 animate-fade-up animate-fade-up-4">
      <h2 className="font-display font-700 text-ink-100 text-sm mb-1" style={{ fontWeight: 700 }}>
        Traffic Sources
      </h2>
      <p className="text-ink-500 text-xs mb-4">Where your users come from</p>

      <div className="relative" style={{ height: 160 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficData}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={72}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              {trafficData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none',
        }}>
          <p style={{ color: '#E8E8F0', fontSize: 20, fontWeight: 800, fontFamily: 'Syne', letterSpacing: '-0.03em', lineHeight: 1 }}>
            100K
          </p>
          <p style={{ color: '#6B6B80', fontSize: 10 }}>visitors</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {trafficData.map((item) => (
          <div key={item.name} className="flex items-center gap-2.5">
            <span style={{ width: 8, height: 8, borderRadius: 2, background: item.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#9090A8', fontSize: 12, flex: 1 }}>{item.name}</span>
            <div className="flex-1 mx-2">
              <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }}>
                <div style={{
                  height: '100%',
                  width: `${item.value}%`,
                  background: item.color,
                  borderRadius: 2,
                  opacity: 0.7,
                }} />
              </div>
            </div>
            <span style={{ color: '#C0C0D0', fontSize: 12, fontFamily: 'JetBrains Mono', fontWeight: 600, width: 32, textAlign: 'right' }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
