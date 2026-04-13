import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-code">404</div>
      <h1 className="page-title">Page Not Found</h1>
      <p className="page-subtitle">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
        Back to Home
      </Link>
    </div>
  );
}
