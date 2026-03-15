import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import RevenueChart from './components/RevenueChart'
import TrafficChart from './components/TrafficChart'
import UsersChart from './components/UsersChart'
import Transactions from './components/Transactions'
import TopProducts from './components/TopProducts'
import { stats } from './data'

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0A0A0F' }}>
      <Sidebar />

      {/* Main content offset by sidebar */}
      <div style={{ marginLeft: 224, flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />

        <main style={{ padding: '20px 24px 40px', flex: 1 }}>

          {/* Stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 14,
              marginBottom: 14,
            }}
          >
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i + 1} />
            ))}
          </div>

          {/* Charts row 1: Revenue (2/3) + Traffic (1/3) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 14,
              marginBottom: 14,
            }}
          >
            <RevenueChart />
            <TrafficChart />
          </div>

          {/* Charts row 2: Users + Top Products */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
              marginBottom: 14,
            }}
          >
            <UsersChart />
            <TopProducts />
          </div>

          {/* Transactions full width */}
          <Transactions />
        </main>
      </div>
    </div>
  )
}
