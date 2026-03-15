# Nexus Dashboard — React + Vite

A production-grade analytics dashboard built with React 18, Vite 5, Recharts, and Tailwind CSS.

## 🎨 Design
- **Theme**: Dark industrial with volt green (#C8FF00) accent
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono
- **Charts**: Recharts (area, bar, donut)
- **Animations**: CSS staggered fade-up on load

## 📦 Stack
| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite 5 | Build tool & dev server |
| Recharts 2 | Charts & data viz |
| Lucide React | Icons |
| Tailwind CSS 3 | Utility-first styling |

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The app runs at **http://localhost:5173** by default.

## 📁 Structure

```
src/
├── components/
│   ├── Sidebar.jsx        # Left navigation
│   ├── Header.jsx         # Top bar with search
│   ├── StatCard.jsx       # KPI metric cards
│   ├── RevenueChart.jsx   # Area chart (revenue/target/expenses)
│   ├── TrafficChart.jsx   # Donut chart (traffic sources)
│   ├── UsersChart.jsx     # Bar chart (weekly users)
│   ├── Transactions.jsx   # Transactions table
│   └── TopProducts.jsx    # Product revenue list
├── data.js                # Mock data
├── App.jsx                # Layout composition
├── main.jsx               # Entry point
└── index.css              # Global styles + Tailwind
```

## 🔧 Customization

- **Data**: Edit `src/data.js` to connect your real API
- **Colors**: Update `tailwind.config.js` color tokens
- **Navigation**: Add routes using React Router + update `Sidebar.jsx`
