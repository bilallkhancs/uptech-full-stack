// Revenue chart data
export const revenueData = [
  { month: 'Jan', revenue: 42000, target: 38000, expenses: 28000 },
  { month: 'Feb', revenue: 38500, target: 40000, expenses: 25000 },
  { month: 'Mar', revenue: 51200, target: 42000, expenses: 31000 },
  { month: 'Apr', revenue: 47800, target: 44000, expenses: 29500 },
  { month: 'May', revenue: 53400, target: 46000, expenses: 32000 },
  { month: 'Jun', revenue: 61000, target: 50000, expenses: 35000 },
  { month: 'Jul', revenue: 58200, target: 52000, expenses: 33500 },
  { month: 'Aug', revenue: 67500, target: 55000, expenses: 38000 },
  { month: 'Sep', revenue: 72100, target: 58000, expenses: 40000 },
  { month: 'Oct', revenue: 69300, target: 62000, expenses: 39000 },
  { month: 'Nov', revenue: 78400, target: 65000, expenses: 43000 },
  { month: 'Dec', revenue: 84200, target: 70000, expenses: 46000 },
]

// Traffic sources
export const trafficData = [
  { name: 'Organic', value: 38, color: '#C8FF00' },
  { name: 'Direct', value: 27, color: '#5FB8FF' },
  { name: 'Referral', value: 18, color: '#FF5F5F' },
  { name: 'Social', value: 17, color: '#5FFFB8' },
]

// Weekly active users
export const weeklyUsers = [
  { day: 'Mon', users: 2400, sessions: 4100 },
  { day: 'Tue', users: 3100, sessions: 5200 },
  { day: 'Wed', users: 2800, sessions: 4700 },
  { day: 'Thu', users: 3900, sessions: 6100 },
  { day: 'Fri', users: 4200, sessions: 6800 },
  { day: 'Sat', users: 2100, sessions: 3200 },
  { day: 'Sun', users: 1800, sessions: 2900 },
]

// Recent transactions
export const transactions = [
  { id: 'TXN-9841', user: 'Aisha Siddiqui', amount: 2490, status: 'completed', time: '2m ago', avatar: 'AS' },
  { id: 'TXN-9840', user: 'Marcus Chen', amount: 890, status: 'pending', time: '14m ago', avatar: 'MC' },
  { id: 'TXN-9839', user: 'Priya Sharma', amount: 4200, status: 'completed', time: '1h ago', avatar: 'PS' },
  { id: 'TXN-9838', user: 'James Okafor', amount: 320, status: 'failed', time: '2h ago', avatar: 'JO' },
  { id: 'TXN-9837', user: 'Elena Volkov', amount: 1750, status: 'completed', time: '3h ago', avatar: 'EV' },
  { id: 'TXN-9836', user: 'Omar Al-Farsi', amount: 6100, status: 'completed', time: '5h ago', avatar: 'OA' },
]

// Top products
export const topProducts = [
  { name: 'Analytics Pro', revenue: 48200, growth: 12.4, sales: 284 },
  { name: 'Data Pipeline', revenue: 39100, growth: 8.7, sales: 196 },
  { name: 'API Gateway', revenue: 31400, growth: -2.1, sales: 157 },
  { name: 'Cloud Storage', revenue: 24800, growth: 19.3, sales: 412 },
  { name: 'ML Toolkit', revenue: 18600, growth: 34.8, sales: 93 },
]

// Stats summary
export const stats = [
  {
    label: 'Total Revenue',
    value: '$724.5K',
    change: '+18.2%',
    positive: true,
    sub: 'vs last quarter',
  },
  {
    label: 'Active Users',
    value: '28,419',
    change: '+9.1%',
    positive: true,
    sub: 'vs last month',
  },
  {
    label: 'Conversion Rate',
    value: '4.73%',
    change: '+0.41%',
    positive: true,
    sub: 'vs last month',
  },
  {
    label: 'Churn Rate',
    value: '2.18%',
    change: '-0.23%',
    positive: true,
    sub: 'vs last quarter',
  },
]

export const navItems = [
  { icon: 'LayoutDashboard', label: 'Overview', active: true },
  { icon: 'BarChart3', label: 'Analytics' },
  { icon: 'Users', label: 'Customers' },
  { icon: 'ShoppingBag', label: 'Products' },
  { icon: 'CreditCard', label: 'Transactions' },
  { icon: 'Bell', label: 'Alerts', badge: 3 },
  { icon: 'Settings', label: 'Settings' },
]
