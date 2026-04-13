import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ConfirmModal from '../components/ConfirmModal';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct, deleteProduct } = useProducts();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProduct(id)
      .then(setProduct)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id, getProduct]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteProduct(id);
      navigate('/');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="state-center">
        <div className="spinner" />
        <p className="state-text">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="state-center">
        <p className="state-title">Product not found</p>
        <Link to="/" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <>
      <Link to="/" className="back-btn">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back to Products
      </Link>

      <div className="detail-grid">
        <div className="detail-image-wrap">
          <img
            src={product.thumbnail}
            alt={product.title}
            onError={e => { e.target.src = 'https://placehold.co/400x400?text=No+Image'; }}
          />
        </div>

        <div className="detail-info">
          <div>
            <span className="detail-category">{product.category}</span>
          </div>

          <div>
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-brand">by <span>{product.brand || 'Unknown Brand'}</span></p>
          </div>

          <div className="detail-price-row">
            <span className="detail-price">${product.price}</span>
            {product.discountPercentage && (
              <span className="detail-discount">-{product.discountPercentage?.toFixed(1)}% OFF</span>
            )}
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-meta">
            {product.rating && (
              <div className="meta-item">
                <div className="meta-label">Rating</div>
                <div className="meta-value">⭐ {product.rating?.toFixed(1)} / 5</div>
              </div>
            )}
            {product.stock !== undefined && (
              <div className="meta-item">
                <div className="meta-label">Stock</div>
                <div className="meta-value">{product.stock} units</div>
              </div>
            )}
            {product.sku && (
              <div className="meta-item">
                <div className="meta-label">SKU</div>
                <div className="meta-value">{product.sku}</div>
              </div>
            )}
            {product.warrantyInformation && (
              <div className="meta-item">
                <div className="meta-label">Warranty</div>
                <div className="meta-value">{product.warrantyInformation}</div>
              </div>
            )}
          </div>

          <div className="detail-actions">
            <button className="btn btn-primary" onClick={() => navigate(`/edit/${product.id}`)}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
              Edit Product
            </button>
            <button className="btn btn-danger" onClick={() => setShowConfirm(true)}>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal
          title="Delete Product"
          message={<>Are you sure you want to delete <strong>"{product.title}"</strong>?</>}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
          loading={deleting}
        />
      )}
    </>
  );
}
