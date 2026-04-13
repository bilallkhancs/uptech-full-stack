import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const CATEGORIES = [
  'beauty', 'fragrances', 'furniture', 'groceries', 'home-decoration',
  'kitchen-accessories', 'laptops', 'mens-shirts', 'mens-shoes', 'mens-watches',
  'mobile-accessories', 'motorcycle', 'skin-care', 'smartphones', 'sports-accessories',
  'sunglasses', 'tablets', 'tops', 'vehicle', 'womens-bags', 'womens-dresses',
  'womens-jewellery', 'womens-shoes', 'womens-watches'
];

const INITIAL = {
  title: '',
  description: '',
  price: '',
  discountPercentage: '',
  stock: '',
  brand: '',
  category: '',
  thumbnail: '',
};

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) e.price = 'Valid price is required';
    if (!form.category) e.category = 'Category is required';
    if (form.stock && isNaN(form.stock)) e.stock = 'Stock must be a number';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    try {
      await addProduct({
        ...form,
        price: Number(form.price),
        discountPercentage: Number(form.discountPercentage) || 0,
        stock: Number(form.stock) || 0,
        rating: 4.0,
      });
      navigate('/');
    } catch {
      // toast handled in context
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Link to="/" className="back-btn">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back to Products
      </Link>

      <div className="page-header">
        <p className="page-eyebrow">Catalog</p>
        <h1 className="page-title">Add New Product</h1>
        <p className="page-subtitle">Fill in the details to add a product to your inventory</p>
      </div>

      <form className="form-card" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Product Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g. Wireless Noise-Cancelling Headphones"
              style={errors.title ? { borderColor: 'var(--danger)' } : {}}
            />
            {errors.title && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.title}</span>}
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Describe the product..."
            />
          </div>

          <div className="form-grid form-grid-2" style={{ gridColumn: '1 / -1', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Price (USD) *</label>
              <input
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={handleChange}
                className="form-input"
                placeholder="0.00"
                style={errors.price ? { borderColor: 'var(--danger)' } : {}}
              />
              {errors.price && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.price}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Discount %</label>
              <input
                name="discountPercentage"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={form.discountPercentage}
                onChange={handleChange}
                className="form-input"
                placeholder="0"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Stock</label>
              <input
                name="stock"
                type="number"
                min="0"
                value={form.stock}
                onChange={handleChange}
                className="form-input"
                placeholder="0"
                style={errors.stock ? { borderColor: 'var(--danger)' } : {}}
              />
              {errors.stock && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.stock}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Brand</label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. Sony"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-select"
              style={errors.category ? { borderColor: 'var(--danger)' } : {}}
            >
              <option value="">Select a category</option>
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c.replace(/-/g, ' ')}</option>
              ))}
            </select>
            {errors.category && <span style={{ color: 'var(--danger)', fontSize: '0.8rem' }}>{errors.category}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Thumbnail URL</label>
            <input
              name="thumbnail"
              value={form.thumbnail}
              onChange={handleChange}
              className="form-input"
              placeholder="https://..."
            />
          </div>

        </div>

        <div className="form-footer">
          <Link to="/" className="btn btn-outline">Cancel</Link>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      </form>
    </>
  );
}
