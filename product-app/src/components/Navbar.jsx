import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-dot" />
          ProductVault
        </Link>
        <div className="navbar-actions">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate('/add')}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M12 5v14M5 12h14"/>
            </svg>
            Add Product
          </button>
        </div>
      </div>
    </nav>
  );
}
