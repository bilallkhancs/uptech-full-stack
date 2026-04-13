import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import ConfirmModal from '../components/ConfirmModal';

export default function ProductList() {
  const { filteredProducts, loading, error, searchTerm, setSearchTerm, deleteProduct } = useProducts();
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteConfirm = async () => {
    setDeleting(true);
    try {
      await deleteProduct(deleteTarget.id);
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="state-center">
        <div className="spinner" />
        <p className="state-text">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-center">
        <div className="state-icon error">⚠</div>
        <p className="state-title">Something went wrong</p>
        <p className="state-text">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="page-header">
        <p className="page-eyebrow">Inventory</p>
        <h1 className="page-title">All Products</h1>
        <p className="page-subtitle">Browse, search, and manage your product catalog</p>
      </div>

      <div className="toolbar">
        <div className="search-wrapper">
          <svg className="search-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search products by title..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="search-clear" onClick={() => setSearchTerm('')}>✕</button>
          )}
        </div>

        <p className="product-count">
          Showing <span>{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          {searchTerm && <span> for "{searchTerm}"</span>}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="state-center">
          <div className="state-icon empty">🔍</div>
          <p className="state-title">No products found</p>
          <p className="state-text">Try a different search term</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product, i) => (
            <div key={product.id} style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}>
              <ProductCard
                product={product}
                onDeleteClick={setDeleteTarget}
              />
            </div>
          ))}
        </div>
      )}

      {deleteTarget && (
        <ConfirmModal
          title="Delete Product"
          message={<>Are you sure you want to delete <strong>"{deleteTarget.title}"</strong>? This action cannot be undone.</>}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}
    </>
  );
}
