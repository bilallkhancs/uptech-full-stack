import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ProductContext = createContext(null);

const BASE_URL = 'https://dummyjson.com/products';

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [toasts, setToasts] = useState([]);

  // Toast helper
  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500);
  }, []);

  // Filtered products based on searchTerm (client-side)
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch all products
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}?limit=100`);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
      addToast(err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [addToast]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Get single product by ID
  const getProduct = useCallback(async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) throw new Error('Product not found');
      return await res.json();
    } catch (err) {
      addToast(err.message, 'error');
      throw err;
    }
  }, [addToast]);

  // Add product
  const addProduct = useCallback(async (productData) => {
    try {
      const res = await fetch(`${BASE_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (!res.ok) throw new Error('Failed to add product');
      const newProduct = await res.json();
      // DummyJSON returns the new product — prepend it locally
      setProducts(prev => [{ ...newProduct, id: Date.now() }, ...prev]);
      addToast(`"${newProduct.title}" added successfully!`);
      return newProduct;
    } catch (err) {
      addToast(err.message, 'error');
      throw err;
    }
  }, [addToast]);

  // Update product
  const updateProduct = useCallback(async (id, productData) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (!res.ok) throw new Error('Failed to update product');
      const updated = await res.json();
      setProducts(prev =>
        prev.map(p => (p.id === Number(id) ? { ...p, ...updated } : p))
      );
      addToast(`"${updated.title}" updated successfully!`);
      return updated;
    } catch (err) {
      addToast(err.message, 'error');
      throw err;
    }
  }, [addToast]);

  // Delete product
  const deleteProduct = useCallback(async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete product');
      const deleted = await res.json();
      setProducts(prev => prev.filter(p => p.id !== Number(id)));
      addToast(`"${deleted.title}" deleted.`, 'success');
    } catch (err) {
      addToast(err.message, 'error');
      throw err;
    }
  }, [addToast]);

  return (
    <ProductContext.Provider value={{
      products,
      filteredProducts,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      fetchProducts,
      getProduct,
      addProduct,
      updateProduct,
      deleteProduct,
      toasts,
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProducts must be used inside ProductProvider');
  return ctx;
}
