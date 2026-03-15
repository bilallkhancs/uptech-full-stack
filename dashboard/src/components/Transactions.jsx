import { transactions } from '../data'
import { ArrowUpRight } from 'lucide-react'

const statusStyles = {
  completed: { bg: 'rgba(200,255,0,0.1)', color: '#C8FF00', dot: '#C8FF00', label: 'Completed' },
  pending: { bg: 'rgba(255,180,0,0.1)', color: '#FFB400', dot: '#FFB400', label: 'Pending' },
  failed: { bg: 'rgba(255,95,95,0.1)', color: '#FF5F5F', dot: '#FF5F5F', label: 'Failed' },
}

const avatarColors = [
  ['#C8FF00', '#0A0A0F'],
  ['#5FB8FF', '#0A0A0F'],
  ['#FF5F5F', '#fff'],
  ['#5FFFB8', '#0A0A0F'],
  ['#A855F7', '#fff'],
  ['#FB923C', '#fff'],
]

export default function Transactions() {
  return (
    <div className="stat-card p-5 animate-fade-up animate-fade-up-5" style={{ gridColumn: 'span 2' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display font-700 text-ink-100 text-sm" style={{ fontWeight: 700 }}>
            Recent Transactions
          </h2>
          <p className="text-ink-500 text-xs mt-0.5">Latest activity across all accounts</p>
        </div>
        <button
          className="flex items-center gap-1 text-xs font-500 transition-colors"
          style={{ color: '#C8FF00', opacity: 0.8 }}
        >
          View all <ArrowUpRight size={12} strokeWidth={2} />
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Transaction', 'Customer', 'Amount', 'Status', 'Time'].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: 'left',
                    padding: '6px 12px 10px',
                    color: '#4A4A5A',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontFamily: 'JetBrains Mono',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => {
              const s = statusStyles[tx.status]
              const [bg, fg] = avatarColors[i % avatarColors.length]
              return (
                <tr
                  key={tx.id}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.1s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{ color: '#6B6B80', fontSize: 12, fontFamily: 'JetBrains Mono' }}>{tx.id}</span>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: bg, color: fg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700, fontFamily: 'Syne', flexShrink: 0,
                      }}>
                        {tx.avatar}
                      </div>
                      <span style={{ color: '#C0C0D0', fontSize: 13 }}>{tx.user}</span>
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{ color: '#E8E8F0', fontSize: 13, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>
                      ${tx.amount.toLocaleString()}
                    </span>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      padding: '3px 8px', borderRadius: 20,
                      background: s.bg, color: s.color,
                      fontSize: 11, fontWeight: 500,
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.dot }} />
                      {s.label}
                    </span>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{ color: '#4A4A5A', fontSize: 11, fontFamily: 'JetBrains Mono' }}>{tx.time}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
