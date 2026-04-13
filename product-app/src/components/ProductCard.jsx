import { useNavigate } from 'react-router-dom';

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
  return <span className="stars">{stars.slice(0, 5)}</span>;
}

export default function ProductCard({ product, onDeleteClick }) {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="card-image-wrap">
        <img
          src={product.thumbnail}
          alt={product.title}
          onError={e => { e.target.src = 'https://placehold.co/300x200?text=No+Image'; }}
        />
        {product.category && (
          <span className="card-category-badge">{product.category}</span>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-price">${product.price}</div>
        {product.rating && (
          <div className="card-rating">
            <StarRating rating={product.rating} />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className="card-actions" onClick={e => e.stopPropagation()}>
        <button
          className="btn btn-outline btn-sm"
          onClick={() => navigate(`/edit/${product.id}`)}
        >
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteClick(product)}
        >
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
